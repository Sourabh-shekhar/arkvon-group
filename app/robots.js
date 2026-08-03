export default function robots() {
  const baseUrl = "https://www.arkvongroup.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}