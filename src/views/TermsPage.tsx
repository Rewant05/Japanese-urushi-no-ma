import { LegalPageLayout } from "../components/LegalPageLayout";
import { CraftDisclaimer, MaterialSafetyNote } from "../components/Notes";
import { siteData } from "../config/siteData";

export default function TermsPage() {
  return (
    <LegalPageLayout
      description="掲載情報、作品紹介、購入機能の不存在、禁止事項、知的財産権などについて定めます。"
      eyebrow="Terms"
      sections={siteData.termsSections}
      title="利用規約"
    >
      <MaterialSafetyNote />
      <CraftDisclaimer />
    </LegalPageLayout>
  );
}
