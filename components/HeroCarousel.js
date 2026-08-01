"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Scene3D from "./Scene3D";
import { companies } from "../data/companies";

const flagship = companies[0];

const SLIDES = [
  { id: "scene", kind: "scene" },
  {
    id: `${flagship.slug}-founding`,
    kind: "card",
    eyebrow: `Milestone · Est. ${flagship.founded}`,
    title: `${flagship.name} joins the group`,
    copy: flagship.tagline,
    href: `/companies/${flagship.slug}`,
    cta: "Read the company profile",
  },
  {
    id: "growth",
    kind: "card",
    eyebrow: "The Ledger",
    title: "One company today. Room for more.",
    copy: "Arkvon Group would rather add a business a decade too slowly than a year too fast.",
    href: "/companies",
    cta: "See our companies",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    setPlaying(!mq.matches);
    const handler = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) setPlaying(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!playing || reducedMotion) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [playing, reducedMotion]);

  function goTo(i) {
    setIndex(i);
  }
  function togglePlaying() {
    setPlaying((p) => !p);
  }
  function pauseOnInteract() {
    if (!reducedMotion) setPlaying(false);
  }

  return (
    <section
      className="relative bg-ink text-paper overflow-hidden"
      onMouseEnter={pauseOnInteract}
      onFocus={pauseOnInteract}
    >
      <div className="relative min-h-[540px] sm:min-h-[600px]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            aria-hidden={i !== index}
            className={`transition-opacity duration-700 ${
              i === index ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            {slide.kind === "scene" ? (
              <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 flex items-center justify-center">
                <Scene3D companies={companies} />
              </div>
            ) : (
              <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 min-h-[540px] sm:min-h-[600px] flex flex-col justify-center">
                <span className="font-mono-label text-[11px] uppercase text-bronze-light">
                  {slide.eyebrow}
                </span>
                <h2 className="font-display mt-6 text-4xl md:text-5xl max-w-2xl leading-tight">
                  {slide.title}
                </h2>
                <p className="mt-6 max-w-xl text-paper/70 text-lg leading-relaxed">
                  {slide.copy}
                </p>
                <Link
                  href={slide.href}
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-bronze-light hover:text-bronze border-b border-bronze/40 pb-0.5"
                >
                  {slide.cta} →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 md:left-10 flex items-center gap-4 z-10">
        <button
          type="button"
          onClick={togglePlaying}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          aria-pressed={playing}
          className="w-8 h-8 flex items-center justify-center border border-paper/30 rounded-full text-paper/80 hover:text-paper hover:border-paper/60 transition-colors"
        >
          {playing ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <rect x="1" y="0" width="3" height="10" />
              <rect x="6" y="0" width="3" height="10" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <path d="M0 0 L10 5 L0 10 Z" />
            </svg>
          )}
        </button>
        <div className="flex items-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-bronze-light" : "w-1.5 bg-paper/30 hover:bg-paper/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}