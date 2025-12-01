import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { APP_NAME, APP_URL, DEMO_URL, GITHUB_BACKEND_REPO_URL, PRIVACY_POLICY } from "./constants";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: APP_NAME,
  tagline:
    `${APP_NAME} is a web app that allows the users to build and run Machine Learning pipelines using drag and drop without having to set up development environment.`,
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://tangleml.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TangleML", // Usually your GitHub org/user name.
  projectName: "tangle", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        // blog: {
        //   path: "./updates",
        //   routeBasePath: "updates",
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   blogSidebarTitle: `${APP_NAME} Product Updates`,
        //   blogSidebarCount: "ALL",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'plugin-image-zoom',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexPages: true,
        indexDocs: true,
        explicitSearchResultPath: true,
        // We want to be able to search for class names without supplying the full
        // module path. For example, entering the search term `AssociationLoader`
        // should be able to find occurrences of `GraphqlApi::Loaders::AssociationLoader`.
        // To enable this, we need to enable Mandarin as an additional language, which
        // overrides the default tokenizer.
        // https://github.com/easyops-cn/docusaurus-search-local/issues/91#issuecomment-851759722
        language: ['en', 'zh'],
        searchContextByPaths: [
          // Order here controls sort order of path in search index page drop down.
          'docs/getting-started',
          'docs/core-concepts',
          'docs/component-development',
          'docs/reference',
          'docs/user-guide',

        ],
        useAllContextsWithNoSearchContext: true,
      },
    ]
  ],

  markdown: {
    mermaid: true, // Enable Mermaid processing in Markdown
  },

  themes: ['docusaurus-theme-openapi-docs', '@docusaurus/theme-mermaid'],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    image: "img/icon.png",
    navbar: {
      logo: {
        alt: `${APP_NAME} Logo`,
        src: "img/tangle_black.png",
        srcDark: "img/tangle_white.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Documentation",
        },
        // { to: "/updates", label: "Updates", position: "left" },
        { to: DEMO_URL, label: "Playground", position: "left", className: "button button--primary button--lg" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Tangle",
          items: [
            {
              label: "Demo",
              to: DEMO_URL,
            },
            {
              label: "Explore",
              to: APP_URL,
            },
            {
              label: "Build",
              to: GITHUB_BACKEND_REPO_URL,
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Installation",
              to: "/docs/install",
            },
            {
              label: "Guides",
              to: "/docs",
            },
            {
              label: "Privacy Policy",
              to: PRIVACY_POLICY,
            },
          ],
        },
      ],
      // copyright: "Developed by Shopify",
      
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
