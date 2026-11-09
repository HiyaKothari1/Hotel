import { hotel } from "../data/site.js";
import { photoBg } from "../utils.js";

export default function RoomCard({ room }) {
  const message = encodeURIComponent(`Hi, I want to book a ${room.name}`);

  return (
    <article className="room-card">
      <div
        className="room-img"
        style={{ backgroundImage: photoBg(room.image, room.fallback) }}
        role="img"
        aria-label={room.name}
      />
      <div className="room-body">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <div className="room-foot">
          <strong>₹{room.price.toLocaleString("en-IN")} / night</strong>
          <a
            className="arrow"
            href={`https://wa.me/${hotel.phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book ${room.name}`}
          >
            →
          </a>
        </div>
      </div>
    </article>
  );
}
