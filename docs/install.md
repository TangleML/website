---
id: install
title: Installation
---

### Try on local machine

1. Install [Docker](https://www.docker.com/get-started/) and [uv](https://docs.astral.sh/uv/getting-started/installation/).
2. Download the app code (needs to be done once):

```shell
git clone https://github.com/tangleml/tangle.git tangle/backend --branch stable
git clone https://github.com/tangleml/tangle-ui.git tangle/frontend_build --branch gh_pages_stable --single-branch --depth 1
```

3. Start the app:

Linux and Mac OS:

```shell
cd tangle && backend/start_local.sh
```

Windows:

```bat
cd tangle && backend\start_local.cmd
```

4. Once the "start_local: Starting the orchestrator" message appears in the terminal, open the [http://localhost:8000](http://localhost:8000) URL in a Web browser and start use the app.
   Click the "New Pipeline" button at the top to start building a new pipeline.

### Try in Google Cloud Shell (free)

[Google Cloud Shell](https://cloud.google.com/shell/) is free (50 hours per week) and needs a Google Cloud account.

1. Open [Google Cloud Shell](https://shell.cloud.google.com/?show=terminal) in a Web browser
2. Download the app code (needs to be done once):

```shell
git clone https://github.com/tangleml/tangle.git tangle/backend --branch stable
git clone https://github.com/tangleml/tangle-ui.git tangle/frontend_build --branch gh_pages_stable --single-branch --depth 1
```

3. Start the app:

```shell
cd tangle && backend/start_local.sh
```

4. Once the "start_local: Starting the orchestrator", "View app at" messages appears in the terminal, open the [https://shell.cloud.google.com/devshell/proxy?port=8000](https://shell.cloud.google.com/devshell/proxy?port=8000) URL in another browser tab and start using the app.
