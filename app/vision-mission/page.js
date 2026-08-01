import Link from "next/link";
import FadeIn from "../../components/FadeIn";

export const metadata = { title: "Vision & Mission — Arkvon Group" };

export default function VisionMissionPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <Link href="/about" className="text-sm text-slate hover:text-bronze">
        ← About
      </Link>

      <FadeIn>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mt-8 mb-4">
          Vision &amp; Mission
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-16">
          What we stand for.
        </h1>
      </FadeIn>

      <FadeIn>
        <div className="mb-20">
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
            Our Vision
          </h2>
          <div className="space-y-6">
            <p className="text-charcoal leading-relaxed">
              Our vision is to build Arkvon Group into a trusted and respected
              business house that creates value through honest work,
              thoughtful innovation, and long-term commitment. We aspire to
              establish businesses that improve everyday lives, contribute to
              the economy, and earn the confidence of customers, employees,
              partners, and society.
            </p>
            <p className="text-charcoal leading-relaxed">
              We believe that success is not defined only by growth or market
              presence. It is reflected in the trust we build, the quality we
              deliver, the opportunities we create, and the positive impact
              our businesses have on the people they serve. Every venture we
              undertake is intended to solve genuine problems, create
              meaningful experiences, and stand the test of time.
            </p>
            <p className="text-charcoal leading-relaxed">
              As we grow, our goal is to expand into diverse industries while
              staying true to the principles that define us — integrity,
              responsibility, customer satisfaction, and continuous learning.
              We want Arkvon Group to become a place where ideas are
              transformed into successful businesses, where talented people
              find opportunities to grow, and where every achievement is built
              on strong values rather than short-term gains.
            </p>
            <p className="text-charcoal leading-relaxed">
              Above all, we envision creating an organization that future
              generations will recognize not only for the businesses it
              built, but also for the difference it made to people,
              communities, and the industries it served.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-charcoal/10 pt-16">
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
            Our Mission
          </h2>
          <div className="space-y-6">
            <p className="text-charcoal leading-relaxed">
              Our mission is to build businesses with purpose and manage them
              with responsibility. We are committed to creating products and
              services that genuinely meet the needs of our customers while
              maintaining the highest standards of quality, fairness, and
              transparency.
            </p>
            <p className="text-charcoal leading-relaxed">
              Every decision we make begins with a simple question:{" "}
              <em>Will this create lasting value for our customers and
              stakeholders?</em> This principle guides how we develop new
              ideas, improve our operations, and build relationships with
              everyone who becomes a part of our journey.
            </p>
            <p className="text-charcoal leading-relaxed">
              We aim to create workplaces where people are respected,
              encouraged to learn, and trusted with responsibility. We believe
              that when individuals are given the right environment and
              opportunities, they contribute not only to the success of the
              company but also to their own personal and professional growth.
            </p>
            <p className="text-charcoal leading-relaxed">
              Our mission also extends beyond business performance. We strive
              to conduct our operations responsibly by respecting ethical
              practices, supporting local communities, encouraging
              entrepreneurship, and making decisions that contribute to
              sustainable development. We understand that lasting success
              comes from balancing business growth with social responsibility.
            </p>
            <p className="text-charcoal leading-relaxed">
              As Arkvon Group continues to expand, we will remain committed to
              building organizations that are dependable, customer-focused,
              and prepared for the future. We are determined to create
              businesses that people trust, employees are proud to work for,
              partners are confident to collaborate with, and communities are
              glad to see grow.
            </p>
            <p className="text-charcoal leading-relaxed">
              Our journey is driven by patience, discipline, and a belief that
              every meaningful achievement is built one step at a time. We are
              committed to creating businesses that endure, relationships that
              last, and a legacy that reflects our values for generations to
              come.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}