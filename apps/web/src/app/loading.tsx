export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="mx-auto size-8 animate-spin rounded-full border-4 border-zinc-700 border-t-white" />
        <p className="text-sm text-zinc-400">Loading...</p>
      </div>
    </div>
  );
}
