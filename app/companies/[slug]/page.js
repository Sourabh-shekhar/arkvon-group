import { companies } from "../../../data/companies";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import Image from "next/image";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const company = companies.find((c) => c.slug === params.slug);
  if (!company) return { title: "Company Not Found" };

  return {
    title: `${company.name} | Arkvon Group`,
    description: company.tagline,
    alternates: { canonical: `/companies/${company.slug}` },
    openGraph: {
      title: `${company.name} | Arkvon Group`,
      description: company.tagline,
      images: company.logo ? [company.logo] : ["/arkvon-banner.png"],
    },
  };
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
        {company.logo && (
          <div className="mt-8 mb-6">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>
        )}

        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
          {company.sector} · Est. {company.founded}
          {company.location ? ` · ${company.location}` : ""}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-6">
          {company.name}
        </h1>
        <p className="text-slate text-lg mb-10">{company.tagline}</p>

        <p className="text-charcoal leading-relaxed mb-12">
          {company.description}
        </p>

        {company.highlights && company.highlights.length > 0 && (
          <div className="border-t border-charcoal/10 pt-10 mb-12">
            <p className="text-sm text-slate mb-6">What sets it apart</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {company.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-display text-lg text-ink mb-2">
                    {h.label}
                  </p>
                  <p className="text-sm text-slate leading-relaxed">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {company.registrations && company.registrations.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12">
            {company.registrations.map((r) => (
              <span
                key={r}
                className="text-xs tracking-widest uppercase text-slate border border-charcoal/15 rounded-full px-4 py-2"
              >
                {r} Registered
              </span>
            ))}
          </div>
        )}

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
