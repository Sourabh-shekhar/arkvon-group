"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="arkvon_cookie_consent"
      expires={180}
      style={{
        background: "#0F1B2D",
        color: "#fff",
      }}
      buttonStyle={{
        background: "#B08D57",
        color: "#fff",
        borderRadius: "8px",
        padding: "10px 20px",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#fff",
        border: "1px solid #B08D57",
        borderRadius: "8px",
      }}
    >
      We use cookies to improve your experience, analyze traffic, and understand how visitors use our website.
    </CookieConsent>
  );
}