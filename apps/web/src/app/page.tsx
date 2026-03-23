import { Metadata } from 'next';
import { Button } from '@ui/components/button';

const FEATURES = [
  {
    title: 'Turborepo Caching',
    description: 'Incremental builds with content-aware hashing. Only rebuild what changed.',
  },
  {
    title: 'Shared UI Library',
    description: 'shadcn/ui components with Radix primitives, shared across all apps.',
  },
  {
    title: 'TypeScript Strict',
    description: 'Centralized tsconfig with strict type checking and declaration maps.',
  },
  {
    title: 'Tailwind CSS v4',
    description: 'CSS-first configuration with custom theme variables and dark mode.',
  },
  {
    title: 'Nextra Documentation',
    description: 'Full documentation site with MDX, search, and automatic navigation.',
  },
  {
    title: 'pnpm Workspaces',
    description: 'Fast, disk-efficient package management with native monorepo support.',
  },
];

export const metadata: Metadata = {
  title: 'Web - Turborepo Example',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:pt-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
          Monorepo Template
        </p>
        <h1 className="max-w-2xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Turborepo
          <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Example
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-zinc-400">
          Everything you need to build, ship, and scale. Next.js 16, React 19,
          Tailwind CSS v4, and TypeScript.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <a href="https://github.com/owieth/turborepo-example">Get Started</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="http://localhost:3001">Documentation</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-24">
        <section>
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-zinc-800 bg-zinc-900 p-6"
              >
                <h3 className="mb-2 text-sm font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-sm text-zinc-500">
        Built with Turborepo, Next.js, and Tailwind CSS.
      </footer>
    </div>
  );
}
