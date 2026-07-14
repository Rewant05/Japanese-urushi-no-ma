import { CraftImage } from "../components/CraftImage";
import { CraftDisclaimer, MaterialSafetyNote } from "../components/Notes";
import { siteData } from "../config/siteData";

export default function WorkshopStoryPage() {
  return (
    <section className="page-shell story-page">
      <div className="page-hero">
        <p className="eyebrow">Workshop Story</p>
        <h1>工房の物語</h1>
        <p>
          漆ノ間が大切にしているのは、速さではなく、木と漆と湿度が落ち着いて出会う時間です。
        </p>
      </div>

      <CraftImage asset={siteData.visualAssets.workshop} className="page-wide-image" sizes="(max-width: 860px) 100vw, 86vw" />

      <div className="story-list">
        {siteData.storySections.map((section, index) => (
          <article className="story-section" key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </article>
        ))}
      </div>

      <MaterialSafetyNote />
      <CraftDisclaimer />
    </section>
  );
}
