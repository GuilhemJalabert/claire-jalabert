import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

/** Racine Next.js — le document HTML vit dans `[locale]/layout`. */
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
