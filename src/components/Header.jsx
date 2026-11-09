import { useState } from "react";
import { hotel } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${hotel.name} home`}>
        <span className="brand-mark">UD</span>
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
        <a href="#contact" onClick={close}>Contact</a>
      </nav>
    </header>
  );
}
