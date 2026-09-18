import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = { title: "Manufacturing | Kidz Auto" };

export default function ManufacturingPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Manufacturing"
          title="Made in India."
          accent="Made to last."
        />
        <section className="editorial-grid">
          <div>
            <p className="large-copy">
              Thoughtful design and dependable production from our facility near
              Bengaluru.
            </p>
            <p className="body-copy">
              Kidz Auto brings together product design, assembly and finishing
              under one roof. Every ride-on is developed for the way Indian
              families live, play and grow.
            </p>
          </div>
          <div className="about-visual">
            <img
              src="/legacy/images/about.jpg"
              alt="Kidz Auto ride-on vehicles"
            />
          </div>
        </section>
        <section className="detail-section">
          <div className="detail-row">
            <span className="detail-number">01</span>
            <h2>Built locally</h2>
            <p>
              From first sketch to final inspection, our process is rooted in
              India.
            </p>
          </div>
          <div className="detail-row">
            <span className="detail-number">02</span>
            <h2>Ready globally</h2>
            <p>
              Our products are created with the quality and consistency expected
              by growing markets.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
