// @ts-check
/** @param {import('@actions/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
export default async function prSpamGuard({ github, core, context }) {
  if (!context?.payload?.pull_request) {
    throw new Error(
      "The workflow was configured incorrectly. Please check workflow",
    );
  }

  const author = context.payload.pull_request.user.login;
  const prTitle = context.payload.pull_request.title;

  // 1. Look up author profile age + activity
  const { data: user } = await github.rest.users.getByUsername({
    username: author,
  });
  const accountAgeDays = Math.floor(
    (Date.now() - new Date(user.created_at).valueOf()) / 86400000,
  );

  // 2. Search for the same author's open + closed PRs across GitHub
  const { data: search } = await github.rest.search.issuesAndPullRequests({
    order: "desc",
    per_page: 100,
    q: `author:${author} type:pr`,
    sort: "created",
  });
  const recentPRs = search.items.filter((item) => {
    const ageDays =
      (Date.now() - new Date(item.created_at).valueOf()) / 86400000;
    return ageDays <= 14;
  });

  // 3. Check whether THIS PR's title was used elsewhere recently (blast pattern)
  const titleWords = prTitle
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((/** @type {string} */ word) => word.length >= 4);
  const titleSig = titleWords.slice(0, 3).join(" ");
  const titleHits = await github.rest.search
    .issuesAndPullRequests({
      per_page: 50,
      q: `${titleSig} author:${author} type:pr`,
    })
    .catch(() => ({ data: { items: [] } }));

  // 4. Build report
  const flags = [];
  if (accountAgeDays < 60)
    flags.push(`🚨 Account is only **${accountAgeDays} days old**`);
  if (user.followers === 0) flags.push(`⚠️ Account has **0 followers**`);
  if (recentPRs.length > 8)
    flags.push(
      `⚠️ Submitter has **${recentPRs.length} PRs in the last 14 days**`,
    );
  if (titleHits.data.items.length > 3)
    flags.push(
      `🚨 Identical title submitted to **${titleHits.data.items.length} repos** by the same author`,
    );

  const body = [
    `### 🛂 PR Spam Guard report`,
    ``,
    `**Submitter:** \`@${author}\` — account age **${accountAgeDays} days**, ${user.followers} followers, ${user.public_repos} public repos.`,
    ``,
    flags.length === 0
      ? `✅ No automated red flags detected.`
      : `**Automated red flags:**\n${flags.map((f) => `- ${f}`).join("\n")}`,
    ``,
    `_This is an advisory. Maintainer judgement is required to merge or close._`,
  ]
    .filter(Boolean)
    .join("\n");

  await github.rest.issues.createComment({
    body,
    issue_number: context.payload.pull_request.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
  });

  if (accountAgeDays <= 30 && recentPRs.length >= 30) {
    /* TODO: Close a PR if such conditions are met */
  }
}
