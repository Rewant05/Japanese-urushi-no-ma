import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { siteData } from "../config/siteData";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "漆ノ間 | 日本の漆器と手仕事を伝える架空工芸室",
    template: "%s | 漆ノ間"
  },
  description: siteData.description,
  openGraph: {
    title: "漆ノ間 | 日本の漆器と手仕事を伝える架空工芸室",
    description: siteData.description,
    type: "website",
    locale: "ja_JP"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
