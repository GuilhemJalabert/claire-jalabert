import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { EducationalArticlePage } from "@/components/educational/article-page"
import { absoluteTitle, absoluteUrl, languageAlternates, type AppHref } from "@/i18n/metadata"
import { asAppLocale } from "@/i18n/routing"
import {
  educationalArticles,
  getEducationalArticle,
} from "@/lib/educational"

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

  const href = `/comprendre/${article.slug}` as AppHref
  const url = absoluteUrl(locale, href)

  return {
    title: absoluteTitle(article.metaTitle),
    description: article.metaDescription,
    alternates: languageAlternates(locale, href),
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
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
