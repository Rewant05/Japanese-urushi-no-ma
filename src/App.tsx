import { useEffect, useMemo, useState } from "react";
import AboutPage from "./pages/AboutPage";
import CareGuidePage from "./pages/CareGuidePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TechniquesPage from "./pages/TechniquesPage";
import TermsPage from "./pages/TermsPage";
import WorksPage from "./pages/WorksPage";
import WorkshopStoryPage from "./pages/WorkshopStoryPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { siteData } from "./config/siteData";

type RouteDefinition = {
  path: string;
  title: string;
  description: string;
  Component: (props: PageProps) => JSX.Element;
};

export type PageProps = {
  onNavigate: (href: string) => void;
};

const routes: RouteDefinition[] = [
  {
    path: "/",
    title: "漆ノ間 | 日本の漆器と手仕事を伝える架空工芸室",
    description: siteData.description,
    Component: HomePage
  },
  {
    path: "/about",
    title: "私たちについて | 漆ノ間",
    description: "漆ノ間の目的、架空工芸室としての姿勢、漆器教育と暮らしへの接続を紹介します。",
    Component: AboutPage
  },
  {
    path: "/techniques",
    title: "漆の技法 | 漆ノ間",
    description: "下地づくり、拭き漆、塗り重ね、蒔絵、螺鈿など、漆器の基本技法を丁寧に紹介します。",
    Component: TechniquesPage
  },
  {
    path: "/works",
    title: "作品紹介 | 漆ノ間",
    description: "椀、平皿、小箱、盆、箸置きなど、架空の漆器作品を用途や手入れとともに紹介します。",
    Component: WorksPage
  },
  {
    path: "/care-guide",
    title: "漆器のお手入れ | 漆ノ間",
    description: "洗い方、乾かし方、保管、電子レンジや食洗機を避ける理由など、漆器の扱い方をまとめました。",
    Component: CareGuidePage
  },
  {
    path: "/workshop-story",
    title: "工房の物語 | 漆ノ間",
    description: "木、漆、湿度、時間をめぐる架空工房の考え方と、現代の住まいに合う漆器の物語。",
    Component: WorkshopStoryPage
  },
  {
    path: "/contact",
    title: "お問い合わせ | 漆ノ間",
    description: "漆器、手入れ、取材、展示やコラボレーションに関するお問い合わせページです。",
    Component: ContactPage
  },
  {
    path: "/privacy-policy",
    title: "プライバシーポリシー | 漆ノ間",
    description: "漆ノ間の個人情報の取得、利用目的、Cookie、アクセス解析、安全管理についての方針です。",
    Component: PrivacyPolicyPage
  },
  {
    path: "/terms",
    title: "利用規約 | 漆ノ間",
    description: "漆ノ間の掲載情報、工芸情報、作品紹介、禁止事項、免責事項に関する利用規約です。",
    Component: TermsPage
  }
];

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path || "/";
};

const ensureMetaTag = (selector: string, attribute: "name" | "property", key: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  return element;
};

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const route = useMemo(
    () => routes.find((item) => item.path === path) ?? routes[0],
    [path]
  );

  useEffect(() => {
    document.title = route.title;
    ensureMetaTag('meta[name="description"]', "name", "description").content = route.description;
    ensureMetaTag('meta[property="og:title"]', "property", "og:title").content = route.title;
    ensureMetaTag('meta[property="og:description"]', "property", "og:description").content =
      route.description;
  }, [route]);

  const navigate = (href: string) => {
    const nextPath = normalizePath(href);

    if (nextPath !== path) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = route.Component;

  return (
    <>
      <Header currentPath={path} onNavigate={navigate} />
      <main id="main-content">
        <PageComponent onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}
