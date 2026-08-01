"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          ARKVON <span className="text-bronze">GROUP</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8 text-sm text-charcoal/80">
          <Link href="/companies" className="hover:text-ink transition-colors">
            Our Companies
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
          <Link href="/careers" className="hover:text-ink transition-colors">
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-ink border border-ink/20 px-4 py-2 rounded-full hover:border-bronze hover:text-bronze transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="sm:hidden flex flex-col gap-1 px-6 pb-6 text-sm text-charcoal/80 bg-paper border-t border-charcoal/10">
          <Link
            href="/companies"
            className="py-3 hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            Our Companies
          </Link>
          <Link
            href="/about"
            className="py-3 hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/careers"
            className="py-3 hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="py-3 text-ink font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}