import type { ReactNode } from "react";
import type { TextSection } from "../config/siteData";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: TextSection[];
  children?: ReactNode;
};

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  sections,
  children
}: LegalPageLayoutProps) {
  return (
    <section className="page-shell legal-page">
      <div className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="legal-list">
        {sections.map((section, index) => (
          <article className="legal-section" key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="legal-copy">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </article>
        ))}
      </div>
      {children}
    </section>
  );
}
