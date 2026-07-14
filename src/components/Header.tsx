"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "../config/siteData";

export function Header() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <div className="header-inner">
        <Link
          aria-label={`${siteData.name} ホームへ`}
          className="brand-seal"
          href="/"
        >
          <span>{siteData.name}</span>
        </Link>

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
            <Link
              aria-current={currentPath === link.href ? "page" : undefined}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link className="label-cta" href="/contact">
            相談する
          </Link>
        </nav>
      </div>
    </header>
  );
}
