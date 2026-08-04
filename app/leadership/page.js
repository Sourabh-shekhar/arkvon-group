import FadeIn from "../../components/FadeIn";

export const metadata = {
  title: "Who We Are — Arkvon Group",
};

export default function WhoWeArePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <FadeIn>
        <p className="text-bronze-dark text-sm tracking-[0.2em] uppercase mb-4">
          Who We Are
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-10 max-w-2xl leading-tight">
          Built to be run quietly, not loudly announced.
        </h1>

        <div className="space-y-6 text-charcoal leading-relaxed text-lg">
          <p>
            Arkvon Group is a holding company built around a simple belief:
            enduring businesses are created through patient execution, not
            constant attention. We don&rsquo;t measure success by the
            number of companies we launch or the headlines we generate. We
            measure it by the quality of the businesses we help build and
            the value they create over time.
          </p>
          <p>
            We&rsquo;re intentionally small and highly selective. Rather
            than spreading our time across dozens of ventures, we focus on
            partnering with founders who have already proven they can
            build. We look for real businesses with working products,
            early customers, and founders who deeply understand their
            market. Ideas are everywhere. Execution is rare.
          </p>
          <p>
            Our role isn&rsquo;t to replace founders — it&rsquo;s to
            strengthen them. We provide long-term capital, operational
            structure, strategic guidance, and the freedom to continue
            doing what they do best: building exceptional products and
            companies. We believe the best partnerships are based on
            trust, shared ambition, and a commitment to long-term
            thinking.
          </p>
          <p>
            Every company we back is chosen because we believe it has the
            potential to become a category leader through disciplined
            growth rather than shortcuts. We&rsquo;re comfortable moving
            slowly when it means making better decisions. We&rsquo;d
            rather spend a year building one remarkable business than
            launch five that aren&rsquo;t ready.
          </p>
          <p>
            Arkvon Group is still at the beginning of its journey. Our
            first holding, AchaarYaar, launched in 2026, marking the first
            step in building a portfolio of businesses designed to last.
            We know reputation isn&rsquo;t built through promises —
            it&rsquo;s earned through consistent execution.
          </p>
          <p>
            We&rsquo;re not trying to become the biggest holding company.
            We&rsquo;re building one that&rsquo;s trusted by founders,
            respected by partners, and recognized for creating businesses
            with lasting impact.
          </p>
        </div>

        <blockquote className="font-display italic text-2xl text-ink border-l-2 border-bronze-dark pl-6 mt-12 leading-snug">
          Judge us not by what we claim today, but by what we continue to
          build tomorrow.
        </blockquote>
      </FadeIn>
    </section>
  );
}