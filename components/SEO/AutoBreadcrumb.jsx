"use client";

import { usePathname } from "next/navigation";
import BreadcrumbSchema from "./BreadcrumbSchema.jsx";

export default function AutoBreadcrumb() {
  const pathname = usePathname();

  const baseUrl = "https://www.arkvongroup.com";

  const friendlyNames = {
    "": "Home",

    about: "About",
    companies: "Companies",
    news: "News",
    contact: "Contact",

    privacy: "Privacy Policy",
    "privacy-policy": "Privacy Policy",

    terms: "Terms & Conditions",
    "terms-and-conditions": "Terms & Conditions",

    careers: "Careers",

    achaaryaar: "AchaarYaar",

    "arkvon-group": "Arkvon Group Founded",
    "achaaryaar-launch": "AchaarYaar Launch",
  };

  const segments = pathname.split("/").filter(Boolean);

  const items = [
    {
      name: "Home",
      url: baseUrl,
    },
  ];

  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;

    items.push({
      name:
        friendlyNames[segment] ||
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (letter) => letter.toUpperCase()),
      url: baseUrl + currentPath,
    });
  });

  return <BreadcrumbSchema items={items} />;
}