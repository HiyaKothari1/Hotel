import { hotel } from "../data/site.js";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.6816700907752!2d74.62657197562862!3d26.465988179145704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be74d090e107d%3A0xb244796cb709781!2sHotel%20UD%20Palace!5e0!3m2!1sen!2sin!4v1794242966777!5m2!1sen!2sin";

export default function FindUs() {
  const scrollToMap = () => {
    document
      .getElementById("map")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <section className="map-section" id="map">
        <div className="map-container">
          <iframe
            src={MAP_SRC}
            title="Hotel UD Palace location"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <a
          className="map-open"
          href="https://www.google.com/maps?cid=802845346562611073"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps ↗
        </a>
      </section>

      <footer className="find-us" id="contact">
        <button type="button" className="find-info" onClick={scrollToMap}>
          <span className="pin">📍</span>
          <span>
            <strong>Find Us</strong>
            <span className="find-addr">{hotel.address}</span>
          </span>
        </button>

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
           <i className="fa-brands fa-whatsapp" style={{ color: "#25D366" }}></i> 
          </a>
        </div>
      </footer>
    </>
  );
}