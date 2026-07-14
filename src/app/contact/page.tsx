import type { Metadata } from "next";
import ContactPage from "../../views/ContactPage";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "漆器、手入れ、取材、展示やコラボレーションに関するお問い合わせページです。"
};

export default function Page() {
  return <ContactPage />;
}
