"use client";

import { NavigationIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contactInfo } from "@/lib/content";

function getDirectionsUrls(destination: string) {
  const encoded = encodeURIComponent(destination);
  return {
    google: `https://www.google.com/maps/dir/?api=1&destination=${encoded}`,
    apple: `https://maps.apple.com/?daddr=${encoded}`,
  };
}

/**
 * Bouton d’itinéraire — choix Maps (Google) ou Plans (Apple).
 */
function DirectionsButton() {
  const urls = getDirectionsUrls(contactInfo.address.full);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg" variant="warm" className="w-full sm:w-auto">
          <NavigationIcon data-icon="inline-start" />
          Démarrer l’itinéraire vers le cabinet
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="gap-5 rounded-t-3xl px-6 pb-8">
        <SheetHeader className="gap-2 p-0 text-left">
          <SheetTitle className="font-display text-xl tracking-tight">
            Choisir une application
          </SheetTitle>
          <SheetDescription>
            Ouvrez l’itinéraire vers {contactInfo.address.full} dans
            l’application de votre choix.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3">
          <Button size="lg" variant="secondary" asChild className="w-full justify-center">
            <a href={urls.google} target="_blank" rel="noopener noreferrer">
              Ouvrir dans Maps
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full justify-center">
            <a href={urls.apple} target="_blank" rel="noopener noreferrer">
              Ouvrir dans Plans
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { DirectionsButton };
