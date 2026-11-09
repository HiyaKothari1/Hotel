import { useState } from "react";
import { hotel } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  // if public/images/logo-mark.png is missing, fall back to the "UD" text mark
  const [logoOk, setLogoOk] = useState(true);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${hotel.name} home`}>
        {logoOk ? (
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}images/logo-mark.png`}
            alt=""
            width="46"
            height="45"
            onError={() => setLogoOk(false)}
          />
        ) : (
          <span className="brand-mark">UD</span>
        )}
        <span className="brand-divider" />
        <span className="brand-text">
          <strong>{hotel.name}</strong>
          <small>{hotel.tagline}</small>
        </span>
      </a>

      <button
        className="menu-btn"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        <a href="#home" onClick={close}>Home</a>
        <a href="#rooms" onClick={close}>Rooms</a>
        <a href="#map" onClick={close}>Map</a>
      </nav>
    </header>
  );
}
