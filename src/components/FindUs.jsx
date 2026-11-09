import { hotel } from "../data/site.js";

export default function FindUs() {
  return (
    <footer className="find-us" id="contact">
      <div className="find-info">
        <span className="pin">📍</span>
        <div>
          <strong>Find Us</strong>
          <p>{hotel.address}</p>
        </div>
      </div>
      <div className="find-actions">
        <a className="round-btn call" href={`tel:+${hotel.phone}`} aria-label="Call">
          📞
        </a>
        <a
          className="round-btn wa"
          href={`https://wa.me/${hotel.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          💬
        </a>
      </div>
    </footer>
  );
}
