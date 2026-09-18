import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = { title: "Quality & Safety | Kidz Auto" };

const standards = [
  [
    "01",
    "Stable rides",
    "Balanced frames and supportive wheels help little drivers stay confident.",
  ],
  [
    "02",
    "Quality checked",
    "Each model is reviewed for fit, finish and dependable everyday performance.",
  ],
  [
    "03",
    "Child-friendly controls",
    "Simple controls make it easier for parents and children to enjoy every ride.",
  ],
  [
    "04",
    "Made for growing families",
    "Our range covers different ages, spaces and play styles.",
  ],
];

export default function QualitySafetyPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Quality & Safety"
          title="Confidence in"
          accent="every ride."
        />
        <p className="page-lede">
          Premium-looking ride-ons should also feel considered, stable and easy
          to live with. That is the standard behind every Kidz Auto model.
        </p>
        <section className="detail-section">
          {standards.map(([number, title, copy]) => (
            <div className="detail-row" key={number}>
              <span className="detail-number">{number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
