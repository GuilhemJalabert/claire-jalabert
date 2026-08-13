import { cn } from "@/lib/utils";
import type { AppLocale } from "@/i18n/routing";

type FlagProps = {
  className?: string;
  title?: string;
};

function FlagFr({ className, title = "Français" }: FlagProps) {
  return (
    <svg viewBox="0 0 3 2" className={cn("size-4 rounded-[2px]", className)} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect width="1" height="2" x="0" fill="#002654" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#CE1126" />
    </svg>
  );
}

function FlagEn({ className, title = "English" }: FlagProps) {
  return (
    <svg viewBox="0 0 60 30" className={cn("size-4 rounded-[2px]", className)} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#FFF" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30 0 V30 M0 15 H60" stroke="#FFF" strokeWidth="10" />
      <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagIt({ className, title = "Italiano" }: FlagProps) {
  return (
    <svg viewBox="0 0 3 2" className={cn("size-4 rounded-[2px]", className)} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect width="1" height="2" x="0" fill="#009246" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#CE2B37" />
    </svg>
  );
}

function FlagEs({ className, title = "Español" }: FlagProps) {
  return (
    <svg viewBox="0 0 3 2" className={cn("size-4 rounded-[2px]", className)} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <rect width="3" height="2" fill="#AA151B" />
      <rect width="3" height="1" y="0.5" fill="#F1BF00" />
    </svg>
  );
}

const flagByLocale: Record<AppLocale, (props: FlagProps) => React.JSX.Element> = {
  fr: FlagFr,
  en: FlagEn,
  it: FlagIt,
  es: FlagEs,
};

function LocaleFlag({
  locale,
  className,
}: {
  locale: AppLocale;
  className?: string;
}) {
  const Flag = flagByLocale[locale];
  return <Flag className={className} />;
}

export { LocaleFlag };
