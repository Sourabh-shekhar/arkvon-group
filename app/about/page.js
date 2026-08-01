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

      <div className="border-t border-charcoal/10 pt-12 mb-12">
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
          Our Story
        </p>
        <p className="text-charcoal leading-relaxed mb-6">
          Arkvon Group was started with a simple belief: good businesses
          deserve a structure that helps them grow, not just a name to
          operate under. Rather than building one company and stopping
          there, Arkvon Group exists to bring together independent ventures
          that share a commitment to quality and long-term thinking — giving
          each one the backing of a group while letting it run on its own
          terms.
        </p>
        <p className="text-charcoal leading-relaxed">
          <span className="font-medium text-ink">AchaarYaar</span> is the
          first business under the Arkvon Group umbrella — proof of the
          model in practice. As the group grows, more independent businesses
          will join under the same principles: trust, craftsmanship, and
          room to grow.
        </p>
      </div>

      <div className="border-t border-charcoal/10 pt-12">
        <p className="font-display text-xl text-ink italic">
          One vision. Stronger together. Limitless possibilities.
        </p>
      </div>
    </section>
  );
}