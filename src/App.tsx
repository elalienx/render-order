// Project files
import { useEffect } from "react";
import Card from "./components/Card";
import data from "./data/Offers.json";
import "./styles/style.css";
import TrackingManager from "./scripts/TrackingManager";
import Footer from "./components/Footer";

export default function App() {
  // Properties
  const trackingManager = new TrackingManager();

  // Methods
  useEffect(() => {
    trackingManager.addEvent(1, parentGoogleTracker);
    trackingManager.fireEvents();
  }, []);

  function parentGoogleTracker() {
    console.log("1. Parent should be logged first");
  }

  // Components
  const Cards = data.map((item) => (
    <Card key={item.id} item={item} tracker={trackingManager} />
  ));

  return (
    <div className="app">
      <h1>Parent Component</h1>
      <p>ℹ️ Open the browser's console to see the event trigger order.</p>
      <section className="cards">
        <h2>Offer list</h2>
        <div className="grid">{Cards}</div>
      </section>
      <Footer tracker={trackingManager} />
    </div>
  );
}
