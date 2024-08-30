# jasozh.github.io

A personal portfolio website written in Svelte and designed from the ground up to be modern, performant, and responsive.

## CI/CD

The repository is configured with automatic monthly updates using Dependabot and automatic build testing before each pull request. The CI/CD pipeline consists of the following workflows:

- `svelte.yml` automatically deploys the website to GitHub Pages on every push to the `main` branch.
- `pull_request.yml` runs a sanity check on every opened pull request to make sure the app still builds.
- `dependabot.yml` automatically updates dependencies on a monthly basis. Major updates have individual pull requests while all minor and patch updates are grouped together.
- `dependabot_auto_merge.yml` automatically merges pull requests by Dependabot if it passes the sanity check.

The following GitHub settings are enabled:

- **General > Allow auto-merge**
- **Branches > Branch protection > Require status checks to pass before merging (pull_request_build)**
