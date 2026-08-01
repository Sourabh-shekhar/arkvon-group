import Link from "next/link";
import dynamic from "next/dynamic";
import { companies } from "../data/companies";
import Image from "next/image";
import { updates } from "../data/updates";
import FadeIn from "../components/FadeIn";

const HeroCarousel = dynamic(() => import("../components/HeroCarousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[540px] sm:min-h-[600px] bg-ink animate-pulse" />
  ),
});

export default function Home() {
  return (
    <>
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 pt-8">
          <Image
            src="/arkvon-banner.png"
            alt="Arkvon Group — rooted in India, ready for the world. Our subsidiary: AchaarYaar, authentic homemade Bihar pickles."
            width={1728}
            height={917}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-8">
          <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
            A holding company
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-ink max-w-3xl">
            One group, growing{" "}
            <em className="not-italic text-bronze">one company at a time.</em>
          </h1>
          <p className="text-slate text-lg mt-6 max-w-xl">
            Arkvon Group holds and supports a portfolio of independent
            businesses. Drag to rotate, scroll to zoom.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              href="/companies"
              className="bg-ink text-paper px-6 py-3 rounded-full text-sm hover:bg-bronze transition-colors"
            >
              View our companies
            </Link>
            <Link
              href="/about"
              className="border border-charcoal/20 px-6 py-3 rounded-full text-sm hover:border-bronze hover:text-bronze transition-colors"
            >
              About the group
            </Link>
          </div>
        </section>
      </FadeIn>

      <HeroCarousel />

      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-3 gap-10">
          {companies.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.1}>
              <Link
                href={`/companies/${c.slug}`}
                className="group block border-t border-paper/20 pt-6 hover:border-bronze transition-colors"
              >
                <p className="text-bronze-light text-xs tracking-widest uppercase mb-2">
                  {c.sector}
                </p>
                <h3 className="font-display text-2xl mb-2 group-hover:text-bronze-light transition-colors">
                  {c.name}
                </h3>
                <p className="text-paper/70 text-sm">{c.tagline}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-10">
            Latest
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-8">
          {updates.map((u, i) => (
            <FadeIn key={u.title} delay={i * 0.1}>
              <Link
                href={u.href}
                className="group block border-t border-charcoal/10 pt-6 hover:border-bronze transition-colors"
              >
                <p className="text-slate text-xs mb-2">
                  {u.tag} · {u.date}
                </p>
                <h3 className="font-display text-xl text-ink mb-2 group-hover:text-bronze transition-colors">
                  {u.title}
                </h3>
                <p className="text-slate text-sm">{u.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}