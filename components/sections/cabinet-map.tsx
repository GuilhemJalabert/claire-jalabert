import { contactInfo } from "@/lib/content";

/**
 * Carte embarquée du cabinet — géolocalisation via l’adresse validée.
 * Embed Google Maps (sans clé API) à partir de l’adresse complète.
 */
function CabinetMap({ className }: { className?: string }) {
  const query = encodeURIComponent(`${contactInfo.address.full}, France`);
  const src = `https://maps.google.com/maps?q=${query}&z=16&hl=fr&output=embed`;

  return (
    <div
      className={
        className ??
        "ring-border/40 shadow-soft relative overflow-hidden rounded-[1.5rem] ring-1"
      }
    >
      <iframe
        title={`Carte — cabinet ${contactInfo.address.full}`}
        src={src}
        className="aspect-[16/11] w-full border-0 sm:aspect-[16/9]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export { CabinetMap };
