export const metadata = { title: "Careers — Arkvon Group" };

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <p className="text-bronze text-sm tracking-[0.3em] uppercase mb-6">
            Careers at Arkvon Group
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.1] mb-8 max-w-2xl">
            Build something that lasts.
          </h1>
          <p className="text-paper/70 leading-relaxed max-w-xl text-lg">
            Arkvon Group is a family of independent businesses, each built
            the same way — with patience, craft, and an eye for the long
            term. If that's how you like to work, we'd like to hear from
            you.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-paper border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              {
                title: "Craft over shortcuts",
                body: "Every product we make starts with a recipe, a method, or a process worth respecting. We'd rather do one thing well than many things fast.",
              },
              {
                title: "Independence, with accountability",
                body: "Each company under Arkvon runs itself. We hire people who want ownership, not instructions.",
              },
              {
                title: "Built for the long run",
                body: "We're not chasing trends. We're building businesses meant to outlast the people who started them.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-bronze pt-5">
                <h3 className="font-display text-xl text-ink mb-3">
                  {v.title}
                </h3>
                <p className="text-slate leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMPANIES */}
      <section className="bg-paper border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-3">
            Our Companies
          </p>
          <h2 className="font-display text-3xl text-ink mb-12 max-w-lg">
            One group, several ways of making something well.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-charcoal/15 rounded-2xl p-8 bg-ink text-paper">
              <div className="w-12 h-12 rounded-full border border-bronze text-bronze flex items-center justify-center font-display text-lg mb-6">
                A
              </div>
              <h3 className="font-display text-2xl mb-3">AchaarYaar</h3>
              <p className="text-paper/70 text-sm leading-relaxed">
                Homemade Indian pickles, made the way your grandmother made
                them — now reaching kitchens across the country without
                losing what made them worth making in the first place.
              </p>
            </div>

            <div className="border border-charcoal/15 rounded-2xl p-8 bg-paper">
              <div className="w-12 h-12 rounded-full border border-bronze text-bronze flex items-center justify-center font-display text-lg mb-6">
                +
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">
                What's next
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                We're always incubating the next thing under the Arkvon
                name. If you'd rather build something from the ground up
                than join something finished, tell us that below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">
            {/* Left: context + process */}
            <div>
              <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-3">
                Apply
              </p>
              <h2 className="font-display text-3xl text-ink mb-6">
                Tell us about yourself.
              </h2>
              <p className="text-slate leading-relaxed mb-12 text-sm">
                We don't always have fixed openings posted. That doesn't
                mean there isn't a place for you — it means we're looking
                for the right person before we're looking for the right
                title.
              </p>

              <ol className="space-y-6">
                {[
                  {
                    n: "01",
                    t: "You apply",
                    d: "One form, no account required.",
                  },
                  {
                    n: "02",
                    t: "We read it — personally",
                    d: "Every application goes to a real person, not a filter.",
                  },
                  {
                    n: "03",
                    t: "We reach out if there's a fit",
                    d: "Usually within two to three weeks.",
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-bronze text-sm pt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-ink text-sm font-medium">{s.t}</p>
                      <p className="text-slate text-sm">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right: form */}
            <div className="border border-charcoal/15 rounded-2xl p-8 sm:p-10 bg-paper shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm text-slate mb-2"
                      htmlFor="name"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus:border-bronze transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm text-slate mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus:border-bronze transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm text-slate mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus:border-bronze transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm text-slate mb-2"
                      htmlFor="company"
                    >
                      Company you're interested in
                    </label>
                    <select
                      id="company"
                      name="company"
                      className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus:border-bronze transition-colors"
                    >
                      <option value="Arkvon Group">
                        Arkvon Group (parent)
                      </option>
                      <option value="AchaarYaar">AchaarYaar</option>
                      <option value="Not sure">
                        Not sure / Open to anything
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm text-slate mb-2"
                      htmlFor="role"
                    >
                      Role you're interested in
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="e.g. Marketing, Operations, Design"
                      className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus:border-bronze transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm text-slate mb-2"
                    htmlFor="message"
                  >
                    Tell us about yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus:border-bronze transition-colors resize-none"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm text-slate mb-2"
                    htmlFor="resume"
                  >
                    Resume (PDF preferred)
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full text-sm text-charcoal file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-ink file:text-paper file:text-sm hover:file:bg-bronze file:transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-ink text-paper px-8 py-3 rounded-full text-sm hover:bg-bronze transition-colors"
                >
                  Submit application
                </button>

                <p className="text-slate text-xs leading-relaxed pt-2">
                  We read every application personally. If there's a fit,
                  we'll reach out — you won't need to follow up.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}