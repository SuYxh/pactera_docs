module.exports = {
  title: 'Pactera',
  tagline: '成就更美好的数字化新世界',
  url: 'https://pactera.ironc.cn/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SuYxh', // Usually your GitHub org/user name.
  projectName: 'pactera_docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pactera',
      logo: {
        alt: 'Logo',
        src: 'img/pactera-logo.svg',
      },
      items: [
        {
          to: 'docs/regulation/code',
          // activeBasePath: 'docs',
          label: '规范文档',
          position: 'left',
        },
        {
          to: 'docs/components/index',
          // activeBasePath: 'docs',
          label: '组件',
          position: 'left',
        },
        {
          label: "工具",
          position: "left",
          items: [
            {
              label: "vscode",
              to: "docs/tools/vscode/vscode",
            },
            {
              to:"docs/tools/sourcetree/sourcetree",
              label: "sourcetree",
              // position: "right",
            },
          ],
        },
        {to: 'blog', label: '前端进阶', position: 'left'},
        {
          href: 'https://gitlab.superdxp.com/',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '规范文档',
          items: [
            {
              label: '开发规范',
              to: 'docs/regulation/code',
            },
            {
              label: 'Git规范',
              to: 'docs/regulation/git',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'TGideas',
              href: 'https://tgideas.qq.com/doc/index.html',
            },
            {
              label: '凹凸实验室',
              href: 'https://guide.aotu.io/index.html',
            },
            {
              label: 'Airbnb',
              href: 'https://github.com/airbnb/javascript',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label:'Pactera',
              href:'https://www.pactera.com/',
            },
            {
              label: '中国电子',
              href: 'https://www.cec.com.cn/',
            },
            {
              label: 'Blog',
              to: 'https://ironc.gitee.io/vpreco/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pactera Docs, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SuYxh/pactera_docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SuYxh/pactera_docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
