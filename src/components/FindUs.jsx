import { hotel } from "../data/site.js";

export default function FindUs() {
  return (
    <>
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.6816700907752!2d74.62657197562862!3d26.465988179145704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be74d090e107d%3A0xb244796cb709781!2sHotel%20UD%20Palace!5e0!3m2!1sen!2sin!4v1794242966777!5m2!1sen!2sin"
            title="Hotel UD Palace location"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>

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
    </>
  );
}