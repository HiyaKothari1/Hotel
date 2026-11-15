import { hotel } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function QuoteBanner() {
  return (
    <section
      className="quote-banner"
      style={{ backgroundImage: "linear-gradient(120deg,#3a2618,#8a6238)" }}
    >
      <Reveal as="p" className="zoom">“{hotel.quote}”</Reveal>
      <Reveal as="hr" delay={250} />
    </section>
  );
}