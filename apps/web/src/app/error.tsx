'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
      <p className="text-zinc-400">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
      >
        Try again
      </button>
    </div>
  );
}
