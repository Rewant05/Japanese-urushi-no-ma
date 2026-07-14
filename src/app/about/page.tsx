import type { Metadata } from "next";
import AboutPage from "../../views/AboutPage";

export const metadata: Metadata = {
  title: "私たちについて",
  description: "漆ノ間の目的、架空工芸室としての姿勢、漆器教育と暮らしへの接続を紹介します。"
};

export default function Page() {
  return <AboutPage />;
}
