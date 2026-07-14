import { WorkCard } from "../components/Cards";
import { CraftImage } from "../components/CraftImage";
import { CraftDisclaimer } from "../components/Notes";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { siteData } from "../config/siteData";

export default function WorksPage() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Works</p>
        <h1>作品紹介</h1>
        <p>
          日常の汁椀から祝いの小皿まで、架空の漆器作品を用途、仕上げ、素材、手入れの視点から紹介します。
        </p>
      </div>

      <CraftDisclaimer />
      <CraftImage asset={siteData.visualAssets.works} className="page-wide-image" sizes="(max-width: 860px) 100vw, 86vw" />

      <div className="work-grid work-grid--page">
        {siteData.works.map((work, index) => (
          <RevealOnScroll delay={index * 50} key={work.name}>
            <WorkCard work={work} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
