export type EducationalTocItem = { id: string; label: string };

export type EducationalSource = {
  label: string;
  href?: string;
  detail?: string;
};

export type EducationalRelated = {
  href: string;
  title: string;
  description: string;
};

export type EducationalCalloutKind =
  | "takeaway"
  | "myth"
  | "consult"
  | "disclaimer";

export type EducationalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; id?: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "callout";
      kind: EducationalCalloutKind;
      title: string;
      body: string;
    }
  | { type: "cta"; href: string; label: string; description?: string };

export type EducationalSection = {
  id: string;
  title: string;
  blocks: EducationalBlock[];
};

export type EducationalArticle = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  updatedAt: string; // ISO date YYYY-MM-DD
  atmosphere: "phase-1" | "phase-2" | "phase-3" | "phase-4";
  toc: EducationalTocItem[];
  sections: EducationalSection[];
  sources: EducationalSource[];
  related: EducationalRelated[];
};
