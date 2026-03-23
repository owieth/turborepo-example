# Contributing

Thank you for your interest in contributing to Turborepo Example.

## Setup

```bash
git clone https://github.com/owieth/turborepo-example.git
cd turborepo-example
pnpm install
pnpm dev
```

## Development Workflow

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature
   ```

2. Make your changes and verify:
   ```bash
   pnpm lint
   pnpm build
   ```

3. Commit using [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat(scope): add new feature
   fix(scope): fix bug description
   docs(scope): update documentation
   refactor(scope): refactor code
   chore(scope): maintenance task
   ```

4. Push and open a pull request against `main`.

## Branch Naming

Use prefixes that match the commit type:

- `feat/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation
- `refactor/` — Code refactoring
- `chore/` — Maintenance

## Code Style

- TypeScript strict mode is enabled
- ESLint and Prettier run on pre-commit via lint-staged
- Use existing patterns and utilities before creating new ones
- Prefer self-documenting code over comments

## Adding UI Components

```bash
cd packages/ui
pnpm ui:add
```

Or create components manually in `packages/ui/components/` following existing patterns.

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `apps/web` | Next.js application |
| `apps/docs` | Nextra documentation site |
| `packages/ui` | Shared component library |
| `packages/tsconfig` | TypeScript configurations |
| `packages/eslint-config-custom` | ESLint configuration |
