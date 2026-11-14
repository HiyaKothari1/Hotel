import { useEffect, useState } from "react";
import { hotel, heroSlides } from "../data/site.js";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {heroSlides.map((file, i) => (
        <div
          key={file}
          className={`hero-slide${i === current ? " active" : ""}`}
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/${file})`,
          }}
        />
      ))}
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
             <i className="fa-brands fa-whatsapp" style={{ color: "#25D366" }}></i>WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}