import { useRef, useState } from "react";
import { rooms } from "../data/site.js";
import RoomCard from "./RoomCard.jsx";

export default function Rooms() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Find which card is closest to the centre of the carousel
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    Array.from(track.children).forEach((card, i) => {
      const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (d < bestDistance) {
        bestDistance = d;
        best = i;
      }
    });
    setActive(best);
  };

  return (
    <section className="rooms" id="rooms">
      <h2 className="section-title">
        <span>Our Rooms</span>
      </h2>
      <p className="section-sub">
        Choose from our well-designed, cozy and spacious rooms.
      </p>

      <div className="carousel" ref={trackRef} onScroll={handleScroll}>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      <div className="dots" aria-hidden="true">
        {rooms.map((room, i) => (
          <span key={room.id} className={`dot ${i === active ? "active" : ""}`} />
        ))}
      </div>
    </section>
  );
}
