import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-semibold">Hydration demo</h1>
      <p className="max-w-md text-center text-sm text-gray-600 dark:text-gray-400">
        A Server Component renders the initial count as HTML. A Client Component
        hydrates so the button can update state.
      </p>
      <Link
        href="/counter"
        className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
      >
        Open counter
      </Link>
    </main>
  );
}
