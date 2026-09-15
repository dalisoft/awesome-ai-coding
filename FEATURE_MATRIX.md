# Feature Matrix

AI coding agents feature matrix. I provide to tools which i'm using daily or used

## CLI Agents

| Features           | Claude Code               | OpenCode    | Codex                                          |
| ------------------ | ------------------------- | ----------- | ---------------------------------------------- |
| Performance        | Medium                    | Fast        | Slow                                           |
| Debug agent        | Yes                       | No          | No                                             |
| Extensions         | VSCode, JetBrains         | -           | VSCode, JetBrains                              |
| IDE Integration    | VSCode                    | VSCode      | VSCode, Zed                                    |
| Source code        | Closed                    | FOSS        | FOSS                                           |
| &nbsp;             |                           |             |                                                |
| **Mode**           |                           |             |                                                |
| Orchestrator mode  | No                        | No          | No                                             |
| Plan mode          | Yes                       | Yes         | Yes                                            |
| Act mode           | Yes                       | Yes         | Yes                                            |
| Ask mode           | Yes                       | Partial     | Partial                                        |
| Chat mode          | _Plan mode_               | _Plan mode_ | _Read-only_                                    |
| To-Do Prepare      | Yes                       | No          | No                                             |
| Ralph / METR       | No                        | No          | [`/goal`][codg]                                |
| &nbsp;             |                           |             |                                                |
| **MCP**            | Yes                       | Yes         | Yes                                            |
| MCP Lazy/Search    | Yes <sup>[1][cc1]</sup>   | No          | Yes <sup>[1][cod1], [2][cod2], [3][cod3]</sup> |
| &nbsp;             |                           |             |                                                |
| **Tools**          |                           |             |                                                |
| Web search         | Yes                       | No          | Yes                                            |
| Web fetch          | Yes                       | Yes         | Yes                                            |
| Tool search        | Yes <sup>[1][cc1]</sup>   | No          | Yes <sup>[1][cod1], [2][cod2], [3][cod3]</sup> |
| Advisor            | _A/B_ <sup>[1][cc2]</sup> | No          | No                                             |
| Parallel calling   | Yes <sup>[1][cc3]</sup>   | Yes ?       | Yes                                            |
| &nbsp;             |                           |             |                                                |
| **Skills**         | Yes                       | Yes         | Yes                                            |
| Skills Lazy/Search | Yes                       | Yes         | Yes                                            |
| Skills Commands    | Yes                       | No          | No                                             |
| `.agents` Unified  | No                        | Yes         | Yes                                            |
| &nbsp;             |                           |             |                                                |
| **Features**       |                           |             |                                                |
| `AGENTS.md`        | `CLAUDE.md`               | Yes         | Yes                                            |
| Plugins            | Yes                       | Yes         | Yes                                            |
| Hooks              | Yes                       | No          | Yes                                            |
| LSP                | Yes                       | Yes         | Yes                                            |
| Hierarchical Tree  | Yes                       | No          | No                                             |
| Subagents          | Yes                       | No          | Yes                                            |
| Swarm/Teams        | Yes                       | No          | Yes                                            |
| Steer Chat         | No                        | No          | Yes                                            |
| &nbsp;             |                           |             |                                                |
| **Customization**  |                           |             |                                                |
| Custom models      | Partial                   | Yes         | Partial                                        |
| BYOK               | Vendor                    | Yes         | Vendor                                         |
| **Security**       |                           |             |                                                |
| Sandbox            | Yes                       | No          | Yes                                            |

## Extensions

| Features           | Claude Code             | Cline             | Kilo Code         | Codex                                          |
| ------------------ | ----------------------- | ----------------- | ----------------- | ---------------------------------------------- |
| Performance        | Slow                    | Medium            | Medium            | Medium                                         |
| Debug extension    | -                       | -                 | -                 | -                                              |
| Available          | VSCode                  | VSCode, JetBrains | VSCode, JetBrains | VSCode, Zed                                    |
| Source code        | Closed                  | FOSS              | FOSS              | Closed                                         |
| &nbsp;             |                         |                   |                   |                                                |
| **Mode**           |                         |                   |                   |                                                |
| Orchestrator mode  | No                      | No                | Yes               | No                                             |
| Plan mode          | Yes                     | Yes               | Yes               | Yes                                            |
| Act mode           | Yes                     | Yes               | Yes               | Yes                                            |
| Ask mode           | Yes                     | No                | Partial           | Partial                                        |
| Chat mode          | _Plan mode_             | _Plan mode_       | _Plan mode_       | _Read-only_                                    |
| To-Do Prepare      | Yes                     | -                 | Yes               | No                                             |
| &nbsp;             |                         |                   |                   |                                                |
| **MCP**            | Yes                     | Yes               | Yes               | Yes                                            |
| MCP Lazy/Search    | Yes <sup>[1][cc1]</sup> | No                | No                | Yes <sup>[1][cod1], [2][cod2], [3][cod3]</sup> |
| &nbsp;             |                         |                   |                   |                                                |
| **Tools**          |                         |                   |                   |                                                |
| Web search         | Yes                     | Partial           | No                | Yes                                            |
| Web fetch          | Yes                     | Partial           | No                | Yes                                            |
| &nbsp;             |                         |                   |                   |                                                |
| **Skills**         | Yes                     | Yes               | Kilo Rules        | Yes                                            |
| Skills Lazy/Search | Yes                     | Yes               | Yes               | Yes                                            |
| Skills Commands    | Yes                     | No                | No                | No                                             |
| `.agents` Unified  | No                      | No                | No                | Yes                                            |
| &nbsp;             |                         |                   |                   |                                                |
| **Features**       |                         |                   |                   |                                                |
| `AGENTS.md`        | `CLAUDE.md`             | Yes               | Yes               | Yes                                            |
| Plugins            | Yes                     | No                | No                | Yes                                            |
| Hooks              | Yes                     | No                | No                | Yes                                            |
| LSP                | Yes                     | No                | No                | Yes                                            |
| Hierarchical Tree  | Yes                     | Yes               | Yes               | No                                             |
| Subagents          | Yes                     | No                | No                | Yes                                            |
| Swarm/Teams        | Yes                     | No                | No                | No                                             |
| Steer Chat         | No                      | No                | Yes               | No                                             |
| &nbsp;             |                         |                   |                   |                                                |
| **Customization**  |                         |                   |                   |                                                |
| Custom models      | Partial                 | Yes               | Yes               | Partial                                        |
| BYOK               | Vendor                  | Yes               | Yes               | Vendor                                         |
| **Security**       |                         |                   |                   |                                                |
| Sandbox            | Yes                     | No                | No                | Yes                                            |

[cc1]: https://www.anthropic.com/engineering/advanced-tool-use
[cc2]: https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool
[cc3]: https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use
[cod1]: https://www.reddit.com/r/codex/comments/1r22uk1/new_search_tool_is_amazing
[cod2]: https://github.com/openai/codex/pull/10657
[cod3]: https://www.reddit.com/r/codex/comments/1t10am2/codex_features_list_which_are_disabled_under
[codg]: https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex
