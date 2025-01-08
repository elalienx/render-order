// Project files
import { useEffect, useState } from "react";
import Card from "./components/Card";
import data from "./data/Offers.json";
import "./styles/style.css";

export default function App() {
  // Local state
  const [isParentReady, setIsParentReady] = useState(false);

  // Components
  const Cards = data.map((item) => <Card key={item.id} item={item} />);

  useEffect(() => {
    console.log("Parent should be logged first");
    setIsParentReady(true);
  }, []);

  return (
    <div className="app">
      <h1>Parent Component</h1>
      <section className="cards">
        <h2>Offer list</h2>
        <div className="grid">{isParentReady && Cards}</div>
      </section>
    </div>
  );
}
