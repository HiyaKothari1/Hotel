import { features } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Features() {
  return (
    <Reveal as="section" className="features" aria-label="Highlights" once>
      {features.map((f) => (
        <div className="feature" key={f.label}>
          <span className="icon">{f.icon}</span>
          <p>{f.label}</p>
        </div>
      ))}
    </Reveal>
  );
}