import { PageIntro, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { ProductCard } from "../../components/ProductCard";
import { productsForCategory } from "../../site-data";
export const metadata = { title: "Ride on Scooters | Kidz Auto" };
export default function ScootersPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Product range"
          title="Kidz Ride on Scooters"
          accent="Made for wonder."
        />
        <p className="page-lede">
          Easy, exciting first rides for growing riders.
        </p>
        <div className="catalogue-grid">
          {productsForCategory("scooters").map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
