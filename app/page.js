import Link from "next/link";
import dynamic from "next/dynamic";
import { companies } from "../data/companies";
import Image from "next/image";
import { updates } from "../data/updates";
import FadeIn from "../components/FadeIn";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const HeroCarousel = dynamic(() => import("../components/HeroCarousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[540px] sm:min-h-[600px] bg-ink animate-pulse" />
  ),
});



export default function Home() {
  return (
    <>
      {/* <FadeIn>
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
      </FadeIn> */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.arkvongroup.com",
          },
        ]}
      />

      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-8">
          <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
            An Indian business group
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-ink max-w-3xl">
            Building businesses people{" "}
            <em className="not-italic text-bronze">choose, trust, and remember.</em>
          </h1>
          <p className="text-slate text-lg mt-6 max-w-xl">
            Arkvon Group builds and supports distinctive Indian businesses —
            combining long-term thinking, operating discipline, and local
            insight to create lasting value.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              href="/companies"
              className="bg-ink text-paper px-6 py-3 rounded-full text-sm hover:bg-bronze transition-colors"
            >
              Explore our companies
            </Link>
            <Link
              href="/about"
              className="border border-charcoal/20 px-6 py-3 rounded-full text-sm hover:border-bronze hover:text-bronze transition-colors"
            >
              Our story
            </Link>
          </div>
        </section>
      </FadeIn>

      <HeroCarousel />

      {/* ---------- REGISTER OF HOLDINGS ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
              <div>
                <p className="text-bronze-light text-xs tracking-[0.2em] uppercase mb-3">
                  Our portfolio
                </p>
                <h2 className="font-display text-3xl sm:text-4xl">
                  Built with purpose. Positioned to grow.
                </h2>
              </div>
              <p className="text-paper/60 text-sm max-w-sm">
                We partner strong ideas with patient capital, practical support,
                and the freedom to become brands people genuinely value.
              </p>
            </div>
          </FadeIn>

          <div>
            {companies.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.1}>
                <Link
                  href={`/companies/${c.slug}`}
                  className="group grid sm:grid-cols-[80px_1fr_auto] gap-4 sm:gap-8 items-start py-8 border-t border-paper/15 hover:border-bronze-light transition-colors"
                >
                  <span className="font-mono text-bronze-light text-sm pt-1">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                  <div>
                    <p className="text-bronze-light text-xs tracking-widest uppercase mb-2">
                      {c.sector}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl mb-2 group-hover:text-bronze-light transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-paper/70 text-sm max-w-md">
                      {c.tagline}
                    </p>
                  </div>
                  <span className="hidden sm:block text-paper/50 text-sm pt-1 group-hover:text-bronze-light transition-colors">
                    Discover →
                  </span>
                </Link>
              </FadeIn>
            ))}

            {/* Open slot — honest placeholder for the next holding */}
            <div className="grid sm:grid-cols-[80px_1fr_auto] gap-4 sm:gap-8 items-start py-8 border-t border-dashed border-paper/15">
              <span className="font-mono text-paper/30 text-sm pt-1">
                {String(companies.length + 1).padStart(3, "0")}
              </span>
              <div>
                <p className="text-paper/30 text-xs tracking-widest uppercase mb-2">
                  In progress
                </p>
                <h3 className="font-display text-2xl sm:text-3xl mb-2 text-paper/40 italic">
                  The next opportunity
                </h3>
                <p className="text-paper/40 text-sm max-w-md">
                  We are building thoughtfully and will announce the next
                  Arkvon business when it is ready to stand on its own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- NUMBERS STRIP ---------- */}
      <section className="border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { n: "2026", l: "Founded with a long-term view" },
            { n: String(companies.length).padStart(2, "0"), l: "Active company in the group" },
            { n: "IN", l: "Indian roots, global ambition" },
            { n: "∞", l: "Built to endure" },
          ].map((item, i) => (
            <FadeIn key={item.l} delay={i * 0.05}>
              <div className="border-l border-charcoal/15 pl-5">
                <div className="font-display text-3xl sm:text-4xl text-bronze">
                  {item.n}
                </div>
                <div className="text-slate text-xs tracking-widest uppercase mt-2">
                  {item.l}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ---------- JOURNAL ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-10">
            From the newsroom
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

      {/* ---------- ABOUT SNIPPET ---------- */}
      <section className="border-t border-charcoal/10 bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
              About Arkvon
            </p>
            <h2 className="font-display text-3xl text-ink mb-6">
              Building businesses that matter
            </h2>
            <p className="text-slate leading-relaxed max-w-md">
              Arkvon Group is building a portfolio of independent businesses
              that solve real needs, respect their roots, and have the ambition
              to compete on a larger stage. We provide strategic direction,
              operational support, and the patience to grow well.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote className="font-display italic text-2xl text-ink border-l-2 border-bronze pl-6 leading-snug">
              &ldquo;The best businesses are built one principled decision at a time.&rdquo;
            </blockquote>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
