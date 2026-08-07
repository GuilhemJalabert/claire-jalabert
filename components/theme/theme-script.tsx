import { THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * Script inline anti-FOUC — définit data-theme avant hydratation.
 * À placer dans <head> / début de <html>.
 */
function ThemeScript() {
  const code = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=(s==="contemplation"||s==="lumiere")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"contemplation":"lumiere");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","contemplation");}})();`;

  return (
    <script
      id="claire-theme-script"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}

export { ThemeScript };
