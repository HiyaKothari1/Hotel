import { features } from "../data/site.js";

export default function Features() {
  return (
    <section className="features" aria-label="Highlights">
      {features.map((f) => (
        <div className="feature" key={f.label}>
          <span className="icon">{f.icon}</span>
          <p>{f.label}</p>
        </div>
      ))}
    </section>
  );
}
