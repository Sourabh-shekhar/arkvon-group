import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { updates } from "../../../data/updates";
import { companies } from "../../../data/companies";
import FadeIn from "../../../components/FadeIn";
import ArticleSchema from "../../../components/SEO/ArticleSchema";

export async function generateStaticParams() {
    return updates.map((item) => ({
        slug: item.href.replace("/news/", ""),
    }));
}

export function generateMetadata({ params }) {
    const article = updates.find(
        (item) => item.href === `/news/${params.slug}`
    );
    return { title: article ? `${article.title} — Arkvon Group` : "Arkvon Group" };
}

export default function NewsArticle({ params }) {
    const slug = params.slug;

    const article = updates.find(
        (item) => item.href === `/news/${slug}`
    );

    if (!article) {
        notFound();
    }

    // Auto-match a related company if this article mentions one by name
    const relatedCompany = companies.find((c) =>
        article.title.toLowerCase().includes(c.name.toLowerCase())
    );

    return (
        <>
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
            
             <ArticleSchema article={article} />
            <main className="max-w-3xl mx-auto px-6 py-16">
                <FadeIn>
                    <Link href="/news" className="text-sm text-slate hover:text-bronze-dark">
                        ← News
                    </Link>

                    <p className="text-sm text-bronze-dark tracking-widest uppercase mt-8 mb-4">
                        {article.date} · {article.tag}
                    </p>

                    <h1 className="font-display text-4xl sm:text-5xl text-ink mb-8">
                        {article.title}
                    </h1>

                    {/* Masthead byline row with logo mark */}
                    <div className="flex items-center gap-3 pb-8 mb-10 border-b border-charcoal/10">
                        <Image
                            src="/arkvon-logo-mark.png"
                            alt="Arkvon Group"
                            width={96}
                            height={64}
                            className="h-8 w-auto"
                        />
                        <div className="border-l border-charcoal/10 pl-3">
                            <p className="text-ink text-sm font-medium">{article.author}</p>
                            <p className="text-slate text-xs">Arkvon Group</p>
                        </div>
                    </div>

                    <div className="space-y-6 text-charcoal leading-relaxed text-lg">
                        {article.content
                            .trim()
                            .split("\n\n")
                            .map((paragraph, index) => (
                                <p key={index}>{paragraph.trim()}</p>
                            ))}
                    </div>

                    {/* Related holding card */}
                    {relatedCompany && (
                        <Link
                            href={`/companies/${relatedCompany.slug}`}
                            className="group flex items-center gap-4 mt-16 p-6 rounded-2xl border border-charcoal/10 hover:border-bronze-dark transition-colors"
                        >
                            {relatedCompany.logo && (
                                <Image
                                    src={relatedCompany.logo}
                                    alt={relatedCompany.name}
                                    width={56}
                                    height={56}
                                    className="rounded-lg"
                                />
                            )}
                            <div className="flex-1">
                                <p className="text-bronze-dark text-xs tracking-widest uppercase mb-1">
                                    {relatedCompany.sector}
                                </p>
                                <p className="font-display text-xl text-ink group-hover:text-bronze-dark transition-colors">
                                    {relatedCompany.name}
                                </p>
                                <p className="text-slate text-sm">{relatedCompany.tagline}</p>
                            </div>
                            <span className="text-slate text-sm group-hover:text-bronze-dark transition-colors">
                                View →
                            </span>
                        </Link>
                    )}
                </FadeIn>
            </main>
        </>
    );
}