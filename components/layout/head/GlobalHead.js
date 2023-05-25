import Head from "next/head";

export default function GlobalHead({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="author"
        content="Full Stacks Digital Agency (https://fullstacks.nl)"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="logo/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="logo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="logo/favicon-16x16.png"
      />
      <link rel="manifest" href="logo/site.webmanifest" />
      <link rel="mask-icon" href="logo/safari-pinned-tab.svg" color="#db0a40" />
      <meta name="msapplication-TileColor" content="#ff0000" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.ocibv.nl/images/og-image-oci.webp"
      />
      <meta property="og:url" content="https://www.ocibv.nl" />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "OCI BV",
          url: "https://www.ocibv.nl",
          logo: "https://www.ocibv.nl/images/logo-oci-dark.svg",
        })}
      </script>
    </Head>
  );
}
