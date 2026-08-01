export const metadata = { title: "Careers — Arkvon Group" };

export default function CareersPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
        Careers
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink mb-6">
        Build something with us.
      </h1>
      <p className="text-charcoal leading-relaxed mb-4 max-w-xl">
        Arkvon Group and its companies are growing, and we're always open to
        hearing from people who want to be part of that — across any of our
        businesses, in any role.
      </p>
      <p className="text-slate leading-relaxed mb-16 max-w-xl">
        We don't always have fixed openings posted. If you think you'd be a
        good fit, tell us about yourself below and we'll reach out when
        there's a match.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        encType="multipart/form-data"
        className="space-y-6 max-w-xl"
      >
        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus:border-bronze"
          />
        </div>

        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus:border-bronze"
          />
        </div>

        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus:border-bronze"
          />
        </div>

        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="company">
            Which company are you interested in?
          </label>
          <select
            id="company"
            name="company"
            className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus:border-bronze"
          >
            <option value="Arkvon Group">Arkvon Group (parent)</option>
            <option value="AchaarYaar">AchaarYaar</option>
            <option value="Not sure">Not sure / Open to anything</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="role">
            Role you're interested in
          </label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="e.g. Marketing, Operations, Design"
            className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus:border-bronze"
          />
        </div>

        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="message">
            Tell us about yourself
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus:border-bronze resize-none"
          />
        </div>

        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="resume">
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
          className="bg-ink text-paper px-6 py-3 rounded-full text-sm hover:bg-bronze transition-colors"
        >
          Submit application
        </button>
      </form>
    </section>
  );
}