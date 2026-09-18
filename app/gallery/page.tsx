import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = { title: "Gallery | Kidz Auto" };

const images = [
  ["/legacy/images/about.jpg", "Kidz Auto ride-on collection"],
  ["/legacy/images/car1/01.jpg", "Ride-on car detail"],
  ["/legacy/images/jeep-1/01.jpg", "Ride-on jeep detail"],
  ["/legacy/images/bike-1/01.jpg", "Ride-on bike detail"],
  ["/legacy/images/scooter/red/01.jpg", "Ride-on scooter detail"],
  ["/legacy/images/jeep5/06.jpg", "Adventure-ready ride-on"],
];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Gallery"
          title="See the range."
          accent="Feel the joy."
        />
        <p className="page-lede">
          A closer look at the ride-on bikes, cars, jeeps and scooters made for
          little explorers.
        </p>
        <div className="gallery-grid">
          {images.map(([src, alt], index) => (
            <figure
              className={
                index === 0 ? "gallery-tile gallery-feature" : "gallery-tile"
              }
              key={src}
            >
              <img src={src} alt={alt} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
