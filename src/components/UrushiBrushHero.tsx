"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "../config/siteData";

export function UrushiBrushHero() {
  const heroRef = useRef<HTMLElement>(null);
  const strokeRef = useRef<SVGPathElement>(null);
  const spreadRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !strokeRef.current || !spreadRef.current) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.set(strokeRef.current, { opacity: reduceMotion ? 0.95 : 0.64 });

      if (reduceMotion) {
        gsap.set(spreadRef.current, { scaleX: 1, opacity: 1 });
        gsap.set(".maki-dust, .hero-shine, .hero-process-step, .hero-detail-panel", { opacity: 1 });
        return;
      }

      gsap.set(spreadRef.current, { scaleX: 0.18, opacity: 0.76, transformOrigin: "left center" });
      gsap.set(".maki-dust", { opacity: 0 });
      gsap.set(".hero-shine", { opacity: 0.18, xPercent: -18 });
      gsap.set(".hero-process-step", { opacity: 0.5, y: 6 });
      gsap.set(".hero-detail-panel", { opacity: 0.72, y: 10 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          fastScrollEnd: true,
          invalidateOnRefresh: true
        }
      });

      timeline
        .fromTo(
          headlineRef.current,
          { opacity: 0.78, y: 12 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" },
          0
        )
        .to(
          spreadRef.current,
          { scaleX: 1, opacity: 1, duration: 0.46, ease: "none" },
          0.08
        )
        .to(strokeRef.current, { opacity: 0.96, duration: 0.28, ease: "none" }, 0.1)
        .to(
          ".hero-shine",
          { opacity: 0.64, xPercent: 30, duration: 0.26, ease: "none" },
          0.26
        )
        .to(
          ".maki-dust",
          { opacity: 0.9, duration: 0.18, ease: "none" },
          0.52
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0.62, y: 12 },
          { opacity: 1, y: 0, duration: 0.18, ease: "none" },
          0.68
        )
        .to(
          ".hero-process-step",
          { opacity: 1, y: 0, duration: 0.16, ease: "none" },
          0.7
        )
        .to(
          ".hero-detail-panel",
          { opacity: 1, y: 0, duration: 0.16, ease: "none" },
          0.72
        );

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="urushi-hero" ref={heroRef}>
      <div className="hero-workbench" aria-hidden="true">
        <div className="lacquer-spread" ref={spreadRef} />
        <div className="hero-shine hero-shine--one" />
        <div className="hero-shine hero-shine--two" />
        <div className="hero-vessel-cluster">
          <span className="hero-vessel hero-vessel--plate" />
          <span className="hero-vessel hero-vessel--bowl" />
          <span className="hero-vessel hero-vessel--tray" />
        </div>
        <svg className="brush-stroke-svg" viewBox="0 0 1200 520" role="img" aria-label="朱漆の刷毛跡">
          <defs>
            <linearGradient id="urushiStroke" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#6f120d" />
              <stop offset="38%" stopColor="#b72617" />
              <stop offset="66%" stopColor="#8d170f" />
              <stop offset="100%" stopColor="#2a0705" />
            </linearGradient>
          </defs>
          <path
            className="brush-stroke-path"
            d="M-20 290 C150 210 250 328 400 258 C545 188 665 222 792 270 C925 320 1030 258 1220 220"
            fill="none"
            ref={strokeRef}
            stroke="url(#urushiStroke)"
            strokeLinecap="round"
            strokeWidth="124"
          />
        </svg>
        <div className="maki-dust">
          {Array.from({ length: 26 }).map((_, index) => {
            const x = 8 + index * 3.35;
            const y = 43 + Math.sin(index * 0.72) * 7 + (index % 4) * 1.4;
            const size = 2 + (index % 5) * 0.7;

            return (
              <span
                className="maki-dot"
                key={index}
                style={
                  {
                    "--dot-size": `${size}px`,
                    "--dot-x": `${x}%`,
                    "--dot-y": `${y}%`
                  } as CSSProperties
                }
              />
            );
          })}
        </div>
      </div>

      <div className="hero-content">
        <div className="vertical-headline" ref={headlineRef}>
          <p>漆器工芸室</p>
          <h1>「{siteData.hero.headline}」</h1>
        </div>
        <div className="hero-seal-card" ref={ctaRef}>
          <span>{siteData.romanizedName}</span>
          <p>{siteData.hero.subtext}</p>
          <div className="hero-material-tags" aria-label="漆の印象">
            <span>黒漆</span>
            <span>朱漆</span>
            <span>蒔絵</span>
          </div>
          <div className="hero-actions">
            <Link className="primary-action" href="/techniques">
              {siteData.hero.primaryCta}
            </Link>
            <Link className="secondary-action" href="/care-guide">
              {siteData.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-detail-panel">
          <div>
            <span>01</span>
            <strong>木地を整える</strong>
            <p>呼吸する木の面を読み、漆がのる静かな下地へ。</p>
          </div>
          <div>
            <span>02</span>
            <strong>薄く塗り重ねる</strong>
            <p>一層ごとの乾きと研ぎが、奥行きある艶を生みます。</p>
          </div>
          <div>
            <span>03</span>
            <strong>暮らしで育てる</strong>
            <p>手入れを知るほど、日々の器として馴染みます。</p>
          </div>
        </div>
        <div className="hero-process-strip" aria-label="漆器制作の流れ">
          {["下地", "塗り", "研ぎ", "磨き"].map((step) => (
            <span className="hero-process-step" key={step}>
              {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
