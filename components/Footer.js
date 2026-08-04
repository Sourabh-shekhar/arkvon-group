import Image from "next/image";
import Link from "next/link";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/achaaryaar", icon: "M12 2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.4.46.7.27 1.2.62 1.7 1.13.5.5.86 1 1.13 1.7.24.6.4 1.3.46 2.4.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.46 2.4a4.6 4.6 0 01-1.13 1.7 4.6 4.6 0 01-1.7 1.13c-.6.24-1.3.4-2.4.46-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.4-.46a4.6 4.6 0 01-1.7-1.13 4.6 4.6 0 01-1.13-1.7c-.24-.6-.4-1.3-.46-2.4C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.8.46-2.4.27-.7.62-1.2 1.13-1.7A4.6 4.6 0 015.4 2.66c.6-.24 1.3-.4 2.4-.46C8.9 2.01 9.2 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" },
  { name: "Facebook", href: "https://facebook.com", icon: "M13.5 21v-7.5H16l.5-3H13.5V8.3c0-.87.24-1.46 1.5-1.46h1.6V3.36C16.3 3.25 15.3 3.15 14.2 3.15c-2.4 0-4.1 1.46-4.1 4.15v2.35H7.6v3h2.5V21h3.4z" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/arkvongroup/", icon: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4V9z" },
];

const sitemap = [
  {
    heading: "Our Companies",
    links: [{ label: "AchaarYaar", href: "/companies/achaaryaar" }],
  },
  {
    heading: "About",
    links: [
      { label: "About Arkvon Group", href: "/about" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "info@arkvongroup.com", href: "mailto:info@arkvongroup.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-5 gap-10">
        <div className="sm:col-span-1">
       <Link href="/" className="inline-block mb-5">
  <Image
    src="/arkvon-logo-mark.png"
    alt="Arkvon Group"
    width={260}
    height={70}
    className="h-20 w-auto"
    priority
  />
</Link>
          <p className="text-paper/60 text-sm leading-relaxed">
            Rooted in India, Ready for the world.
          </p>
          <div className="flex gap-4 mt-6">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-paper/60 hover:text-bronze transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {sitemap.map((col) => (
          <div key={col.heading}>
            <p className="text-bronze-light text-xs tracking-widest uppercase mb-4">
              {col.heading}
            </p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-paper/70 text-sm hover:text-paper transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} Arkvon Group. All rights reserved.</p>
          <p>arkvongroup.com</p>
        </div>
      </div>
    </footer>
  );
}