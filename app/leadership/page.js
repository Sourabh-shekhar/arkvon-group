import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Leadership",
  description: "Meet the people building Arkvon Group, one company at a time.",
};

// Move to app/data/leadership.js later if you want it data-driven like companies.js
const leaders = [
  {
    name: "[Founder Name]",
    title: "Founder & CEO",
    bio: "[2–3 sentence bio — background, why you started Arkvon Group, relevant experience.]",
    linkedin: "https://linkedin.com/in/your-profile",
    image: null, // "/leadership/founder.jpg" once you have a real photo
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-paper dark:bg-paper">
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <p className="text-bronze text-[11px] tracking-[0.15em] uppercase mb-3">
          Leadership
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">
          The people building Arkvon Group.
        </h1>
        <p className="max-w-2xl text-charcoal/70 dark:text-charcoal/80">
          Arkvon Group is built by a small, hands-on team that works closely
          with every business under the group. As we grow, we&apos;ll
          continue to add people who share our commitment to quality and
          long-term thinking.
        </p>
      </section>

      <section className="px-6 max-w-5xl mx-auto pb-24 grid gap-8 md:grid-cols-2">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="bg-paper border border-charcoal/10 dark:border-charcoal/20 rounded-xl shadow-lg p-6"
          >
            {leader.image ? (
              <Image
                src={leader.image}
                alt={leader.name}
                width={96}
                height={96}
                className="rounded-full mb-4 object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-charcoal/10 dark:bg-charcoal/20 mb-4" />
            )}
            <h2 className="font-display text-2xl text-ink">{leader.name}</h2>
            <p className="text-[11px] tracking-[0.1em] uppercase text-charcoal/50 mb-3">
              {leader.title}
            </p>
            <p className="text-charcoal/70 dark:text-charcoal/80 mb-4">
              {leader.bio}
            </p>
            {leader.linkedin && (
              <Link
                href={leader.linkedin}
                target="_blank"
                className="text-sm text-bronze hover:underline underline-offset-4"
              >
                LinkedIn →
              </Link>
            )}
          </div>
        ))}
      </section>

      <section className="px-6 max-w-5xl mx-auto pb-24">
        <Link
          href="/careers"
          className="text-ink border border-ink/20 px-4 py-2 rounded-full hover:border-bronze hover:text-bronze transition-colors text-sm"
        >
          See open roles →
        </Link>
      </section>
    </main>
  );
}