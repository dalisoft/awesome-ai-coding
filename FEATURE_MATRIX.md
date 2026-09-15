# Feature Matrix

AI coding agents feature matrix. I provide to tools which i'm using daily or used

## CLI Agents

| Features           | Claude Code               | OpenCode    | Codex                                          | Droid                 |
| ------------------ | ------------------------- | ----------- | ---------------------------------------------- | --------------------- |
| Performance        | Medium                    | Fast        | Slow                                           | Medium                |
| Debug agent        | Yes                       | No          | No                                             | No                    |
| Extensions         | VSCode, JetBrains         | -           | VSCode, JetBrains                              | -                     |
| IDE Integration    | VSCode                    | VSCode      | VSCode, Zed                                    | VSCode, Zed           |
| Source code        | Closed                    | FOSS        | FOSS                                           | Closed                |
| &nbsp;             |                           |             |                                                |                       |
| **Mode**           |                           |             |                                                |                       |
| Orchestrator mode  | No                        | No          | No                                             | No                    |
| Plan mode          | Yes                       | Yes         | Yes                                            | Yes                   |
| Act mode           | Yes                       | Yes         | Yes                                            | Yes                   |
| Ask mode           | Yes                       | Partial     | Partial                                        | Partial               |
| Chat mode          | _Plan mode_               | _Plan mode_ | _Read-only_                                    | _Plan mode_           |
| To-Do Prepare      | Yes                       | No          | No                                             | Yes                   |
| Ralph / METR       | No                        | No          | [`/goal`][codg]                                | [`/missions`][dromis] |
| &nbsp;             |                           |             |                                                |                       |
| **MCP**            | Yes                       | Yes         | Yes                                            | Yes                   |
| MCP Lazy/Search    | Yes <sup>[1][cc1]</sup>   | No          | Yes <sup>[1][cod1], [2][cod2], [3][cod3]</sup> | Yes [1][drodce]       |
| &nbsp;             |                           |             |                                                |                       |
| **Tools**          |                           |             |                                                |                       |
| Web search         | Yes                       | No          | Yes                                            | Yes                   |
| Web fetch          | Yes                       | Yes         | Yes                                            | Yes                   |
| Tool search        | Yes <sup>[1][cc1]</sup>   | No          | Yes <sup>[1][cod1], [2][cod2], [3][cod3]</sup> | Yes [1][drodce]       |
| Advisor            | _A/B_ <sup>[1][cc2]</sup> | No          | No                                             | No                    |
| Parallel calling   | Yes <sup>[1][cc3]</sup>   | Yes ?       | Yes                                            | No                    |
| &nbsp;             |                           |             |                                                |                       |
| **Skills**         | Yes                       | Yes         | Yes                                            | Yes                   |
| Skills Lazy/Search | Yes                       | Yes         | Yes                                            | Yes                   |
| Skills Commands    | Yes                       | No          | No                                             | No                    |
| `.agents` Unified  | No                        | Yes         | Yes                                            | No                    |
| &nbsp;             |                           |             |                                                |                       |
| **Features**       |                           |             |                                                |                       |
| `AGENTS.md`        | `CLAUDE.md`               | Yes         | Yes                                            | Yes                   |
| Plugins            | Yes                       | Yes         | Yes                                            | Yes                   |
| Hooks              | Yes                       | No          | Yes                                            | Yes                   |
| LSP                | Yes                       | Yes         | Yes                                            | No                    |
| Hierarchical Tree  | Yes                       | No          | No                                             | No                    |
| Subagents          | Yes                       | No          | Yes                                            | No                    |
| Swarm/Teams        | Yes                       | No          | Yes                                            | No                    |
| Steer Chat         | No                        | No          | Yes                                            | No                    |
| &nbsp;             |                           |             |                                                |                       |
| **Customization**  |                           |             |                                                |                       |
| Custom models      | Partial                   | Yes         | Partial                                        | Partial               |
| BYOK               | Vendor                    | Yes         | Vendor                                         | Yes                   |
| **Security**       |                           |             |                                                |                       |
| Sandbox            | Yes                       | No          | Yes                                            | No                    |

## Extensions

| Features           | Claude Code             | Cline             | Kilo Code         | Codex                                          | Github Copilot         |
| ------------------ | ----------------------- | ----------------- | ----------------- | ---------------------------------------------- | ---------------------- |
| Performance        | Slow                    | Medium            | Medium            | Medium                                         | Medium                 |
| Debug extension    | -                       | -                 | -                 | -                                              | -                      |
| Available          | VSCode                  | VSCode, JetBrains | VSCode, JetBrains | VSCode, Zed                                    | VSCode, JetBrains, Zed |
| Source code        | Closed                  | FOSS              | FOSS              | Closed                                         | FOSS                   |
| &nbsp;             |                         |                   |                   |                                                |                        |
| **Mode**           |                         |                   |                   |                                                |                        |
| Orchestrator mode  | No                      | No                | Yes               | No                                             | No                     |
| Plan mode          | Yes                     | Yes               | Yes               | Yes                                            | Yes                    |
| Act mode           | Yes                     | Yes               | Yes               | Yes                                            | Yes                    |
| Ask mode           | Yes                     | No                | Partial           | Partial                                        | Partial                |
| Chat mode          | _Plan mode_             | _Plan mode_       | _Plan mode_       | _Read-only_                                    | _Plan mode_            |
| To-Do Prepare      | Yes                     | -                 | Yes               | No                                             | Yes                    |
| &nbsp;             |                         |                   |                   |                                                |                        |
| **MCP**            | Yes                     | Yes               | Yes               | Yes                                            | Yes                    |
| MCP Lazy/Search    | Yes <sup>[1][cc1]</sup> | No                | No                | Yes <sup>[1][cod1], [2][cod2], [3][cod3]</sup> | Yes                    |
| &nbsp;             |                         |                   |                   |                                                |                        |
| **Tools**          |                         |                   |                   |                                                |                        |
| Web search         | Yes                     | Partial           | No                | Yes                                            | Yes                    |
| Web fetch          | Yes                     | Partial           | No                | Yes                                            | Yes                    |
| &nbsp;             |                         |                   |                   |                                                |                        |
| **Skills**         | Yes                     | Yes               | Kilo Rules        | Yes                                            | Yes                    |
| Skills Lazy/Search | Yes                     | Yes               | Yes               | Yes                                            | Yes                    |
| Skills Commands    | Yes                     | No                | No                | No                                             | No                     |
| `.agents` Unified  | No                      | No                | No                | Yes                                            | Yes                    |
| &nbsp;             |                         |                   |                   |                                                |                        |
| **Features**       |                         |                   |                   |                                                |                        |
| `AGENTS.md`        | `CLAUDE.md`             | Yes               | Yes               | Yes                                            | Yes                    |
| Plugins            | Yes                     | No                | No                | Yes                                            | No                     |
| Hooks              | Yes                     | No                | No                | Yes                                            | No                     |
| LSP                | Yes                     | No                | No                | Yes                                            | No                     |
| Hierarchical Tree  | Yes                     | Yes               | Yes               | No                                             | No                     |
| Subagents          | Yes                     | No                | No                | Yes                                            | No                     |
| Swarm/Teams        | Yes                     | No                | No                | No                                             | No                     |
| Steer Chat         | No                      | No                | Yes               | No                                             | No                     |
| &nbsp;             |                         |                   |                   |                                                |                        |
| **Customization**  |                         |                   |                   |                                                |                        |
| Custom models      | Partial                 | Yes               | Yes               | Partial                                        | No                     |
| BYOK               | Vendor                  | Yes               | Yes               | Vendor                                         | Partial                |
| **Security**       |                         |                   |                   |                                                |                        |
| Sandbox            | Yes                     | No                | No                | Yes                                            | No                     |

[cc1]: https://www.anthropic.com/engineering/advanced-tool-use
[cc2]: https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool
[cc3]: https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use
[cod1]: https://www.reddit.com/r/codex/comments/1r22uk1/new_search_tool_is_amazing
[cod2]: https://github.com/openai/codex/pull/10657
[cod3]: https://www.reddit.com/r/codex/comments/1t10am2/codex_features_list_which_are_disabled_under
[codg]: https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex
[drodce]: https://factory.ai/news/deferred-context-engine
[dromis]: https://factory.ai/news/missions
