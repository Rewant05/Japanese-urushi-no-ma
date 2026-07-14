import type { Metadata } from "next";
import PrivacyPolicyPage from "../../views/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "漆ノ間の個人情報の取得、利用目的、Cookie、アクセス解析、安全管理についての方針です。"
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
