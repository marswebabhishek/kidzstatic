import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = { title: "Contact Us | Kidz Auto" };

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page contact-page">
        <PageIntro
          eyebrow="Let’s get rolling"
          title="Bring home"
          accent="the good stuff."
        />
        <div className="contact-layout" id="oem">
          <div>
            <p className="large-copy">
              Have a question about a model, a dealership enquiry or just want
              to say hello? We’d love to hear from you.
            </p>
            <a
              className="button button-dark"
              href="mailto:info@kidzautobharat.in"
            >
              Email the team <span className="arrow">↗</span>
            </a>
          </div>
          <div className="contact-details contact-details-page">
            <div>
              <span>Write to us</span>
              <a href="mailto:info@kidzautobharat.in">info@kidzautobharat.in</a>
            </div>
            <div>
              <span>Call us</span>
              <a href="tel:+919886504665">+91 98865 04665</a>
            </div>
            <div>
              <span>Find us</span>
              <p>
                Bidadi 2nd phase, Ramanagara dist.
                <br />
                Bangalore-562109, Karnataka
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
