import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gallery } from "../data/site.js";
import Reveal from "./Reveal.jsx";

const src = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export default function Gallery() {
  const [open, setOpen] = useState(null); // index of opened photo, or null
  const gridRef = useRef(null);

  const close = () => setOpen(null);
  const prev = () => setOpen((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setOpen((i) => (i + 1) % gallery.length);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".gallery-item");
    if (!items) return;
    items.forEach((n) => n.classList.add("g-r"));

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("g-in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -140px 0px" }
      );
      items.forEach((n) => io.observe(n));
      return () => io.disconnect();
    }, []);

  return (
    <section className="photo-gallery" id="gallery">
      <Reveal as="h2" className="section-title">
        <span>Gallery</span>
      </Reveal>
      <Reveal as="p" className="section-sub" delay={120}>
        A glimpse of UD Palace.
      </Reveal>

      <div className="gallery-grid" ref={gridRef}>
        {gallery.map((g, i) => (
          <figure
            className="gallery-item"
            key={g.file}
            role="button"
            tabIndex={0}
            onClick={() => setOpen(i)}
            onKeyDown={(e) => e.key === "Enter" && setOpen(i)}
          >
            <img src={src(g.file)} alt={g.caption} loading="lazy" />
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </div>

      {open !== null &&
        createPortal(
          <div className="lightbox" onClick={close}>
            <button className="lb-btn lb-close" onClick={close} aria-label="Close">
              ✕
            </button>
            <button
              className="lb-btn lb-prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
            >
              ‹
            </button>
              <Reveal
                as="figure"
                className={`gallery-item ${
                  open % 2 === 0 ? "from-left" : "from-right"
                }`}
              >
                <img
                  src={src(gallery[open].file)}
                  alt={gallery[open].caption}
                  loading="eager"
                />
                <figcaption>{gallery[open].caption}</figcaption>
              </Reveal>
            <button
              className="lb-btn lb-next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
            >
              ›
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}