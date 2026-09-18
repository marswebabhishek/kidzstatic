import { PageIntro, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { ProductCard } from "../../components/ProductCard";
import { productsForCategory } from "../../site-data";
export const metadata = { title: "Ride on Bikes | Kidz Auto" };
export default function BikesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Product range"
          title="Kidz Ride on Bikes"
          accent="Made for wonder."
        />
        <p className="page-lede">Two wheels, a whole lot of confidence.</p>
        <div className="catalogue-grid">
          {productsForCategory("bikes").map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
