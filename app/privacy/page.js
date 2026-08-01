import FadeIn from "../../components/FadeIn";

export const metadata = { title: "Privacy Policy — Arkvon Group" };

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <FadeIn>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate text-sm mb-16">Last updated: August 2026</p>

        <div className="space-y-8 text-charcoal leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              1. Introduction
            </h2>
            <p>
              Arkvon Group (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              respects your privacy and is committed to protecting the
              personal information you share with us through this website
              and its subsidiary company pages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following information when you interact
              with our website:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, and phone number you provide via our contact or careers forms</li>
              <li>Resume/CV and related application details, if you apply for a role via our Careers page</li>
              <li>Any message content you submit to us</li>
              <li>Basic usage data (such as pages visited) collected automatically via standard web analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to enquiries submitted through our Contact form</li>
              <li>Review and respond to job applications submitted via our Careers form</li>
              <li>Improve our website and understand how visitors use it</li>
              <li>Communicate with you about Arkvon Group and its businesses, where relevant</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              4. Third-Party Services
            </h2>
            <p>
              We use third-party form providers to process submissions from
              our Contact and Careers forms. These providers process the
              data you submit solely to deliver it to us and are bound by
              their own privacy and security practices. We do not sell your
              personal information to any third party.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain personal information only as long as necessary to
              fulfil the purpose for which it was collected, such as
              responding to your enquiry or reviewing your job application,
              unless a longer retention period is required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              6. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information held by us at any time by contacting us
              at{" "}
              
               <a href="mailto:info@arkvongroup.com"
                className="text-ink hover:text-bronze underline">
              
                info@arkvongroup.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              7. Subsidiary Companies
            </h2>
            <p>
              Businesses under the Arkvon Group umbrella, such as AchaarYaar,
              operate their own websites and may have their own separate
              privacy policies governing their products, orders, and
              customer data. Please refer to each subsidiary&apos;s own
              website for details specific to their services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated revision
              date.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please
              contact us at{" "}
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