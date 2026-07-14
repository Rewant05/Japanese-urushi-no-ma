import type { Metadata } from "next";
import TermsPage from "../../views/TermsPage";

export const metadata: Metadata = {
  title: "利用規約",
  description: "漆ノ間の掲載情報、工芸情報、作品紹介、禁止事項、免責事項に関する利用規約です。"
};

export default function Page() {
  return <TermsPage />;
}
