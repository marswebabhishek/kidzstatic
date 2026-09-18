import { PageIntro, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { ProductCard } from "../../components/ProductCard";
import { productsForCategory } from "../../site-data";
export const metadata = { title: "Ride on Jeeps | Kidz Auto" };
export default function JeepsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Product range"
          title="Kidz Ride on Jeeps"
          accent="Made for wonder."
        />
        <p className="page-lede">
          Adventure-ready electric rides for little explorers.
        </p>
        <div className="catalogue-grid">
          {productsForCategory("jeeps").map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
