export const metadata = { title: "Contact — Arkvon Group" };

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
        Contact
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink mb-8">
        Get in touch
      </h1>
      <p className="text-charcoal leading-relaxed mb-10 max-w-xl">
        For general enquiries, partnership interest, or questions about
        Arkvon Group and its companies, reach out below.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-6 max-w-xl mb-16"
      >
        <div>
          <label className="block text-sm text-slate mb-2" htmlFor="name">
            Name
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
          <label className="block text-sm text-slate mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-charcoal/20 rounded-lg px-4 py-3 bg-paper text-charcoal focus:outline-none focus:border-bronze resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-ink text-paper px-6 py-3 rounded-full text-sm hover:bg-bronze transition-colors"
        >
          Send message
        </button>
      </form>

      <div className="border-t border-charcoal/10 pt-6">
        <p className="text-sm text-slate">General enquiries</p>
        <a
          href="mailto:info@arkvongroup.com"
          className="text-ink hover:text-bronze transition-colors"
        >
          info@arkvongroup.com
        </a>
      </div>
    </section>
  );
}