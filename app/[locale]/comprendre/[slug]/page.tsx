import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { EducationalArticlePage } from "@/components/educational/article-page"
import { languageAlternates } from "@/i18n/metadata"
import { asAppLocale } from "@/i18n/routing"
import {
  educationalArticles,
  getEducationalArticle,
} from "@/lib/educational"
import { siteConfig } from "@/lib/site"

type PageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return educationalArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params
  const locale = asAppLocale(localeParam)
  const article = getEducationalArticle(slug, locale)
  if (!article) return {}

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: languageAlternates(locale, `/comprendre/${article.slug}`),
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${siteConfig.url}/comprendre/${article.slug}`,
      type: "article",
    },
  }
}

export default async function ComprendreArticleRoute({ params }: PageProps) {
  const { locale: localeParam, slug } = await params
  const locale = asAppLocale(localeParam)
  setRequestLocale(locale)
  const article = getEducationalArticle(slug, locale)
  if (!article) notFound()

  return <EducationalArticlePage article={article} />
}
