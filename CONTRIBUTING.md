# Contributing to the docs

We love that you're becoming a contributor to Tangle! This guide will walk you through the steps to propose changes to the official docs.

> **Note:** The easiest way to contribute is forking the repository, and using the editor on GitHub. For larger changes, continue to the steps below.
> 
> Ready to propose your changes? See [Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

## Step 1 - Pull the code

1. [Fork the `website` repository on GitHub](https://github.com/TangleML/website/fork).
2. Clone your forked repository.

## Step 2 - Run the docs locally

1. Ensure you have a compatible version of [Node](https://nodejs.org/en/download) installed (see [`package.json`](https://github.com/TangleML/website/blob/master/package.json) for requirements).
   - Running `node -v` will reveal your current version, or an error if you don't have node installed.
2. Run `npm install`.
3. Run `npm run start`.

## Step 3 - View and edit the docs

1. Wait for the dev server logs to read `Compiled successfully`.
2. Make changes within the `/docs`, `/src`, and `/static` directories.
   - Our documentation is built using Docusaurus, with guides available to you [here](https://docusaurus.io/docs/next/category/guides).
3. Preview changes by opening the dev server URL in your browser at [http://localhost:3000](http://localhost:3000).

## Step 4 - Submit your change for review

1. Commit and push your changes to a branch on your fork.
   - Please follow this commit message format:
     ```
     docs: Document Tangle personal preferences

     **Changes**

     * Adds document on personal preference settings
     * Adds link to document in sidebar
     ```
   - Other prefixes are `feat` (as in feature), `refactor`, and `fix`.
2. [Create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) from your fork into the `TangleML/website` repository.

