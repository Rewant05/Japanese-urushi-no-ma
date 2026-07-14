import type { Metadata } from "next";
import TechniquesPage from "../../views/TechniquesPage";

export const metadata: Metadata = {
  title: "漆の技法",
  description: "下地づくり、拭き漆、塗り重ね、蒔絵、螺鈿など、漆器の基本技法を丁寧に紹介します。"
};

export default function Page() {
  return <TechniquesPage />;
}
