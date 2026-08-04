export default function ArticleSchema({ article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    image: [
      `https://www.arkvongroup.com${article.image}`,
    ],
    datePublished: article.date,
    dateModified: article.date,
  author: {
  "@type": "Organization",
  name: article.author || "Arkvon Group",
},
    publisher: {
      "@type": "Organization",
      name: "Arkvon Group",
      logo: {
        "@type": "ImageObject",
        url: "https://www.arkvongroup.com/arkvon-logo-mark.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.arkvongroup.com${article.href}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}