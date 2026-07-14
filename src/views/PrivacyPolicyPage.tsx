import { LegalPageLayout } from "../components/LegalPageLayout";
import { siteData } from "../config/siteData";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      description="お問い合わせ情報やCookieの利用、安全管理、免責事項について定めます。"
      eyebrow="Privacy Policy"
      sections={siteData.privacySections}
      title="プライバシーポリシー"
    />
  );
}
