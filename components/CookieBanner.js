"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("arkvon_cookie_consent");
    if (!consent) setShow(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem("arkvon_cookie_consent", value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999] border-t border-white/10 bg-[#0F1B2D] backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-white/90">
          <span className="font-semibold">🍪 Cookies</span>
          <p className="mt-1 text-white/70">
            We use cookies to improve your experience, analyze traffic, and
            enhance our services.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleConsent("declined")}
            className="rounded-lg border border-[#B08D57] px-5 py-2 text-white transition hover:bg-white/10"
          >
            Decline
          </button>

          <button
            onClick={() => handleConsent("accepted")}
            className="rounded-lg bg-[#B08D57] px-5 py-2 font-medium text-white transition hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}