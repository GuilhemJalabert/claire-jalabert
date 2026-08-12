import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { EducationalArticlePage } from "@/components/educational/article-page"
import {
  educationalArticles,
  getEducationalArticle,
} from "@/lib/educational"
import { siteConfig } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return educationalArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getEducationalArticle(slug)
  if (!article) return {}

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${siteConfig.url}/comprendre/${article.slug}`,
      type: "article",
    },
  }
}

export default async function ComprendreArticleRoute({ params }: PageProps) {
  const { slug } = await params
  const article = getEducationalArticle(slug)
  if (!article) notFound()

  return <EducationalArticlePage article={article} />
}
