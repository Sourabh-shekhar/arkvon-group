import { companies } from "../data/companies";

export default function sitemap() {
  const baseUrl = "https://www.arkvongroup.com";

  const staticRoutes = [
    "",
    "/about",
    "/vision-mission",
    "/leadership",
    "/news",
    "/companies",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const companyRoutes = companies.map((c) => ({
    url: `${baseUrl}/companies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...companyRoutes];
}