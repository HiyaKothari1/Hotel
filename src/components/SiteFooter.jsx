import { useEffect, useRef, useState } from "react";
import { hotel } from "../data/site.js";

// "918619602317" -> "+91 86196 02317"
const fmt = (n) => `+${n.slice(0, 2)} ${n.slice(2, 7)} ${n.slice(7)}`;

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function SiteFooter() {
  const [logoOk, setLogoOk] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("sf-wait");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("sf-wait");
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="site-footer" ref={ref}>
      <svg className="sf-chhatri" viewBox="0 0 200 260" aria-hidden="true">
        <rect x="98" y="6" width="4" height="26" />
        <circle cx="100" cy="8" r="5" />
        <path d="M50 96 Q58 40 100 30 Q142 40 150 96 Z" />
        <rect x="44" y="96" width="112" height="9" />
        <rect x="56" y="105" width="9" height="76" />
        <rect x="84" y="105" width="9" height="76" />
        <rect x="107" y="105" width="9" height="76" />
        <rect x="135" y="105" width="9" height="76" />
        <rect x="46" y="181" width="108" height="10" />
        <path d="M0 260 Q40 200 100 215 Q160 195 200 235 L200 260 Z" />
      </svg>

      <div className="sf-inner">
        <div className="sf-brand">
          {logoOk && (
            <img
              className="sf-logo"
              src={`${import.meta.env.BASE_URL}images/logo-mark.png`}
              alt=""
              onError={() => setLogoOk(false)}
            />
          )}
          <div className="sf-name">UD PALACE</div>
          <div className="sf-sub">HOTEL • AJMER</div>
        </div>

        <p className="sf-tag">
          A place where comfort meets warmth and heritage in Ajmer.
        </p>

        <div className="sf-contact">
          <a href={`tel:+${hotel.phone}`}>
            <PhoneIcon />
            {fmt(hotel.phone)}
          </a>
          <span className="sf-sep" aria-hidden="true" />
          <a href={`mailto:${hotel.email}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            {hotel.email}
          </a>
        </div>

        <a className="sf-pill" href={`tel:+${hotel.emergency}`}>
          <span className="sf-pill-label">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 18a7 7 0 0 1 14 0" />
              <path d="M3 18h18" />
              <path d="M12 11V8" />
              <circle cx="12" cy="6.8" r="1.2" />
              <path d="M2 21h20" />
            </svg>
            Emergency Contact
          </span>
          <span className="sf-pill-line" aria-hidden="true" />
          <span className="sf-pill-num">
            <PhoneIcon />
            {fmt(hotel.emergency)}
          </span>
        </a>

        <a
          className="sf-insta"
          href={`https://instagram.com/${hotel.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram par follow karein"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.3" cy="6.7" r="0.6" />
          </svg>
        </a>

        <div className="sf-divider" aria-hidden="true">
          <span />
          <svg viewBox="0 0 64 36">
            <path d="M32 4C26 12 26 22 32 30C38 22 38 12 32 4Z" />
            <path d="M32 30C22 28 14 20 12 12C20 12 28 18 32 30Z" />
            <path d="M32 30C42 28 50 20 52 12C44 12 36 18 32 30Z" />
            <path d="M32 32C20 34 10 30 4 22C14 20 24 24 32 32Z" />
            <path d="M32 32C44 34 54 30 60 22C50 20 40 24 32 32Z" />
          </svg>
          <span />
        </div>

        <p className="sf-addr">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          {hotel.address}
        </p>

        <p className="sf-copy">
          © {new Date().getFullYear()} UD Palace. All rights reserved.
        </p>
      </div>

      <svg className="sf-dunes" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40V22C60 8 120 8 190 20S330 30 400 14V40Z" />
      </svg>
    </footer>
  );
}