import { PageIntro, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { ProductCard } from "../../components/ProductCard";
import { productsForCategory } from "../../site-data";
export const metadata = { title: "Ride on Cars | Kidz Auto" };
export default function CarsPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Product range"
          title="Kidz Ride on Cars"
          accent="Made for wonder."
        />
        <p className="page-lede">
          Big-car feeling in a child-sized electric ride.
        </p>
        <div className="catalogue-grid">
          {productsForCategory("cars").map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
