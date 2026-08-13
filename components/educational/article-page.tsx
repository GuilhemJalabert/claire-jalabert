import { Link } from "@/i18n/navigation";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Hero } from "@/components/sections/hero"
import { SoftHalo } from "@/components/decor/soft-halo"
import { Starfield } from "@/components/decor/starfield"
import { ArticleToc } from "@/components/educational/article-toc"
import { ArticleBlocks } from "@/components/educational/article-blocks"
import { RelatedArticleCard } from "@/components/educational/related-card"
import { SourceList } from "@/components/educational/source-list"
import { EducationalCallout } from "@/components/educational/callout"
import { EDUCATIONAL_UPDATED_AT } from "@/lib/educational"
import type {
  EducationalArticle,
  EducationalSection,
} from "@/lib/educational/types"

function formatUpdatedAt(iso: string) {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${iso}T12:00:00`))
  } catch {
    return iso
  }
}

/** Découpe identique sur tous les dossiers — même narration visuelle. */
function splitSections(sections: EducationalSection[]) {
  const n = sections.length
  const first = Math.max(1, Math.ceil(n / 3))
  const second = Math.max(first + 1, Math.ceil((2 * n) / 3))
  return {
    early: sections.slice(0, first),
    mid: sections.slice(first, second),
    late: sections.slice(second),
  }
}

function ArticleSectionList({ sections }: { sections: EducationalSection[] }) {
  if (sections.length === 0) return null
  return (
    <div className="flex flex-col gap-14 sm:gap-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2 className="text-h2 text-foreground mb-6 text-balance">
            {section.title}
          </h2>
          <ArticleBlocks blocks={section.blocks} />
        </section>
      ))}
    </div>
  )
}

type EducationalArticlePageProps = {
  article: EducationalArticle
}

/**
 * Layout commun à tous les dossiers Comprendre.
 * Dégradé narratif fixe : hero → phase-2 → phase-3 → phase-4 → phase-5.
 */
function EducationalArticlePage({ article }: EducationalArticlePageProps) {
  const updated = article.updatedAt || EDUCATIONAL_UPDATED_AT
  const { early, mid, late } = splitSections(article.sections)

  return (
    <>
      <Hero
        title={article.title}
        eyebrow={article.eyebrow}
        description={article.description}
        showVisual={false}
        compact
      />

      {/* Phase 2 — crépuscule : sommaire + introduction */}
      <Section atmosphere="phase-2" className="relative overflow-hidden">
        <Starfield density="sparse" />
        <SoftHalo
          tone="dusk"
          className="right-[-12%] top-1/4 size-80 opacity-20"
        />
        <Container className="relative">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="rounded-full font-normal">
                Dossier pédagogique
              </Badge>
              <p className="text-caption text-muted-foreground normal-case tracking-normal">
                Dernière mise à jour : {formatUpdatedAt(updated)}
              </p>
            </div>
            <ArticleToc items={article.toc} />
          </div>

          <div className="mx-auto max-w-[42rem]">
            <EducationalCallout
              kind="disclaimer"
              title="Information pédagogique"
              body="Ces informations ont une vocation pédagogique et ne remplacent pas une évaluation clinique ou un avis médical."
              className="mb-10"
            />
            <ArticleSectionList sections={early} />
          </div>
        </Container>
      </Section>

      {/* Phase 3 — transition */}
      {mid.length > 0 ? (
        <Section atmosphere="phase-3" className="relative overflow-hidden">
          <SoftHalo
            tone="gold"
            className="left-[-10%] top-1/3 size-72 opacity-15"
          />
          <Container className="relative">
            <div className="mx-auto max-w-[42rem]">
              <ArticleSectionList sections={mid} />
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Phase 4 — aube : fin du dossier + sources */}
      <Section atmosphere="phase-4" className="relative overflow-hidden">
        <SoftHalo
          tone="terracotta"
          className="right-[-8%] bottom-0 size-72 opacity-20"
        />
        <Container className="relative">
          <div className="mx-auto max-w-[42rem]">
            <ArticleSectionList sections={late} />

            <Separator className="bg-border/50 my-14" />

            <section id="sources" className="scroll-mt-28">
              <h2 className="text-h2 text-foreground mb-3">
                Sources &amp; repères
              </h2>
              <p className="text-small text-muted-foreground mb-6 max-w-prose text-pretty">
                Sources institutionnelles et scientifiques ayant servi à
                rédiger ce dossier. Les recommandations évoluent : se référer
                aux documents officiels à jour.
              </p>
              <SourceList
                sources={article.sources}
                className="flex max-w-prose flex-col gap-3"
              />
            </section>

            {article.related.length > 0 ? (
              <section className="mt-14">
                <h2 className="text-h2 text-foreground mb-6">
                  Continuer la lecture
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {article.related.map((item) => (
                    <RelatedArticleCard key={item.href} {...item} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* Phase 5 — lumière : CTA */}
      <Section atmosphere="phase-5" className="relative overflow-hidden" compact>
        <Container className="relative">
          <div className="mx-auto flex max-w-[42rem] flex-col gap-4 rounded-[1.5rem] ring-1 ring-border/40 surface-glass-strong p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-md">
              <p className="font-display text-card-foreground text-xl tracking-tight sm:text-2xl">
                Une question sur un accompagnement ou un bilan ?
              </p>
              <p className="text-small text-[color:var(--card-muted-foreground)] mt-2 text-pretty">
                Les dossiers « Comprendre » éclairent ; les pages Accompagnements
                et Contact permettent d’échanger concrètement.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="warm" asChild>
                <Link href="/accompagnements">Accompagnements</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export { EducationalArticlePage }
