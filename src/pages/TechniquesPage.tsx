import type { PageProps } from "../App";
import { TechniqueCard } from "../components/Cards";
import { MaterialSafetyNote } from "../components/Notes";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { siteData } from "../config/siteData";

export default function TechniquesPage(_props: PageProps) {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Techniques</p>
        <h1>漆の技法</h1>
        <p>
          見える艶の前には、見えない準備があります。道具、時間、質感、初心者への注意を添えて、漆の工程を紹介します。
        </p>
      </div>

      <div className="technique-page-grid">
        {siteData.techniques.map((technique, index) => (
          <RevealOnScroll delay={index * 55} key={technique.name}>
            <TechniqueCard index={index} technique={technique} />
          </RevealOnScroll>
        ))}
      </div>

      <MaterialSafetyNote />
    </section>
  );
}
