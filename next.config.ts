import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/expertises",
        destination: "/accompagnements",
        permanent: true,
      },
      {
        source: "/:locale(en|it|es)/expertises",
        destination: "/:locale/accompagnements",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
