import type { Metadata } from "next";
import WorkshopStoryPage from "../../views/WorkshopStoryPage";

export const metadata: Metadata = {
  title: "工房の物語",
  description: "木、漆、湿度、時間をめぐる架空工房の考え方と、現代の住まいに合う漆器の物語。"
};

export default function Page() {
  return <WorkshopStoryPage />;
}
