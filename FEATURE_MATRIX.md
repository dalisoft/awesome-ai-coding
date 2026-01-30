# Feature Matrix

AI coding agents feature matrix. I provide to tools which i'm using daily or used

## CLI Agents

| Features           | Claude Code       | OpenCode    | Codex             | Droid       | Gemini      |
| ------------------ | ----------------- | ----------- | ----------------- | ----------- | ----------- |
| Performance        | Slow              | Fast        | Fastest           | Medium      | Medium      |
| Debug agent        | Yes               | No          | No                | No          | -           |
| Extensions         | VSCode, JetBrains | -           | VSCode, JetBrains | -           | VSCode      |
| IDE Integration    | VSCode, Zed       | VSCode      | VSCode, Zed       | VSCode, Zed | VSCod, Zed  |
| Source code        | Closed            | FOSS        | -                 | Closed      | -           |
| **Mode**           |                   |             |                   |             |             |
| Orchestrator mode  | No                | No          | No                | No          | No          |
| Plan mode          | Yes               | Yes         | Partial           | Yes         | No          |
| Act mode           | Yes               | Yes         | Yes               | Yes         | Yes         |
| Ask mode           | Yes               | Partial     | Yes               | Partial     | No          |
| Chat mode          | _Plan mode_       | _Plan mode_ | _Read-only_       | _Plan mode_ | No          |
| To-Do Prepare      | Yes               | No          | No                | Yes         | No          |
| &nbsp;             |                   |             |                   |             |             |
| **MCP**            | Yes               | Yes         | Yes               | Yes         | Yes         |
| MCP Lazy/Search    | Yes               | No          | No                | No          | No          |
| &nbsp;             |                   |             |                   |             |             |
| **Tools**          |                   |             |                   |             |             |
| Web search         | Yes               | No          | Yes               | Yes         | Yes         |
| Web fetch          | Yes               | Yes         | Yes               | Yes         | Yes         |
| &nbsp;             |                   |             |                   |             |             |
| **Skills**         | Yes               | Yes         | Yes               | Yes         | Yes         |
| Skills Lazy/Search | Yes               | Yes         | Yes               | Yes         | Yes         |
| Skills Commands    | Yes               | No          | No                | No          | No          |
| &nbsp;             |                   |             |                   |             |             |
| **Features**       |                   |             |                   |             |             |
| `AGENTS.md`        | `CLAUDE.md`       | Yes         | Yes               | Yes         | `GEMINI.md` |
| Plugins            | Yes               | Yes         | No                | No          | Extensions  |
| Hooks              | Yes               | No          | No                | Yes         | Yes         |
| LSP                | Yes               | Yes         | No                | No          | No          |
| Hierarchical Tree  | Yes               | No          | No                | No          | ?           |
| &nbsp;             |                   |             |                   |             |             |
| **Customization**  |                   |             |                   |             |             |
| Custom models      | Partial           | Yes         | No                | Partial     | No          |
| BYOK               | Vendor            | Yes         | Vendor            | Yes         | Vendor      |
| **Security**       |                   |             |                   |             |             |
| Sandbox            | Yes               | No          | Yes               | No          | Yes         |

## Extensions

| Features           | Claude Code | Cline             | Roo Code    | Kilo Code         | Codex       | Github Copilot         | Gemini Code Assist |
| ------------------ | ----------- | ----------------- | ----------- | ----------------- | ----------- | ---------------------- | ------------------ |
| Performance        | Slow        | Medium            | Medium      | Medium            | Fastest     | Medium                 | Medium             |
| Debug extension    | -           | -                 | -           | -                 | -           | -                      | -                  |
| Available          | VSCode, Zed | VSCode, JetBrains | VSCode      | VSCode, JetBrains | VSCode, Zed | VSCode, JetBrains, Zed | VSCode, Zed        |
| Source code        | Closed      | FOSS              | FOSS        | FOSS              | -           | FOSS                   | -                  |
| **Mode**           |             |                   |             |                   |             |                        |                    |
| Orchestrator mode  | No          | No                | Yes         | Yes               | No          | No                     | No                 |
| Plan mode          | Yes         | Yes               | Yes         | Yes               | Partial     | Yes                    | No                 |
| Act mode           | Yes         | Yes               | Yes         | Yes               | Yes         | Yes                    | Yes                |
| Ask mode           | Yes         | No                | No          | Partial           | Yes         | Partial                | No                 |
| Chat mode          | _Plan mode_ | _Plan mode_       | _Plan mode_ | _Plan mode_       | _Read-only_ | _Plan mode_            | No                 |
| To-Do Prepare      | Yes         | -                 | -           | Yes               | No          | Yes                    | No                 |
| &nbsp;             |             |                   |             |                   |             |                        |                    |
| **MCP**            | Yes         | Yes               | Yes         | Yes               | Yes         | Yes                    | Yes                |
| MCP Lazy/Search    | Yes         | No                | No          | No                | No          | No                     | No                 |
| &nbsp;             |             |                   |             |                   |             |                        |                    |
| **Tools**          |             |                   |             |                   |             |                        |                    |
| Web search         | Yes         | Partial           | No          | No                | Yes         | Yes                    | Yes                |
| Web fetch          | Yes         | Partial           | No          | No                | Yes         | Yes                    | Yes                |
| &nbsp;             |             |                   |             |                   |             |                        |                    |
| **Skills**         | Yes         | Yes               | Yes         | Kilo Rules        | Yes         | Yes                    | Yes                |
| Skills Lazy/Search | Yes         | Yes               | Yes         | Yes               | Yes         | Yes                    | Yes                |
| Skills Commands    | Yes         | No                | No          | No                | No          | No                     | No                 |
| &nbsp;             |             |                   |             |                   |             |                        |                    |
| **Features**       |             |                   |             |                   |             |                        |                    |
| `AGENTS.md`        | `CLAUDE.md` | Yes               | Yes         | Yes               | Yes         | Yes                    | `GEMINI.md`        |
| Plugins            | Yes         | No                | No          | No                | No          | No                     | Extensions         |
| Hooks              | Yes         | No                | No          | No                | No          | No                     | Yes                |
| LSP                | Yes         | No                | No          | No                | No          | No                     | No                 |
| Hierarchical Tree  | Yes         | Yes               | No          | Yes               | No          | No                     | ?                  |
| &nbsp;             |             |                   |             |                   |             |                        |                    |
| **Customization**  |             |                   |             |                   |             |                        |                    |
| Custom models      | Partial     | Yes               | Yes         | Yes               | No          | No                     | No                 |
| BYOK               | Vendor      | Yes               | Yes         | Yes               | Vendor      | Partial                | Vendor             |
| **Security**       |             |                   |             |                   |             |                        |                    |
| Sandbox            | Yes         | No                | No          | No                | Yes         | No                     | Yes                |
