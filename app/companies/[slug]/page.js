import { companies } from "../../../data/companies";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const company = companies.find((c) => c.slug === params.slug);
  return { title: company ? `${company.name} — Arkvon Group` : "Arkvon Group" };
}

export default function CompanyPage({ params }) {
  const company = companies.find((c) => c.slug === params.slug);
  if (!company) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <Link href="/companies" className="text-sm text-slate hover:text-bronze">
        ← Our Companies
      </Link>

      <FadeIn>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mt-8 mb-4">
          {company.sector} · Est. {company.founded}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-6">
          {company.name}
        </h1>
        <p className="text-slate text-lg mb-10">{company.tagline}</p>

        <p className="text-charcoal leading-relaxed mb-10">
          {company.description}
        </p>

        <div className="border-t border-charcoal/10 pt-6 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <p className="text-sm text-slate">Contact</p>
            <a href={`mailto:${company.email}`} className="text-ink hover:text-bronze transition-colors">
              {company.email}
            </a>
          </div>
          {company.website && (
            <div>
              <p className="text-sm text-slate">Website</p>
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-bronze transition-colors">
                {company.website.replace("https://", "")} ↗
              </a>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}