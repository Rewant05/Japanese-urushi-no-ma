import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "../config/siteData";

type UrushiBrushHeroProps = {
  onNavigate: (href: string) => void;
};

export function UrushiBrushHero({ onNavigate }: UrushiBrushHeroProps) {
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

    const pathLength = strokeRef.current.getTotalLength();
    const context = gsap.context(() => {
      gsap.set(strokeRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: reduceMotion ? 0 : pathLength
      });

      if (reduceMotion) {
        gsap.set(spreadRef.current, { scaleX: 1 });
        gsap.set(".maki-dot, .hero-shine", { opacity: 1 });
        return;
      }

      gsap.set(spreadRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".maki-dot", { opacity: 0, y: 12 });
      gsap.set(".hero-shine", { opacity: 0.15, xPercent: -25 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.65
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
          strokeRef.current,
          { strokeDashoffset: 0, duration: 0.55, ease: "none" },
          0.04
        )
        .to(
          spreadRef.current,
          { scaleX: 1, duration: 0.55, ease: "power1.out" },
          0.08
        )
        .to(
          ".hero-shine",
          { opacity: 0.9, xPercent: 85, duration: 0.38, ease: "sine.inOut", stagger: 0.04 },
          0.26
        )
        .to(
          ".maki-dot",
          { opacity: 1, y: 0, duration: 0.28, stagger: 0.015, ease: "power1.out" },
          0.58
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0.42, y: 24, rotate: -1.5 },
          { opacity: 1, y: 0, rotate: 0, duration: 0.24, ease: "power2.out" },
          0.68
        );

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    }, heroRef);

    return () => context.revert();
  }, []);

  const handleClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <section className="urushi-hero" ref={heroRef}>
      <div className="hero-workbench" aria-hidden="true">
        <div className="lacquer-spread" ref={spreadRef} />
        <div className="hero-shine hero-shine--one" />
        <div className="hero-shine hero-shine--two" />
        <svg className="brush-stroke-svg" viewBox="0 0 1200 520" role="img" aria-label="朱漆の刷毛跡">
          <defs>
            <linearGradient id="urushiStroke" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#6f120d" />
              <stop offset="38%" stopColor="#b72617" />
              <stop offset="66%" stopColor="#8d170f" />
              <stop offset="100%" stopColor="#2a0705" />
            </linearGradient>
            <filter id="lacquerGlow" x="-20%" y="-80%" width="140%" height="260%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feColorMatrix
                in="blur"
                result="redGlow"
                values="1 0 0 0 0.35 0 0.35 0 0 0.04 0 0 0.2 0 0.02 0 0 0 0.72 0"
              />
              <feMerge>
                <feMergeNode in="redGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="brush-stroke-path"
            d="M-20 290 C150 210 250 328 400 258 C545 188 665 222 792 270 C925 320 1030 258 1220 220"
            fill="none"
            filter="url(#lacquerGlow)"
            ref={strokeRef}
            stroke="url(#urushiStroke)"
            strokeLinecap="round"
            strokeWidth="124"
          />
        </svg>
        <div className="maki-dust">
          {Array.from({ length: 34 }).map((_, index) => {
            const x = 7 + index * 2.65;
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
          <div className="hero-actions">
            <a className="primary-action" href="/techniques" onClick={handleClick("/techniques")}>
              {siteData.hero.primaryCta}
            </a>
            <a className="secondary-action" href="/care-guide" onClick={handleClick("/care-guide")}>
              {siteData.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
