import type { MouseEvent } from "react";
import type { PageProps } from "../App";
import { FAQList, SectionIntro, TechniqueCard, WorkCard } from "../components/Cards";
import { CraftImage } from "../components/CraftImage";
import { MaterialSafetyNote } from "../components/Notes";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { UrushiBrushHero } from "../components/UrushiBrushHero";
import { siteData } from "../config/siteData";

export default function HomePage({ onNavigate }: PageProps) {
  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <>
      <UrushiBrushHero onNavigate={onNavigate} />

      <section className="section-band featured-band">
        <div className="content-wrap">
          <SectionIntro
            eyebrow="Featured Work"
            title="艶を重ねた、日々のうつわ"
            body="漆器は飾るだけのものではなく、食卓で触れ、洗い、しまい、また使うことで表情を増していく道具です。"
          />
          <div className="image-led-grid">
            <CraftImage asset={siteData.visualAssets.works} className="featured-image" sizes="(max-width: 860px) 100vw, 52vw" />
            <div className="featured-work featured-work--stacked">
              <RevealOnScroll>
                <WorkCard work={siteData.works[0]} />
              </RevealOnScroll>
              <RevealOnScroll delay={90}>
                <WorkCard work={siteData.works[2]} />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band technique-preview">
        <div className="content-wrap">
          <SectionIntro
            eyebrow="Technique"
            title="見えない工程が、静かな艶を支える"
            body="下地、乾燥、研ぎ、磨き。完成した面の奥には、急がず重ねた時間があります。"
          />
          <div className="technique-timeline">
            {siteData.techniques.slice(0, 4).map((technique, index) => (
              <RevealOnScroll delay={index * 80} key={technique.name}>
                <TechniqueCard index={index} technique={technique} />
              </RevealOnScroll>
            ))}
          </div>
          <a className="text-link" href="/techniques" onClick={handleLinkClick("/techniques")}>
            すべての技法を見る
          </a>
        </div>
      </section>

      <section className="section-band gloss-section">
        <div className="content-wrap gloss-grid">
          <div>
            <p className="eyebrow">Gloss & Layers</p>
            <h2>黒の中に、朱と金の気配を忍ばせる</h2>
          </div>
          <div className="gloss-copy">
            <p>
              漆の艶は、単に光る表面ではありません。薄い層が光を受け止め、木地の温度、湿度の記憶、研ぎの跡を奥へ沈めます。
            </p>
            <p>
              漆ノ間では、強い装飾よりも、角度を変えたときにふっと現れる赤味や金粉の気配を大切にしています。
            </p>
          </div>
          <div className="lacquer-sample" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="content-wrap">
          <SectionIntro
            eyebrow="Works"
            title="作品紹介"
            body="椀、皿、盆、小箱。用途ごとに仕上げと扱い方を添えた、架空の漆器作品です。"
          />
          <div className="work-grid">
            {siteData.works.slice(0, 6).map((work, index) => (
              <RevealOnScroll delay={index * 55} key={work.name}>
                <WorkCard work={work} />
              </RevealOnScroll>
            ))}
          </div>
          <a className="text-link" href="/works" onClick={handleLinkClick("/works")}>
            作品一覧へ
          </a>
        </div>
      </section>

      <section className="section-band care-preview">
        <div className="content-wrap care-preview-grid">
          <SectionIntro
            eyebrow="Care Guide"
            title="漆器は、扱い方を知るほど身近になる"
            body="洗い方、乾かし方、保管の小さな習慣が、器の艶を長く支えます。"
          />
          <div className="care-mini-list">
            {siteData.careGuides.slice(0, 3).map((guide) => (
              <article key={guide.title}>
                <h3>{guide.title}</h3>
                <p>{guide.explanation}</p>
              </article>
            ))}
          </div>
          <MaterialSafetyNote compact />
          <CraftImage asset={siteData.visualAssets.care} sizes="(max-width: 860px) 100vw, 48vw" />
          <a className="text-link" href="/care-guide" onClick={handleLinkClick("/care-guide")}>
            お手入れを詳しく読む
          </a>
        </div>
      </section>

      <section className="section-band story-preview">
        <div className="content-wrap story-preview-grid">
          <div>
            <p className="eyebrow">Workshop Story</p>
            <h2>木、漆、湿度、時間を読む工房</h2>
          </div>
          <p>{siteData.storySections[0].body}</p>
          <CraftImage asset={siteData.visualAssets.workshop} sizes="(max-width: 860px) 100vw, 32vw" />
          <a className="primary-action" href="/workshop-story" onClick={handleLinkClick("/workshop-story")}>
            工房の物語へ
          </a>
        </div>
      </section>

      <section className="section-band faq-section">
        <div className="content-wrap">
          <SectionIntro
            eyebrow="FAQ"
            title="よくある質問"
            body="漆器の扱い方や、この架空サイトの位置づけについてまとめました。"
          />
          <FAQList items={siteData.faqs} />
        </div>
      </section>

      <section className="contact-cta">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>漆器のことを、静かに相談する</h2>
          <p>作品、手入れ、取材、展示の相談はお問い合わせページからご連絡ください。</p>
        </div>
        <a className="label-cta label-cta--large" href="/contact" onClick={handleLinkClick("/contact")}>
          相談する
        </a>
      </section>
    </>
  );
}
