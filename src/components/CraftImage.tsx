import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import type { VisualAsset } from "../config/siteData";

type CraftImageProps = {
  asset: VisualAsset;
  className?: string;
  eager?: boolean;
  sizes?: string;
};

export function CraftImage({
  asset,
  className = "",
  eager = false,
  sizes = "(max-width: 860px) 100vw, 50vw"
}: CraftImageProps) {
  const frameRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef(0);

  useEffect(() => {
    return () => window.cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const frame = frameRef.current;

    if (!frame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    window.cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = window.requestAnimationFrame(() => {
      frame?.style.setProperty("--mx", `${x * 100}%`);
      frame?.style.setProperty("--my", `${y * 100}%`);
      frame?.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
      frame?.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
    });
  };

  const handlePointerLeave = () => {
    const frame = frameRef.current;

    window.cancelAnimationFrame(animationFrameRef.current);
    frame?.style.setProperty("--mx", "50%");
    frame?.style.setProperty("--my", "35%");
    frame?.style.setProperty("--tilt-x", "0deg");
    frame?.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <figure
      className={`craft-image-frame ${className}`}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={frameRef}
    >
      <picture>
        <source sizes={sizes} srcSet={asset.srcSet} type="image/jpeg" />
        <img
          alt={asset.alt}
          decoding="async"
          height={asset.height}
          loading={eager ? "eager" : "lazy"}
          src={asset.src}
          width={asset.width}
        />
      </picture>
      <figcaption>{asset.caption}</figcaption>
    </figure>
  );
}
