# Docs

Nextra-powered documentation site with MDX, full-text search, and theme customization.

## Development

```bash
pnpm dev --filter docs
```

Runs on [http://localhost:3001](http://localhost:3001).

## Content Structure

Documentation pages live in `content/docs/`. Add `.mdx` files to create new pages. Navigation is configured in `content/docs/_meta.global.tsx`.

## Search

Search is powered by Pagefind and works after building:

```bash
pnpm build --filter docs
```

## Tech Stack

- Next.js 16
- Nextra 4.6
- MDX
