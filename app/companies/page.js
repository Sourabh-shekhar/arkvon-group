import Link from "next/link";
import { companies } from "../../data/companies";
import FadeIn from "../../components/FadeIn";

export const metadata = {
  title: "Our Companies",
  description: "Explore the independent businesses built and supported by Arkvon Group, starting with AchaarYaar.",
  alternates: { canonical: "/companies" },
};

export default function CompaniesPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <FadeIn>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
          Our Companies
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-6">
          Businesses built with purpose.
        </h1>
        <p className="text-slate text-lg leading-relaxed mb-16 max-w-xl">
          Arkvon Group supports independent businesses with patient capital,
          practical expertise, and the freedom to grow with conviction.
        </p>
      </FadeIn>

      <div className="border-t border-charcoal/10">
        {companies.map((company, index) => (
          <FadeIn key={company.slug} delay={index * 0.08}>
            <Link
              href={`/companies/${company.slug}`}
              className="group grid sm:grid-cols-[80px_1fr_auto] gap-4 sm:gap-8 items-start py-8 border-b border-charcoal/10 hover:border-bronze transition-colors"
            >
              <span className="font-mono text-bronze text-sm pt-1">
                {String(index + 1).padStart(3, "0")}
              </span>
              <div>
                <p className="text-bronze text-xs tracking-widest uppercase mb-2">
                  {company.sector}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-ink mb-2 group-hover:text-bronze transition-colors">
                  {company.name}
                </h2>
                <p className="text-slate text-sm max-w-md">{company.tagline}</p>
              </div>
              <span className="hidden sm:block text-slate text-sm pt-1 group-hover:text-bronze transition-colors">
                Discover →
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

