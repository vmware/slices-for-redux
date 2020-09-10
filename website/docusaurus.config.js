// site configuration options.

module.exports = {
  title: 'Slices for Redux',
  tagline: 'Slices and SliceGroups that scale. Reduce boilerplate. Split code.',
  url: 'https://vmware.github.io',
  baseUrl: '/slices-for-redux/',
  favicon: 'img/favicon.ico',

  // Usually your GitHub org/user name.
  organizationName: 'vmware',
  // Usually your repo name.
  projectName: 'slices-for-redux',

  themeConfig: {
    disableDarkMode: true,

    // Added
    prism: {
      theme: require('./src/js/monokaiTheme.js'),
    },

    navbar: {
      title: 'Slices for Redux',
      logo: {
        alt: 'Slices for Redux Logo',
        src: 'img/slices-for-redux.svg',
      },
      links: [
        {
          to: 'docs/introduction/quick-start',
          label: 'Quick Start',
          position: 'right',
        },
        { to: 'docs/api/createSlice', label: 'API', position: 'right' },
        {
          href: 'https://github.com/vmware/slices-for-redux',
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
            {
              label: 'Quick Start',
              to: 'docs/introduction/quick-start',
            },
            {
              label: 'API Reference',
              to: 'docs/api/createSlice',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href:
                'http://stackoverflow.com/questions/tagged/slices-for-redux',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vmware/slices-for-redux',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'https://docusaurus.io/img/oss_logo.png',
      //   href: 'https://opensource.facebook.com/',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} VMware, Inc. and other contributors.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
