import type { MouseEvent } from "react";
import type { PageProps } from "../App";
import { ContactForm } from "../components/ContactForm";
import { siteData } from "../config/siteData";

export default function ContactPage({ onNavigate }: PageProps) {
  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <section className="page-shell contact-page">
      <div className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>お問い合わせ</h1>
        <p>
          漆器、手入れ、取材、展示やコラボレーションについて、内容を選んでお問い合わせください。
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>連絡先</h2>
          <address>
            <strong>{siteData.studioName}</strong>
            <br />
            {siteData.address}
            <br />
            {siteData.businessHours}
            <br />
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          </address>
          <a href={siteData.instagram} rel="noreferrer" target="_blank">
            Instagram
          </a>
          <p>
            このフォームは架空サイト用のデモです。実在の工房への制作依頼、購入、修理相談は、各専門窓口の公式情報をご確認ください。
          </p>
          <a className="text-link" href="/privacy-policy" onClick={handleLinkClick("/privacy-policy")}>
            プライバシーポリシーを見る
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
