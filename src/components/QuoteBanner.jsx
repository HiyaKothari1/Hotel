import { hotel, images } from "../data/site.js";
import { photoBg } from "../utils.js";

export default function QuoteBanner() {
  return (
    <section
      className="quote-banner"
      style={{ backgroundImage: "linear-gradient(120deg,#3a2618,#8a6238)" }}
    >
      <p>“{hotel.quote}”</p>
      <hr />
    </section>
  );
}
