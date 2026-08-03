import Link from "next/link";
// Confirm export name/shape against your real data/updates.js —
// adjust field names below (date/title/description/link/category) if they differ.
import { updates } from "../data/updates";

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

            <section className="px-6 max-w-5xl mx-auto pb-24 space-y-6">
                {sorted.map((item) => (
                    <article
                        key={item.title}
                        className="bg-paper border border-charcoal/10 dark:border-charcoal/20 rounded-xl p-6"
                    >
                        <p className="font-mono text-[11px] text-charcoal/50 mb-2">
                            {new Date(item.date)
                                .toLocaleDateString("en-IN", { month: "long", year: "numeric" })
                                .toUpperCase()}
                            {item.tag ? ` · ${item.tag}` : ""}
                        </p>
                        <h2 className="font-display text-2xl text-ink mb-2">
                            {item.title}
                        </h2>
                        <p className="text-charcoal/70 dark:text-charcoal/80 mb-3">
                            {item.description}
                        </p>
                        {item.href && (
                            <Link
                                href={item.href}
                                className="text-sm text-bronze hover:underline underline-offset-4"
                            >
                                Read more →
                            </Link>
                        )}
                    </article>
                ))}
            </section>
        </main>
    );
}