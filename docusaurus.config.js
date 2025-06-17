// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doqario',
  favicon: '/img/ovl.svg',

  url: 'https://docs.doqario.com',
  baseUrl: '/', 

  organizationName: 'doqario',
  projectName: 'doqario-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/doqario/doqario-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/doqario/doqario-docs/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        { name: 'description', content: 'Doqario -  Don’t write docs — design your system. Doqario is the missing layer between thought and implementation.' },
        { name: 'keywords', content: 'doqario, documentation, knowledge, AI, blueprint, docartio' },
        { name: 'author', content: 'Doqario' },
        { property: 'og:title', content: 'Doqario' },
        { property: 'og:description', content: 'Doqario -  Don’t write docs — design your system. Doqario is the missing layer between thought and implementation.'},
        { property: 'og:url', content: 'https://docs.doqario.com' },
      ],      
      image: '/img/ovl.svg',
      navbar: {
        title: 'Doqario',
        logo: {
          alt: 'Doqario Logo',
          src: '/img/ovl.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/doqario/doqario-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Documentation', to: '/docs/doqario/rules' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/doqario/doqario-docs' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
            ],
          },
        ],
        copyright: `Site powered by Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [require.resolve('docusaurus-lunr-search')],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
