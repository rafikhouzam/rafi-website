"use client";
import { DefaultSeo } from "next-seo";

export default function SEOClient() {
  return (
    <DefaultSeo
      additionalLinkTags={[{ rel: "icon", href: "/favicon.ico" }]}
      openGraph={{
        url: "https://rafikhouzam.com",
        images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Rafi Khouzam" }],
      }}
    />
  );
}
