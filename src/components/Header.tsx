import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { siteData } from "../config/siteData";

type HeaderProps = {
  currentPath: string;
  onNavigate: (href: string) => void;
};

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <div className="header-inner">
        <a
          aria-label={`${siteData.name} ホームへ`}
          className="brand-seal"
          href="/"
          onClick={handleLinkClick("/")}
        >
          <span>{siteData.name}</span>
        </a>

        <button
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-label="メニューを開閉"
          className="menu-toggle"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          aria-label="メインナビゲーション"
          className={`site-nav ${isOpen ? "is-open" : ""}`}
          id="site-navigation"
        >
          {siteData.navLinks.map((link) => (
            <a
              aria-current={currentPath === link.href ? "page" : undefined}
              href={link.href}
              key={link.href}
              onClick={handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a className="label-cta" href="/contact" onClick={handleLinkClick("/contact")}>
            相談する
          </a>
        </nav>
      </div>
    </header>
  );
}
