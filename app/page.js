import Link from "next/link";
import dynamic from "next/dynamic";
import { companies } from "../data/companies";
import Image from "next/image";
// Three.js needs the browser, so this loads only on the client, never
// during the server-rendered build.
const Scene3D = dynamic(() => import("../components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] sm:h-[540px] rounded-2xl bg-ink animate-pulse" />
  ),
});

export default function Home() {
  return (
    <>
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

      <section className="max-w-6xl mx-auto px-6 py-16">
        <Scene3D companies={companies} />
      </section>

      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-3 gap-10">
          {companies.map((c) => (
            <Link
              key={c.slug}
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
          ))}
        </div>
      </section>
    </>
  );
}