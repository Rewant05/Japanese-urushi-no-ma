import type { MouseEvent } from "react";
import type { PageProps } from "../App";
import { CraftImage } from "../components/CraftImage";
import { MaterialSafetyNote } from "../components/Notes";
import { siteData } from "../config/siteData";

export default function AboutPage({ onNavigate }: PageProps) {
  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">About</p>
        <h1>私たちについて</h1>
        <p>{siteData.name}は、漆器の美しさと扱い方を日本語で丁寧に伝える架空の工芸室です。</p>
      </div>

      <CraftImage asset={siteData.visualAssets.workshop} className="page-wide-image" sizes="(max-width: 860px) 100vw, 86vw" />

      <div className="editorial-grid">
        <article>
          <h2>ウェブサイトの目的</h2>
          <p>
            漆の艶、木地の温度、手仕事の反復を、初めて漆器に触れる人にも読みやすい形で紹介します。販売よりも理解を重視し、技法、作品、手入れの関係を静かにつなぎます。
          </p>
        </article>
        <article>
          <h2>架空工芸室としての姿勢</h2>
          <p>
            {siteData.studioName}は実在する工房ではありません。実在の職人名や工房ロゴを用いず、伝統工芸への敬意を持ちながら、教育的な編集サイトとして構成しています。
          </p>
        </article>
        <article>
          <h2>漆器教育への入口</h2>
          <p>
            下地づくり、塗り重ね、研ぎ出し、蒔絵、螺鈿などの工程を、専門用語だけで閉じず、道具や時間、質感と一緒に紹介します。
          </p>
        </article>
        <article>
          <h2>現代の暮らしとの接続</h2>
          <p>
            漆器は特別な棚にしまうだけのものではなく、食卓や茶の時間に自然に置ける道具です。扱い方を知ることで、日常に取り入れやすくなります。
          </p>
        </article>
        <article>
          <h2>手入れへの意識</h2>
          <p>
            長く使うためには、強い熱、乾燥、直射日光、硬い道具を避けることが大切です。難しく構えすぎず、小さな習慣として続けられる手入れを伝えます。
          </p>
        </article>
        <article>
          <h2>販売機能について</h2>
          <p>
            当サイトには、オンライン購入、予約、決済、注文確定の機能はありません。掲載作品は架空の紹介であり、実際の購入や修理は専門店や工房の公式情報をご確認ください。
          </p>
        </article>
      </div>

      <MaterialSafetyNote />

      <div className="quiet-cta">
        <h2>技法から読み始める</h2>
        <p>漆器の見え方が変わる、八つの基本工程をまとめています。</p>
        <a className="primary-action" href="/techniques" onClick={handleLinkClick("/techniques")}>
          漆の技法へ
        </a>
      </div>
    </section>
  );
}
