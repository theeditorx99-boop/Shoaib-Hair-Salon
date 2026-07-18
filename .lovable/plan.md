## How to download your full SyncNode Labs codebase

No code changes are needed — this is a walkthrough of Lovable's built-in export.

### Steps (Desktop)

1. **Close the Files panel** you have open right now (click the ✕ in the top-right). That panel only shows generated artifacts, not your source code.
2. In the top toolbar (next to the globe/Preview icon), click the **`</>` Code icon**. This switches the workspace to the **Code Editor** view.
3. The **left sidebar** will now show your project's **file tree** (folders like `src/`, `public/`, `index.html`, `package.json`, etc.).
4. Scroll to the **bottom of the file tree**.
5. Click the **"Download codebase"** button. A `.zip` will download containing every file in the project.

### Keyboard shortcut

Press **Cmd+Shift+F** (Mac) or **Ctrl+Shift+F** (Windows/Linux) to jump straight into the Code Editor.

### Alternative: GitHub

If the Download button isn't visible (free workspaces don't have ZIP export), connect GitHub instead:
- Chat input **+ (Plus)** → **GitHub** → **Connect to GitHub**
- Lovable creates a repo with your full code; clone or download ZIP from GitHub.

### Notes

- ZIP download requires a **paid workspace**. If the button is missing at the bottom of the file tree, that's why — use the GitHub route above.
- The ZIP contains everything: all `src/components/syncnode/*`, assets, `package.json`, config files. Run `bun install` (or `npm install`) then `bun dev` locally.

Approve this plan and I'll confirm once you've located the button, or switch to build mode if you'd like me to adjust anything in the project itself.
