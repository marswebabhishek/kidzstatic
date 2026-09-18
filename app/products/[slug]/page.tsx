import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../site-data";
import {
  Breadcrumb,
  SiteFooter,
  SiteHeader,
} from "../../components/SiteChrome";
import { ProductGallery } from "../../components/ProductGallery";
import { ProductCard } from "../../components/ProductCard";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product ? `${product.name} | Kidz Auto` : "Product | Kidz Auto",
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const highlights = [
    { label: "Product size", value: "Made for comfortable family play" },
    {
      label: "Power",
      value:
        product.category === "jeeps"
          ? "12V ride-on power"
          : "6V / 12V ride-on power",
    },
    { label: "Gallery", value: `${product.gallery.length} product views` },
  ];
  const featureGroups = [
    {
      title: "Features",
      values: [
        "Child-friendly controls",
        "LED lights",
        "Music and horn",
        "Remote control ready",
      ],
    },
    {
      title: "Quality & comfort",
      values: [
        "Stable support system",
        "Comfortable seat",
        "Made in India",
        "Built for everyday play",
      ],
    },
  ];
  return (
    <>
      <SiteHeader />
      <main className="product-showroom">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />
        <div className="product-showroom-hero">
          <div className="product-showroom-media">
            <ProductGallery name={product.name} images={product.gallery} />
            <span className="product-badge">Made in India</span>
          </div>
          <div className="product-showroom-copy">
            <p className="section-kicker">{product.categoryLabel}</p>
            <h1>{product.name}</h1>
            <p className="product-tagline">
              Made for the moments they&apos;ll remember.
            </p>
            <p className="body-copy">{product.description}</p>
            <div className="product-highlight-grid">
              {highlights.map((highlight) => (
                <div key={highlight.label}>
                  <span>{highlight.label}</span>
                  <strong>{highlight.value}</strong>
                </div>
              ))}
            </div>
            <div className="product-actions">
              <a
                className="button button-dark"
                href="mailto:info@kidzautobharat.in"
              >
                Enquire now <span className="arrow">↗</span>
              </a>
              <Link className="button product-secondary-action" href="/oem-odm">
                Dealer enquiry <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
        <section className="engineered-details">
          <div className="engineered-intro">
            <span className="section-kicker">Specifications</span>
            <h2>
              Engineered
              <br />
              <em>details.</em>
            </h2>
            <p>
              Browse the essentials by section. Each model keeps the product
              experience first and the important details close at hand.
            </p>
          </div>
          <div className="engineered-groups">
            {featureGroups.map((group) => (
              <div className="engineered-group" key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.values.map((value) => (
                    <span key={value}>{value}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="showroom-cta">
          <div>
            <span className="section-kicker">Inquiry</span>
            <h2>Bring {product.name} to your showroom.</h2>
          </div>
          <div className="product-actions">
            <a
              className="button button-light"
              href="mailto:info@kidzautobharat.in"
            >
              Talk to sales <span className="arrow">↗</span>
            </a>
            <a
              className="button product-cta-secondary"
              href="tel:+919886504665"
            >
              Call +91 98865 04665
            </a>
          </div>
        </section>
        <section className="related-products">
          <div className="related-heading">
            <div>
              <span className="section-kicker">Related products</span>
              <h2>Continue the lineup.</h2>
            </div>
            <Link className="text-link" href={`/products/${product.category}`}>
              View category <span className="arrow">→</span>
            </Link>
          </div>
          <div className="related-product-grid">
            {products
              .filter(
                (item) =>
                  item.category === product.category &&
                  item.slug !== product.slug,
              )
              .slice(0, 4)
              .map((item) => (
                <ProductCard product={item} key={item.slug} />
              ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
