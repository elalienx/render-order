// Project files
import Card from "./components/Card";
import data from "./data/Offers.json";
import "./styles/style.css";

export default function App() {
  // Components
  const Cards = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="app">
      <h1>Parent Component</h1>
      <section className="cards">
        <h2>Offer list</h2>
        <div className="grid">{Cards}</div>
      </section>
    </div>
  );
}
