import { photoBg } from "../utils.js";

export default function RoomCard({ room, onSelect }) {
  const cardPhoto = room.thumb || room.images?.[0];
  const background = cardPhoto ? photoBg(cardPhoto, room.fallback) : room.fallback;

  return (
    <article className="room-card" onClick={() => onSelect(room)}>
      <div
        className="room-img"
        style={{ backgroundImage: background, backgroundPosition: room.focus || "center" }}
        role="img"
        aria-label={room.name}
      />
      <div className="room-body">
        <h3>{room.name}</h3>
        <p>{room.tagline}</p>
        <div className="room-foot">
          <strong>₹{room.price.toLocaleString("en-IN")} / night</strong>
          <button
            type="button"
            className="arrow"
            aria-label={`View ${room.name} details`}
          >
            →
          </button>
        </div>
      </div>
    </article>
  );
}
