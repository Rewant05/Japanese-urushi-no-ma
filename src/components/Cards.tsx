import type { CareGuide, Technique, Work } from "../config/siteData";

export function SectionIntro({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export function TechniqueCard({ technique, index }: { technique: Technique; index: number }) {
  return (
    <article className="technique-card">
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <h3>{technique.name}</h3>
      <p>{technique.summary}</p>
      <dl>
        <div>
          <dt>道具</dt>
          <dd>{technique.tools}</dd>
        </div>
        <div>
          <dt>目安</dt>
          <dd>{technique.time}</dd>
        </div>
        <div>
          <dt>質感</dt>
          <dd>{technique.texture}</dd>
        </div>
      </dl>
      <p className="card-note">{technique.note}</p>
      <p className="card-importance">{technique.importance}</p>
    </article>
  );
}

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="work-card">
      <div className={`work-visual work-visual--${work.tone}`} aria-hidden="true">
        <span />
      </div>
      <div className="work-card-body">
        <p className="work-category">{work.category}</p>
        <h3>{work.name}</h3>
        <p>{work.description}</p>
        <dl>
          <div>
            <dt>仕上げ</dt>
            <dd>{work.finish}</dd>
          </div>
          <div>
            <dt>素材</dt>
            <dd>{work.material}</dd>
          </div>
          <div>
            <dt>場面</dt>
            <dd>{work.usage}</dd>
          </div>
        </dl>
        <p className="care-line">{work.care}</p>
      </div>
    </article>
  );
}

export function CareGuideCard({ guide }: { guide: CareGuide }) {
  return (
    <article className="care-card">
      <h3>{guide.title}</h3>
      <p>{guide.explanation}</p>
      <div className="care-do-grid">
        <div>
          <strong>すること</strong>
          <p>{guide.do}</p>
        </div>
        <div>
          <strong>避けること</strong>
          <p>{guide.dont}</p>
        </div>
      </div>
      <p className="card-note">{guide.tip}</p>
    </article>
  );
}

export function FAQList({
  items
}: {
  items: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
