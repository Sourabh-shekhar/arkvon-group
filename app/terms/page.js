import FadeIn from "../../components/FadeIn";

export const metadata = { title: "Terms of Service — Arkvon Group" };

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <FadeIn>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4">
          Terms of Service
        </h1>
        <p className="text-slate text-sm mb-16">Last updated: August 2026</p>

        <div className="space-y-8 text-charcoal leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using arkvongroup.com (&quot;the
              Website&quot;), you agree to be bound by these Terms of
              Service. If you do not agree with any part of these terms,
              please do not use this Website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              2. About This Website
            </h2>
            <p>
              This Website provides information about Arkvon Group, a
              holding company, and its subsidiary businesses. It is
              informational in nature and does not process any product
              sales, payments, or transactions directly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              3. Use of the Website
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use this Website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Website or its systems</li>
              <li>Submit false, misleading, or fraudulent information through our Contact or Careers forms</li>
              <li>Copy, reproduce, or redistribute content from this Website without permission</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              4. Job Applications
            </h2>
            <p>
              Submitting an application via our Careers page does not
              guarantee an interview, offer, or employment. Arkvon Group and
              its subsidiaries reserve the right to accept or decline any
              application at their sole discretion. We do not charge any
              fee or security deposit from job applicants at any stage.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              5. Subsidiary Websites
            </h2>
            <p>
              Links to subsidiary company websites, such as AchaarYaar, take
              you to independently operated websites with their own terms of
              service and policies. Arkvon Group is not responsible for the
              content, products, or practices of these subsidiary websites
              beyond what is stated here.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this Website, including text, graphics, logos,
              and images, is the property of Arkvon Group unless otherwise
              stated, and may not be used without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              This Website and its content are provided &quot;as is&quot;
              without warranties of any kind. Arkvon Group is not liable for
              any damages arising from your use of this Website, to the
              fullest extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              8. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Any
              changes will be posted on this page with an updated revision
              date. Continued use of the Website after changes constitutes
              acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              9. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by the laws of India.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              10. Contact Us
            </h2>
            <p>
              For any questions about these Terms of Service, contact us at{" "}
              <a
                href="mailto:info@arkvongroup.com"
                className="text-ink hover:text-bronze underline">
              
                info@arkvongroup.com
              </a>
              .
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}