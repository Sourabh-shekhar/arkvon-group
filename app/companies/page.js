import Link from "next/link";
import { companies } from "../../data/companies";

export const metadata = { title: "Our Companies — Arkvon Group" };

export default function CompaniesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
        Our Companies
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl mb-16">
        The businesses under Arkvon Group.
      </h1>

      <div className="grid sm:grid-cols-2 gap-px bg-charcoal/10">
        {companies.map((c) => (
          <Link
            key={c.slug}
            href={`/companies/${c.slug}`}
            className="group bg-paper p-8 hover:bg-ink transition-colors"
          >
            <p className="text-bronze text-xs tracking-widest uppercase mb-3">
              {c.sector} · Est. {c.founded}
            </p>
            <h2 className="font-display text-2xl text-ink group-hover:text-paper mb-3 transition-colors">
              {c.name}
            </h2>
            <p className="text-slate group-hover:text-paper/70 text-sm transition-colors">
              {c.tagline}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}