# Branch Setup Instructions

## Problem

The repository currently has `divergent-realities-site-9375191757226030361` set as the default branch, but `main` should be the default branch.

## Solution

The default branch is a GitHub repository setting that must be changed through the GitHub web interface.

### Steps to Change Default Branch

1. **Navigate to Repository Settings**
   - Go to https://github.com/mgifford/perception
   - Click on **Settings** (top right, near the repository name)

2. **Change Default Branch**
   - In the left sidebar, click **Branches**
   - Under "Default branch", you'll see the current default branch
   - Click the switch/edit icon (⇄) next to the branch name
   - Select **main** from the dropdown
   - Click **Update** and confirm the change

3. **Clean Up (Optional)**
   - After changing the default branch, you may want to delete the old branch
   - Go to the repository's main page
   - Click on the branch dropdown
   - Find `divergent-realities-site-9375191757226030361`
   - Click the delete icon (trash can) next to it
   - Confirm deletion

### Verification

After changing the default branch:
- New clones will check out `main` by default
- Pull requests will target `main` by default
- The repository page will display `main` branch content by default

## Current Branch Status

- **main**: Contains all project files (index.html, script.js, styles.css, etc.)
- **divergent-realities-site-9375191757226030361**: Empty/orphan branch that can be safely deleted

## Why This Can't Be Done Via Git

The default branch setting is a GitHub repository configuration, not a git setting. While git can create, delete, and push branches, the repository's default branch is managed by GitHub's web interface or API.
