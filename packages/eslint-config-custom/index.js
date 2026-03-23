import nextConfig from 'eslint-config-next';
import turboConfig from 'eslint-config-turbo/flat';
import prettierConfig from 'eslint-config-prettier/flat';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...nextConfig,
  ...turboConfig,
  prettierConfig,
  {
    name: 'custom/overrides',
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
];

export default config;
