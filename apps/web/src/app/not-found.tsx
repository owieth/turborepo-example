import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold text-white">404</h2>
      <p className="text-zinc-400">This page could not be found.</p>
      <Link
        href="/"
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
      >
        Go home
      </Link>
    </div>
  );
}
