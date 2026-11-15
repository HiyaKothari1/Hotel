import Reveal from "./Reveal.jsx";
import { useEffect, useState } from "react";
import { attractions } from "../data/site.js";

function AttractionCard({ a, delay }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (a.photos.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % a.photos.length);
    }, delay);
    return () => clearInterval(timer);
  }, [a.photos.length, delay]);

  return (
    <div className={`attraction${a.photos.length ? " has-photo" : ""}`}>
      {a.photos.map((file, i) => (
        <div
          key={file}
          className={`attraction-bg${i === current ? " active" : ""}`}
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/${file})`,
          }}
        />
      ))}
      <div className="attraction-body">
        <span className="attraction-icon">{a.icon}</span>
        <div>
          <h3>{a.title}</h3>
          <p>{a.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default function Attractions() {
  return (
    <section className="attractions" id="nearby">
            <Reveal as="h2" className="section-title">
        <span>Why Stay Here</span>
      </Reveal>
      <Reveal as="p" className="section-sub" delay={120}>
        Close to the best of Ajmer.
      </Reveal>

      <div className="attraction-grid">
        {attractions.map((a, i) => (
        <Reveal key={a.title} delay={(i % 2) * 150}>
          <AttractionCard a={a} delay={4000 + i * 700} />
        </Reveal>
      ))}
      </div>
    </section>
  );
}