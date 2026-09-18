import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = { title: "About Kidz Auto | Made in India" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="About Kidz Auto"
          title="Little vehicles."
          accent="Lasting memories."
        />
        <section className="editorial-grid" id="manufacturing">
          <div>
            <p className="large-copy">Kidz Ride on Electric Bikes & Cars</p>
            <p className="body-copy">
              A “MAKE IN INDIA” initiative with a state-of-the-art manufacturing
              facility located on the outskirts of Bengaluru, India. The
              promoters began by trading and importing toys, then adapted to the
              fast-changing market by manufacturing and promoting locally
              produced toys for our own country and the international market.
            </p>
          </div>
          <div className="about-visual">
            <img
              src="/legacy/images/about-imag.png"
              alt="Kidz Auto ride-on vehicle"
            />
          </div>
        </section>
        <section className="mission-grid" id="quality-safety">
          <div>
            <span className="section-kicker">Our mission</span>
            <h2>
              Place India on the global map of top manufacturing countries.
            </h2>
          </div>
          <div>
            <span className="section-kicker">Our vision</span>
            <h2>Produce high-quality toys at an affordable price.</h2>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
