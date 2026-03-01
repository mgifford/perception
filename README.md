# Perception & Divergent Realities

An interactive educational experience designed to demonstrate perceptual bias, attention limits, and epistemic humility.

> **⚠️ Repository Setup Note:** If you're the repository owner, please see [BRANCH_SETUP.md](BRANCH_SETUP.md) for instructions on setting `main` as the default branch.

## Features
- **Video Gating:** Users cannot advance until they have watched the required psychological demonstration videos.
- **Progress Persistence:** Progress and reflections are saved automatically to `localStorage`.
- **Dark Neutral Theme:** Minimalist aesthetic designed for focus and serious study.
- **Research Grounded:** Every phase includes a "Research Basis" section with citations to primary sources.

## Deployment to GitHub Pages

This site is built as a static experience (HTML/CSS/JS) and can be deployed to GitHub Pages in under a minute:

1.  **Create a New Repository:** On GitHub, create a new public or private repository (e.g., `perception-study`).
2.  **Upload Files:** Upload the following files to the root of the repository:
    - `index.html`
    - `styles.css`
    - `script.js`
3.  **Enable GitHub Pages:**
    - Go to **Settings** > **Pages**.
    - Under "Build and deployment", set the source to **Deploy from a branch**.
    - Select the `main` branch and the `/ (root)` folder.
    - Click **Save**.
4.  **View Your Site:** After a few moments, GitHub will provide a URL (e.g., `https://username.github.io/perception-study/`).

## Local Development
To run the site locally, simply open `index.html` in any modern web browser. 

> **Note:** The YouTube IFrame API requires a valid origin. If you see errors in the console while running from a `file://` URI, consider using a simple local server (e.g., `npx serve .` or Python's `http.server`).

## Citations
Detailed research citations can be found in `CITATIONS.md`.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
