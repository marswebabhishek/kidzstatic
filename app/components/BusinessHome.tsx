import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { HeroCarousel } from "./HeroCarousel";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { categories, homepageGallery, products } from "../site-data";

const reasons = [
  [
    "01",
    "In-house Manufacturing",
    "From design to assembly, we keep the core process close.",
  ],
  [
    "02",
    "Quality Control",
    "Consistent checks help every ride feel dependable.",
  ],
  [
    "03",
    "OEM / Private Label",
    "Build a range that carries your brand and your point of view.",
  ],
  [
    "04",
    "Custom Designs",
    "Bring a product idea to life with an experienced toy team.",
  ],
  [
    "05",
    "Pan India Supply",
    "A practical partner for retailers and distributors across India.",
  ],
  [
    "06",
    "Dealer Support",
    "Clear product guidance, catalogue support and responsive sales.",
  ],
];

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

export function BusinessHome() {
  return (
    <main>
      <SiteHeader />

      <section className="business-hero">
        <HeroCarousel />

        {/* <div className="business-hero-shade" /> */}

        {/* <div className="business-hero-copy">
          <p className="eyebrow">Premium ride-on toys</p>

          <h1>
            Built for little
            <br />
            <em>adventures.</em>
          </h1>

          <p>
            Cars <b>•</b> Jeeps <b>•</b> Bikes <b>•</b> Scooters
          </p>

          <span>
            Designed in India <b>|</b> Manufactured in India
          </span>

          <Link className="button button-light" href="/products">
            Explore Products <Arrow />
          </Link>
        </div> */}
      </section>

      <section className="business-range section-pad" id="products">
        <div className="section-kicker">Our product range</div>

        <h2>
          Find the right <em>ride.</em>
        </h2>

        <div className="business-range-grid">
          {categories.map((category) => (
            <Link
              href={`/products/${category.slug}`}
              className="business-range-card"
              key={category.slug}
            >
              <img src={category.image} alt={category.name} />

              <div>
                <h3>{category.name.replace("Kidz Ride on ", "")}</h3>

                <span>
                  View range <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="why-business section-pad" id="why-us">
        <div className="section-kicker">Why choose us</div>

        <h2>
          A partner built for <em>the long run.</em>
        </h2>

        <div className="why-business-grid">
          {reasons.map(([number, title, copy]) => (
            <article key={title}>
              <b>{number}</b>

              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="business-featured section-pad">
        <div className="business-section-heading">
          <div>
            <div className="section-kicker">Featured products</div>

            <h2>
              Models that <em>move.</em>
            </h2>
          </div>

          <Link className="text-link" href="/products">
            View all products <Arrow />
          </Link>
        </div>

        <div className="business-featured-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </section>

      <section className="manufacturing-band section-pad" id="manufacturing">
        <div className="manufacturing-image">
          <img
            src="/legacy/images/about.jpg"
            alt="Kidz Auto manufacturing and ride-on vehicles"
          />
        </div>

        <div>
          <div className="section-kicker">Made in India</div>

          <h2>
            From design <em>to delivery.</em>
          </h2>

          <p>
            From design → production → quality → assembly → packaging. Kidz Auto
            brings the full ride-on journey together from our manufacturing base
            near Bengaluru.
          </p>

          <Link className="button button-dark" href="/manufacturing">
            Explore our manufacturing <Arrow />
          </Link>
        </div>
      </section>

      <section className="quality-band section-pad" id="quality-safety">
        <div>
          <div className="section-kicker">Quality &amp; safety</div>

          <h2>
            Confidence in <em>every ride.</em>
          </h2>

          <p>
            ISO-minded processes, careful testing, stable construction and
            child-friendly controls are part of how we develop each model.
          </p>

          <Link className="text-link" href="/quality-safety">
            Explore quality &amp; safety <Arrow />
          </Link>
        </div>

        <div className="quality-points">
          <span>ISI-ready quality checks</span>
          <span>Stable support systems</span>
          <span>Comfortable everyday play</span>
          <span>Responsible product guidance</span>
        </div>
      </section>

      <section className="oem-band section-pad" id="oem-odm">
        <div className="section-kicker">OEM / ODM partnerships</div>

        <h2>
          Looking for a <em>manufacturing partner?</em>
        </h2>

        <p>
          Work with Kidz Auto on private-label ranges, custom designs and
          market-ready ride-on toys.
        </p>

        <Link className="button button-dark" href="/oem-odm">
          Become a partner <Arrow />
        </Link>
      </section>

      <section className="factory-gallery section-pad" id="gallery">
        <div className="business-section-heading">
          <div>
            <div className="section-kicker">Factory gallery</div>

            <h2>
              Made to be <em>seen.</em>
            </h2>
          </div>

          <Link className="text-link" href="/gallery">
            View gallery <Arrow />
          </Link>
        </div>

        <div className="factory-gallery-grid">
          {homepageGallery.slice(0, 4).map((item, index) => (
            <Link
              className={
                index === 0
                  ? "factory-gallery-item gallery-tall"
                  : "factory-gallery-item"
              }
              href="/gallery"
              key={item.image}
            >
              <img src={item.image} alt={item.alt} />
            </Link>
          ))}
        </div>
      </section>

      <section className="business-contact section-pad" id="contact">
        <div>
          <div className="section-kicker">Contact our team</div>

          <h2>
            Let&apos;s build <em>what&apos;s next.</em>
          </h2>

          <p>
            Request a catalogue, ask about dealer support or start an OEM / ODM
            conversation.
          </p>
        </div>

        <form
          className="enquiry-form"
          action="mailto:info@kidzautobharat.in"
          method="post"
          encType="text/plain"
        >
          <input aria-label="Name" name="name" placeholder="Name" required />

          <input aria-label="Company" name="company" placeholder="Company" />

          <input aria-label="Phone" name="phone" placeholder="Phone" required />

          <input
            aria-label="Email"
            name="email"
            placeholder="Email"
            type="email"
            required
          />

          <textarea
            aria-label="Message"
            name="message"
            placeholder="Message"
            rows={4}
          />

          <button className="button button-dark" type="submit">
            Send enquiry <Arrow />
          </button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
