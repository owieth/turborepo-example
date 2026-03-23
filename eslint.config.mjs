import customConfig from 'eslint-config-custom';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...customConfig,
  {
    name: 'root/settings',
    settings: {
      next: {
        rootDir: ['apps/*/'],
      },
    },
  },
];
