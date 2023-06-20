import Head from "next/head";

export default function GlobalHead({
  title,
  description,
  keywords,
  type = "WebPage",
  robots = "index, follow",
  name,
  url,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="author"
        content="Full Stacks Digital Agency (https://fullstacks.nl)"
      />
      <meta name="robots" content={robots} />
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
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "${type}",
          name: "${name}",
          url: "${url}",
          logo: "https://www.ocibv.nl/_next/static/media/oci-dark.10dc46ff.svg",
        })}
      </script>
    </Head>
  );
}
