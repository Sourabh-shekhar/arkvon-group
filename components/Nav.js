"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { companies } from "../data/companies";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const toggleMobileSection = (key) => {
    setMobileSection((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/90 dark:bg-paper/90 backdrop-blur border-b border-charcoal/10 dark:border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/arkvon-logo-mark.png"
            alt="Arkvon Group"
            width={150}
            height={500}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8 text-sm text-charcoal/80 dark:text-charcoal/90">
          {/* Our Companies — mega panel */}
          <div className="relative group">
            <Link
              href="/companies"
              className="hover:text-ink transition-colors py-2"
            >
              Our Companies
            </Link>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-1
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                         transition-all duration-150"
            >
              <div className="w-72 bg-paper border border-charcoal/10 dark:border-charcoal/20 rounded-xl shadow-lg p-5">
                <p className="text-bronze text-[11px] tracking-[0.15em] uppercase mb-3">
                  Register of Holdings
                </p>
                {companies.map((c, i) => (
                  <Link
                    key={c.slug}
                    href={`/companies/${c.slug}`}
                    className="flex items-center justify-between py-2.5 border-t border-charcoal/10 first:border-t-0 hover:text-bronze transition-colors"
                  >
                    <span className="font-display text-base">{c.name}</span>
                    <span className="font-mono text-[11px] text-charcoal/50">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                  </Link>
                ))}
                <div className="flex items-center justify-between py-2.5 border-t border-charcoal/10 text-charcoal/40 italic">
                  <span className="text-base">Next holding</span>
                  <span className="font-mono text-[11px]">in progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* About — mega panel */}
          <div className="relative group">
            <Link href="/about" className="hover:text-ink transition-colors py-2">
              About
            </Link>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-1
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                         transition-all duration-150"
            >
              <div className="w-56 bg-paper border border-charcoal/10 dark:border-charcoal/20 rounded-xl shadow-lg p-5">
                <p className="text-bronze text-[11px] tracking-[0.15em] uppercase mb-3">
                  The Group
                </p>
                <Link href="/about" className="block py-2.5 border-t border-charcoal/10 first:border-t-0 hover:text-bronze transition-colors">
                  Our story
                </Link>
                <Link href="/vision-mission" className="block py-2.5 border-t border-charcoal/10 hover:text-bronze transition-colors">
                  Vision &amp; Mission
                </Link>
                <Link href="/leadership" className="block py-2.5 border-t border-charcoal/10 hover:text-bronze transition-colors">
                  Leadership
                </Link>
                <Link href="/careers" className="block py-2.5 border-t border-charcoal/10 hover:text-bronze transition-colors">
                  Careers
                </Link>
              </div>
            </div>
          </div>

          <Link href="/news" className="hover:text-ink transition-colors">
            News
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
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="sm:hidden flex flex-col px-6 pb-6 text-sm text-charcoal/80 dark:text-charcoal/90 bg-paper border-t border-charcoal/10 dark:border-charcoal/20">
          {/* Our Companies — accordion */}
          <div className="border-b border-charcoal/10">
            <button
              className="w-full flex items-center justify-between py-3 hover:text-ink transition-colors"
              onClick={() => toggleMobileSection("companies")}
            >
              Our Companies
              <span
                className={`transition-transform ${mobileSection === "companies" ? "rotate-180" : ""
                  }`}
              >
                ⌄
              </span>
            </button>
            {mobileSection === "companies" && (
              <div className="pb-3 pl-3">
                {companies.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/companies/${c.slug}`}
                    className="block py-2 text-charcoal/70 hover:text-bronze transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
                <span className="block py-2 text-charcoal/40 italic">
                  Next holding — in progress
                </span>
              </div>
            )}
          </div>

          {/* About — accordion */}
          <div className="border-b border-charcoal/10">
            <button
              className="w-full flex items-center justify-between py-3 hover:text-ink transition-colors"
              onClick={() => toggleMobileSection("about")}
            >
              About
              <span
                className={`transition-transform ${mobileSection === "about" ? "rotate-180" : ""
                  }`}
              >
                ⌄
              </span>
            </button>
            {mobileSection === "about" && (
              <div className="pb-3 pl-3">
                <Link
                  href="/about"
                  className="block py-2 text-charcoal/70 hover:text-bronze transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Our story
                </Link>
                <Link
                  href="/vision-mission"
                  className="block py-2 text-charcoal/70 hover:text-bronze transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Vision &amp; Mission
                </Link>
                <Link
                  href="/leadership"
                  className="block py-2 text-charcoal/70 hover:text-bronze transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Leadership
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/news"
            className="py-3 border-b border-charcoal/10 hover:text-ink transition-colors"
            onClick={() => setOpen(false)}
          >
            News
          </Link>
          <Link
            href="/careers"
            className="py-3 border-b border-charcoal/10 hover:text-ink transition-colors"
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