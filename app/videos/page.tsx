const videos = ["Q7uv6YykAu4", "6KO2wA0mLsQ", "OgSNqjiXpc4", "mWSA8yYlfdc"];
import { PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = { title: "Videos | Kidz Auto" };

export default function VideosPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageIntro
          eyebrow="Watch them move"
          title="See the joy"
          accent="in motion."
        />
        <div className="video-page-grid">
          {videos.map((id, index) => (
            <div className="video-frame" key={id}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Kidz Auto video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
