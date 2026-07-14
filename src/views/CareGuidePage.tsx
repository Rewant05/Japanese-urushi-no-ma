import { CareGuideCard } from "../components/Cards";
import { CraftImage } from "../components/CraftImage";
import { CraftDisclaimer, MaterialSafetyNote } from "../components/Notes";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { siteData } from "../config/siteData";

export default function CareGuidePage() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Care Guide</p>
        <h1>漆器のお手入れ</h1>
        <p>
          漆器は少しの注意で、日々の器として長く付き合えます。洗う、乾かす、しまう、使い続ける習慣をまとめました。
        </p>
      </div>

      <CraftImage asset={siteData.visualAssets.care} className="page-wide-image" sizes="(max-width: 860px) 100vw, 86vw" />

      <div className="care-guide-grid">
        {siteData.careGuides.map((guide, index) => (
          <RevealOnScroll delay={index * 50} key={guide.title}>
            <CareGuideCard guide={guide} />
          </RevealOnScroll>
        ))}
      </div>

      <MaterialSafetyNote />
      <CraftDisclaimer />
    </section>
  );
}
