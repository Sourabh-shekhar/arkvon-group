import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-3">
        <div>
          <h3 className="font-mono-label text-xs uppercase text-bronze-light mb-4">
            Business
          </h3>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>
              <Link href="/companies" className="hover:text-paper transition-colors">
                Our Companies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono-label text-xs uppercase text-bronze-light mb-4">
            About
          </h3>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>
              <Link href="/about" className="hover:text-paper transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-paper transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono-label text-xs uppercase text-bronze-light mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>
              <a href="mailto:info@arkvongroup.com" className="hover:text-paper transition-colors">
                info@arkvongroup.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-paper/40">
          © {new Date().getFullYear()} Arkvon Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}