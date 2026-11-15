import { useEffect } from "react";

// Sets two CSS variables while scrolling and draws the gold progress bar.
//   --progress : 0 to 1, how far down the page you are
//   --hero-y   : scroll distance in px (max 800), used for the hero parallax
export default function ScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--progress", max > 0 ? y / max : 0);
      root.style.setProperty("--hero-y", Math.min(y, 800));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="scroll-progress" />;
}