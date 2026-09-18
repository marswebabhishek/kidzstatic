import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ProductCatalogue } from "../components/ProductCatalogue";

export const metadata = { title: "Products | Kidz Auto" };

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="catalogue-page">
        <PageIntro
          eyebrow="Complete collection"
          title="All products"
          accent="Find their favourite."
        />
        <p className="page-lede">
          Explore premium ride-on bikes, jeeps, cars and scooters made for
          adventure, safety and unforgettable childhood memories.
        </p>
        <ProductCatalogue />
        <div className="catalogue-bar catalogue-bar-light">
          <div>
            <span className="section-kicker">Full catalogue</span>
            <h3>See every model in the e-catalogue.</h3>
          </div>
          <a
            className="button button-dark"
            href="/e-catalogue.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open e-catalogue <span className="arrow">↗</span>
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
