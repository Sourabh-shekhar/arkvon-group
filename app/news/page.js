import Link from "next/link";
import Image from "next/image";
import { updates } from "../../data/updates";

export const metadata = {
  title: "News",
  description: "Updates from across the Arkvon Group family.",
};

export default function NewsPage() {
  const sorted = [...updates].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main className="bg-paper dark:bg-paper">
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <p className="text-bronze text-[11px] tracking-[0.15em] uppercase mb-3">
          News
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">
          Updates from across the group.
        </h1>
      </section>

      <section className="px-6 max-w-5xl mx-auto pb-24 space-y-10">
        {sorted.map((item) => (
          <article
            key={item.href}
            className="bg-paper border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {/* <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={675}
              className="w-full h-72 object-cover"
            /> */}

            <div className="p-8">
              <p className="font-mono text-xs text-charcoal/50 mb-3">
                {new Date(item.date)
                  .toLocaleDateString("en-IN", {
                    month: "long",
                    year: "numeric",
                  })
                  .toUpperCase()}
                {item.tag && ` · ${item.tag}`}
              </p>

              <h2 className="font-display text-3xl text-ink mb-3">
                {item.title}
              </h2>

              <p className="text-charcoal/70 mb-6">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="inline-flex items-center text-bronze font-medium hover:underline"
              >
                Read Article →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}