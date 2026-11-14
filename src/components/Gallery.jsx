import { useEffect, useState } from "react";
import { gallery } from "../data/site.js";

const src = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export default function Gallery() {
  const [open, setOpen] = useState(null); // index of opened photo, or null

  const close = () => setOpen(null);
  const prev = () => setOpen((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setOpen((i) => (i + 1) % gallery.length);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">
        <span>Gallery</span>
      </h2>
      <p className="section-sub">A glimpse of UD Palace.</p>

      <div className="gallery-grid">
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

      {open !== null && (
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
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={src(gallery[open].file)} alt={gallery[open].caption} />
            <figcaption>{gallery[open].caption}</figcaption>
          </figure>
          <button
            className="lb-btn lb-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}