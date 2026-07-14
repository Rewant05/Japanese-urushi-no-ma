import type { Metadata } from "next";
import WorksPage from "../../views/WorksPage";

export const metadata: Metadata = {
  title: "作品紹介",
  description: "椀、平皿、小箱、盆、箸置きなど、架空の漆器作品を用途や手入れとともに紹介します。"
};

export default function Page() {
  return <WorksPage />;
}
