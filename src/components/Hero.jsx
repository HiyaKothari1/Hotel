import { hotel, images } from "../data/site.js";
import { photoBg } from "../utils.js";

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: photoBg(
          images.hero,
          "linear-gradient(120deg,#2b1b12 0%,#6b4a30 55%,#b98a58 100%)"
        ),
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO</p>
        <h1>{hotel.name}</h1>
        <p className="tagline">Comfort • Hospitality • Convenience</p>
        <hr className="rule" />
        <p className="hero-text">
          A cozy and elegant stay in the heart of Ajmer, perfect for families,
          business and leisure travelers.
        </p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href={`tel:+${hotel.phone}`}>
            📞 Call for Booking
          </a>
          <a
            className="btn btn-outline"
            href={`https://wa.me/${hotel.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
