import Link from "next/link";
import { companies } from "../../data/companies";
import FadeIn from "../../components/FadeIn";

export const metadata = { title: "Our Companies — Arkvon Group" };

export default function CompaniesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <FadeIn>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
          Our Companies
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl mb-6">
          The businesses under Arkvon Group.
        </h1>
        <p className="text-slate text-lg max-w-xl mb-16">
          Every entry here is a real, operating business — each one keeps its
          own name, its own team, and its own way of doing things. We add to
          this list slowly, and only when it&rsquo;s ready.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-px bg-charcoal/10">
        {companies.map((c, i) => (
          <FadeIn key={c.slug} delay={i * 0.1}>
            <Link
              href={`/companies/${c.slug}`}
              className="group block bg-paper p-8 hover:bg-ink transition-colors"
            >
              <p className="text-bronze text-xs tracking-widest uppercase mb-3">
                {c.sector} · Est. {c.founded}
                {c.location ? ` · ${c.location}` : ""}
              </p>
              <h2 className="font-display text-2xl text-ink group-hover:text-paper mb-3 transition-colors">
                {c.name}
              </h2>
              <p className="text-slate group-hover:text-paper/70 text-sm transition-colors">
                {c.tagline}
              </p>
            </Link>
          </FadeIn>
        ))}

        {/* Open slot — honest placeholder for the next holding */}
        <FadeIn delay={companies.length * 0.1}>
          <div className="bg-paper p-8 border border-dashed border-charcoal/15">
            <p className="text-charcoal/30 text-xs tracking-widest uppercase mb-3">
              In progress
            </p>
            <h2 className="font-display text-2xl text-charcoal/40 italic mb-3">
              Next holding
            </h2>
            <p className="text-charcoal/40 text-sm">
              We&rsquo;re selective about who joins the group. If you&rsquo;ve
              built something with the same care, we&rsquo;d like to hear
              from you.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}