import { useEffect, useRef, useState } from "react";
import { hotel } from "../data/site.js";

const imgUrl = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export default function RoomModal({ room, onClose }) {
  const closeBtnRef = useRef(null);
  const trackRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const [active, setActive] = useState(0);
  const photos = room.images || [];
  const titleId = `room-title-${room.id}`;

  // Lock page scroll, close on Escape, and give focus back when closing
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const goTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(photos.length - 1, i));
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const message = encodeURIComponent(
    `Hi, I want to book the ${room.name} (₹${room.price}/night)`
  );

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal-bar">
          <button
            ref={closeBtnRef}
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close room details"
          >
            ✕
          </button>
        </div>

        <div className="modal-grid">
          {/* ---------- PHOTO GALLERY ---------- */}
          <div className="gallery">
            <div className="gallery-track" ref={trackRef} onScroll={handleScroll}>
              {photos.length > 0 ? (
                photos.map((file, i) => (
                  <div
                    className="gallery-slide"
                    key={file}
                    style={{ background: room.fallback }}
                  >
                    <img
                      src={imgUrl(file)}
                      alt={`${room.name} – photo ${i + 1} of ${photos.length}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ))
              ) : (
                <div
                  className="gallery-slide gallery-empty"
                  style={{ background: room.fallback }}
                >
                  <span>Photos coming soon</span>
                </div>
              )}
            </div>

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-nav prev"
                  onClick={() => goTo(active - 1)}
                  aria-label="Previous photo"
                  disabled={active === 0}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="gallery-nav next"
                  onClick={() => goTo(active + 1)}
                  aria-label="Next photo"
                  disabled={active === photos.length - 1}
                >
                  ›
                </button>
                <div className="gallery-count" aria-hidden="true">
                  {active + 1} / {photos.length}
                </div>
                <div className="thumbs">
                  {photos.map((file, i) => (
                    <button
                      key={file}
                      type="button"
                      className={`thumb ${i === active ? "active" : ""}`}
                      style={{ backgroundImage: `url(${imgUrl(file)})` }}
                      onClick={() => goTo(i)}
                      aria-label={`Show photo ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ---------- DETAILS ---------- */}
          <div className="modal-info">
            <h2 id={titleId}>{room.name}</h2>
            <p className="modal-price">
              <strong>₹{room.price.toLocaleString("en-IN")}</strong> / night
            </p>

            {room.facts?.length > 0 && (
              <ul className="facts">
                {room.facts.map((f) => (
                  <li className="fact" key={f}>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {room.note && <p className="modal-note">ℹ️ {room.note}</p>}

            {room.description && <p className="modal-desc">{room.description}</p>}

            {room.amenities?.length > 0 && (
              <>
                <h3>Room facilities</h3>
                <ul className="chips">
                  {room.amenities.map((a) => (
                    <li className="chip" key={a}>
                      {a}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="modal-actions">
              <a
                className="btn btn-dark"
                href={`https://wa.me/${hotel.phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Book on WhatsApp
              </a>
              <a className="btn btn-ghost-dark" href={`tel:+${hotel.phone}`}>
                📞 Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
