import Image from "next/image";
import { notFound } from "next/navigation";
import { updates } from "../../../data/updates";

export async function generateStaticParams() {
    return updates.map((item) => ({
        slug: item.href.replace("/news/", ""),
    }));
}

export default function NewsArticle({ params }) {
    const slug = params.slug;

    const article = updates.find(
        (item) => item.href === `/news/${slug}`
    );

    if (!article) {
        notFound();
    }

    return (
        <>
            {/* Hero Image */}
            <section className="w-full mt-24">
                <Image
                    src={article.image}
                    alt={article.title}
                    width={1600}
                    height={900}
                    priority
                    className="w-full h-auto"
                />
            </section>

            {/* Article */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                <p className="text-sm text-gray-500 mb-2">
                    {article.date} · {article.tag}
                </p>

                <h1 className="text-5xl font-bold mb-4">
                    {article.title}
                </h1>

                <p className="text-gray-500 mb-10">
                    By {article.author}
                </p>

                <div className="prose prose-lg max-w-none">
                    {article.content
                        .trim()
                        .split("\n\n")
                        .map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                </div>
            </main>
        </>
    );
}