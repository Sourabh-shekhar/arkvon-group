import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="text-bronze uppercase tracking-[0.25em] text-sm mb-4">
          404
        </p>

        <h1 className="font-display text-5xl text-ink mb-6">
          Page not found
        </h1>

        <p className="text-slate text-lg mb-10">
          The page you're looking for doesn't exist, may have been moved, or is
          no longer available.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="bg-ink text-paper px-6 py-3 rounded-full hover:bg-bronze transition"
          >
            Back Home
          </Link>

          <Link
            href="/companies"
            className="border border-charcoal/20 px-6 py-3 rounded-full hover:border-bronze hover:text-bronze transition"
          >
            Our Companies
          </Link>

          <Link
            href="/news"
            className="border border-charcoal/20 px-6 py-3 rounded-full hover:border-bronze hover:text-bronze transition"
          >
            Latest News
          </Link>
        </div>
      </div>
    </main>
  );
}