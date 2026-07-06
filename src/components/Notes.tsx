import { siteData } from "../config/siteData";

type NoteProps = {
  compact?: boolean;
};

export function CraftDisclaimer({ compact = false }: NoteProps) {
  return (
    <aside className={`notice-panel ${compact ? "notice-panel--compact" : ""}`}>
      <strong>架空サイトについて</strong>
      <p>{siteData.craftDisclaimer}</p>
    </aside>
  );
}

export function MaterialSafetyNote({ compact = false }: NoteProps) {
  return (
    <aside className={`notice-panel safety-note ${compact ? "notice-panel--compact" : ""}`}>
      <strong>漆素材の安全メモ</strong>
      <p>{siteData.materialSafetyNote}</p>
    </aside>
  );
}
