# TypeScript Configuration

Shared TypeScript configurations for the monorepo.

## Configurations

| File | Purpose |
|------|---------|
| `base.json` | Base strict config with declarations and isolated modules |
| `nextjs.json` | Next.js apps — extends base with JSX, path aliases, Next.js plugin |
| `react-library.json` | React libraries — extends base with ES2015+, react-jsx |

## Usage

Extend in your `tsconfig.json`:

```json
{
  "extends": "tsconfig/nextjs.json"
}
```
