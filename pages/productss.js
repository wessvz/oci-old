import styles from "@/styles/Productss.module.css";
import Head from "next/head";
import General from "@/components/hero/General";
import Product from "@/components/layout/content/Product";
import magazijn from "@/public/images/magazijn.webp";
import products from "@/public/images/product.webp";

export default function Products() {
  return (
    <div>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <General
          title="Products overview"
          subtitle="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
        />

        <section className={styles.container}>
          <Product
            level={1}
            kicker="Fittings"
            title="More than 2000 products"
            copy="A complete range that meets all requirements and needs in connection technology, materials, shapes and compliance with standards. OCI offers fittings suitable for numerous applications: drinking water, heating, gas, geothermal, fire prevention and more. It covers a wide range in different materials: stainless steel, carbon steel, brass copper and bronze."
            image={products}
            alt="Products made by OCI"
          />
          <Product
            level={2}
            kicker="Pipe systems"
            title="Flexibility is the guiding principle"
            copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
            image={magazijn}
            alt="Products made by OCI"
          />
          <Product
            level={1}
            kicker="Gas"
            title="Pipes and hoses"
            copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
            image={products}
            alt="Products made by OCI"
          />
          <Product
            level={2}
            kicker="Liquids"
            title="Refurbished products"
            copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
            image={magazijn}
            alt="Products made by OCI"
          />
        </section>
      </main>
    </div>
  );
}
