import Link from "next/link";
import { siteData } from "../config/siteData";
import { CraftDisclaimer } from "./Notes";

export function Footer() {
  const footerLinks = [...siteData.navLinks, ...siteData.footerLinks].filter(
    (link, index, links) => links.findIndex((item) => item.href === link.href) === index
  );

  return (
    <footer className="site-footer">
      <div className="footer-lacquer-line" aria-hidden="true" />
      <div className="footer-grid">
        <section>
          <Link className="footer-brand" href="/">
            {siteData.name}
          </Link>
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
            {footerLinks.map((link) => (
              <Link href={link.href} key={`${link.href}-${link.label}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <CraftDisclaimer compact />
      <p className="copyright">© {new Date().getFullYear()} {siteData.name}. 架空サイトです。</p>
    </footer>
  );
}
