# ESLint Config Custom

Shared ESLint configuration extending Next.js, Turborepo, and Prettier rules.

## What's Included

- `eslint-config-next` — Next.js specific rules
- `eslint-config-turbo` — Turborepo best practices
- `eslint-config-prettier` — Disables rules that conflict with Prettier

## Usage

Extend in your `.eslintrc.js`:

```js
module.exports = {
  extends: ['custom'],
};
```
