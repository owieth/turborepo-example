import type { Metadata, Viewport } from 'next';

import 'ui/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Web — Turborepo Example',
    template: '%s — Turborepo Example',
  },
  description:
    'A modern monorepo template built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body>{children}</body>
    </html>
  );
}
