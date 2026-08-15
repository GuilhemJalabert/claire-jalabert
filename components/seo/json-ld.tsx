import { contactFacts } from "@/lib/content";
import { SITE_URL, siteConfig } from "@/lib/site";

/**
 * Données structurées factuelles (Person + ProfessionalService).
 * Uniquement des informations déjà présentes sur le site.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        url: SITE_URL,
        email: contactFacts.email,
        telephone: contactFacts.phoneTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: contactFacts.address.street,
          addressLocality: contactFacts.address.city,
          postalCode: contactFacts.address.postalCode,
          addressCountry: "FR",
        },
        worksFor: { "@id": `${SITE_URL}/#practice` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#practice`,
        name: `${siteConfig.name} — ${siteConfig.title}`,
        description: siteConfig.description,
        url: SITE_URL,
        telephone: contactFacts.phoneTel,
        email: contactFacts.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: contactFacts.address.street,
          addressLocality: contactFacts.address.city,
          postalCode: contactFacts.address.postalCode,
          addressCountry: "FR",
        },
        areaServed: {
          "@type": "City",
          name: contactFacts.address.city,
        },
        founder: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
