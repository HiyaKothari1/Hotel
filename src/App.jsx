import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Rooms from "./components/Rooms.jsx";
import QuoteBanner from "./components/QuoteBanner.jsx";
import FindUs from "./components/FindUs.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Rooms />
        <QuoteBanner />
      </main>
      <FindUs />
    </>
  );
}
