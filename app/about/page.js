import Link from "next/link";
import FadeIn from "../../components/FadeIn";

export const metadata = { title: "About — Arkvon Group" };

const values = [
  {
    name: "Trust",
    icon: (
      <path d="M8 12l3 3 6-6M4 7l4-3 4 3M12 4l4 3 4-3M4 7v6c0 5 4 8 8 9 4-1 8-4 8-9V7" />
    ),
  },
  {
    name: "Innovation",
    icon: (
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.5.4.8 1 .8 1.6v.2h6.4v-.2c0-.6.3-1.2.8-1.6A7 7 0 0012 2z" />
    ),
  },
  {
    name: "Growth",
    icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  },
  {
    name: "Impact",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
    ),
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <FadeIn>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
          About
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4">
          Rooted in India, ready for the world.
        </h1>
        <p className="text-slate text-lg leading-relaxed mb-16 max-w-xl">
          Arkvon Group is a diversified group of ventures driven by trust,
          innovation, and a commitment to create lasting value for a better
          tomorrow.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20">
          {values.map((v) => (
            <div key={v.name} className="flex flex-col items-center text-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-bronze mb-3"
              >
                {v.icon}
              </svg>
              <p className="text-ink text-sm tracking-widest uppercase">
                {v.name}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-charcoal/10 pt-12 space-y-6">
          <p className="text-charcoal leading-relaxed">
            Arkvon Group is a forward-thinking business group committed to
            creating brands and businesses that make a meaningful difference in
            people&apos;s lives. Our journey is driven by the belief that every
            successful venture begins with a clear purpose, a customer-first
            approach, and an unwavering commitment to quality.
          </p>
          <p className="text-charcoal leading-relaxed">
            We focus on identifying opportunities, building sustainable
            business models, and delivering products and services that
            customers can trust. Every venture under the Arkvon Group umbrella
            is guided by the same values — integrity, innovation, excellence,
            and long-term thinking.
          </p>
          <p className="text-charcoal leading-relaxed">
            Our businesses are built to solve real-world challenges while
            creating value for customers, employees, partners, and the
            communities we serve. We believe that growth is not measured only
            by financial success but also by the positive impact we create
            through responsible business practices.
          </p>
          <p className="text-charcoal leading-relaxed">
            As we continue to expand into new industries, our vision remains
            unchanged: to build a diversified group of trusted brands known for
            quality, reliability, and innovation. We are committed to
            continuous improvement, embracing new ideas, and delivering
            experiences that exceed expectations.
          </p>
          <p className="text-charcoal leading-relaxed">
            At Arkvon Group, we are not just building businesses — we are
            building lasting relationships, creating opportunities, and
            shaping a future driven by purpose and progress.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-charcoal/10 pt-12 mt-12">
          <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
            Our First Venture
          </p>
          <p className="text-charcoal leading-relaxed">
            <span className="font-medium text-ink">AchaarYaar</span> is the
            first business under the Arkvon Group umbrella — proof of this
            model in practice. As the group grows, more independent businesses
            will join under the same principles.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-charcoal/10 pt-12 mt-12">
          <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
            Vision &amp; Mission
          </p>
          <p className="text-charcoal leading-relaxed mb-4">
            Read more about what drives Arkvon Group forward — our long-term
            vision and the principles that guide every business we build.
          </p>
          <Link
            href="/vision-mission"
            className="text-ink hover:text-bronze transition-colors text-sm font-medium"
          >
            Read our Vision &amp; Mission →
          </Link>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-charcoal/10 pt-12 mt-12">
          <p className="font-display text-xl text-ink italic">
            One vision. Stronger together. Limitless possibilities.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}