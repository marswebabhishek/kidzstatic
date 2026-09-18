import Image from "next/image";
import Link from "next/link";

function Brand() {
  return (
    <span className="brand-logo">
      <Image
        src="/legacy/images/logo.png"
        alt="Kidz Auto"
        width={126}
        height={72}
      />
    </span>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <span>India&apos;s homegrown ride-on toy makers</span>
        <span>Dealer enquiries: +91 98865 04665</span>
      </div>
      <header className="site-header site-header-solid">
        <Link className="brand" href="/" aria-label="Kidz Auto Bharat home">
          <Brand />
          <span className="brand-wordmark">
            Kidz <b>Auto</b>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <span className="nav-dropdown">
            <Link href="/products" aria-haspopup="true">
              Products <span className="nav-chevron">⌄</span>
            </Link>
            <span className="product-menu">
              <Link href="/products/cars">
                <span
                  className="menu-image"
                  style={{
                    backgroundImage: "url('/legacy/images/car1/01.jpg')",
                  }}
                />{" "}
                <span>
                  <b>Cars</b>
                  <small>First-drive favourites</small>
                </span>
              </Link>
              <Link href="/products/jeeps">
                <span
                  className="menu-image"
                  style={{
                    backgroundImage: "url('/legacy/images/jeep-1/01.jpg')",
                  }}
                />{" "}
                <span>
                  <b>Jeeps</b>
                  <small>Built for explorers</small>
                </span>
              </Link>
              <Link href="/products/bikes">
                <span
                  className="menu-image"
                  style={{
                    backgroundImage: "url('/legacy/images/bike-1/01.jpg')",
                  }}
                />{" "}
                <span>
                  <b>Bikes</b>
                  <small>Two-wheel adventures</small>
                </span>
              </Link>
              <Link href="/products/scooters">
                <span
                  className="menu-image"
                  style={{
                    backgroundImage: "url('/legacy/images/scooter/red/01.jpg')",
                  }}
                />{" "}
                <span>
                  <b>Scooters</b>
                  <small>Easy, exciting rides</small>
                </span>
              </Link>
            </span>
          </span>
          <Link href="/manufacturing">Manufacturing</Link>
          <Link href="/quality-safety">Quality &amp; Safety</Link>
          <Link href="/oem-odm">OEM / ODM</Link>
          <Link href="/gallery">Gallery</Link>
          <Link className="nav-contact" href="/contact">
            Enquire Now{" "}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </nav>
      </header>
    </>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {index < items.length - 1 && <b>/</b>}
        </span>
      ))}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand-row">
          <div className="footer-brand-copy">
            <Link className="brand" href="/" aria-label="Kidz Auto home">
              <Brand />
              <span className="brand-wordmark">
                Kidz <b>Auto</b>
              </span>
            </Link>
            <p>
              Manufacturer of battery-operated bikes, cars, jeeps and scooters
              for little explorers.
            </p>
          </div>
          <div className="footer-badges">
            <img src="/legacy/images/made-india.png" alt="Made in India" />
            <img src="/legacy/images/mii.png" alt="Make in India" />
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Quick links</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">All Products</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
          <div>
            <h3>Support</h3>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/quality-safety">Quality &amp; Safety</Link>
            <Link href="/oem-odm">OEM / ODM</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="footer-contact-column">
            <h3>Contact</h3>
            <p>
              Bidadi 2nd phase, Ramanagara district,
              <br />
              Bangalore - 562109, Karnataka
            </p>
            <a href="tel:+919886504665">+91 98865 04665</a>
            <a href="mailto:info@kidzautobharat.in">info@kidzautobharat.in</a>
          </div>
        </div>

        <div className="footer-map-card">
          <div className="footer-map-heading">
            <div>
              <span>Visit us</span>
              <h3>Kidz Auto on Google Maps</h3>
            </div>
            <a
              className="footer-map-link"
              href="https://www.google.com/maps/search/?api=1&query=Kidz%20Auto%20Bharat%20LLP"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <iframe
            title="Kidz Auto on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7746678646954!2d77.42128269999999!3d12.7931333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4700257d51db%3A0x3ae6313269e20e01!2sKidz%20Auto%20Bharat%20LLP!5e0!3m2!1sen!2sin!4v1789666134944!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="footer-bottom">
          <span>© 2026 Kidz Auto Bharat. All rights reserved.</span>
          <div>
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms of Use</Link>
            <Link href="/contact">WhatsApp</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <section className="page-intro">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: eyebrow }]} />
      <div className="section-kicker">{eyebrow}</div>
      <h1>
        {title}
        <br />
        <em>{accent}</em>
      </h1>
    </section>
  );
}
