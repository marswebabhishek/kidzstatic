import Link from "next/link";
import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = { title: "OEM / ODM | Kidz Auto" };

export default function OemOdmPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page contact-page">
        <PageIntro
          eyebrow="OEM / ODM"
          title="Build the next"
          accent="big thing."
        />
        <div className="contact-layout">
          <div>
            <p className="large-copy">
              Looking for a reliable ride-on toy manufacturing partner?
            </p>
            <p className="body-copy">
              Work with Kidz Auto on product concepts, private-label ranges and
              market-ready electric ride-ons. Our team can support the journey
              from an early idea to a finished collection.
            </p>
            <Link className="button button-dark" href="/contact">
              Start a conversation <span className="arrow">↗</span>
            </Link>
          </div>
          <div className="contact-details contact-details-page">
            <div>
              <span>Partnerships</span>
              <p>Private label and custom product programmes</p>
            </div>
            <div>
              <span>Best for</span>
              <p>Retailers, distributors and growing toy brands</p>
            </div>
            <div>
              <span>Write to us</span>
              <a href="mailto:info@kidzautobharat.in">info@kidzautobharat.in</a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
