import type { MouseEvent } from "react";
import { siteData } from "../config/siteData";
import { CraftDisclaimer } from "./Notes";

type FooterProps = {
  onNavigate: (href: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="site-footer">
      <div className="footer-lacquer-line" aria-hidden="true" />
      <div className="footer-grid">
        <section>
          <a className="footer-brand" href="/" onClick={handleLinkClick("/")}>
            {siteData.name}
          </a>
          <p>{siteData.tagline}</p>
          <p className="footer-small">{siteData.description}</p>
        </section>
        <section>
          <h2>工芸室</h2>
          <address>
            {siteData.studioName}
            <br />
            {siteData.address}
            <br />
            {siteData.businessHours}
            <br />
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          </address>
        </section>
        <section>
          <h2>ページ</h2>
          <div className="footer-links">
            {[...siteData.navLinks, ...siteData.footerLinks].map((link) => (
              <a href={link.href} key={`${link.href}-${link.label}`} onClick={handleLinkClick(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
      <CraftDisclaimer compact />
      <p className="copyright">© {new Date().getFullYear()} {siteData.name}. 架空サイトです。</p>
    </footer>
  );
}
