import type { Metadata } from "next";
import CareGuidePage from "../../views/CareGuidePage";

export const metadata: Metadata = {
  title: "漆器のお手入れ",
  description: "洗い方、乾かし方、保管、電子レンジや食洗機を避ける理由など、漆器の扱い方をまとめました。"
};

export default function Page() {
  return <CareGuidePage />;
}
