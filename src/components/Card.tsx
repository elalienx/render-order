// Node modules
import { useEffect } from "react";

// Project files
import TrackingManager from "../scripts/TrackingManager";

interface Props {
  /** Card information */
  item: {
    /** The name of the financial institution giving the offer. */
    name: string;

    /** The amount the financial institution is willing to loan. */
    amount: number;
  };

  /** An instance of the tracker manager class to trigger tracking code in the order we desire. */
  tracker: TrackingManager;
}

export default function Card({ item, tracker }: Props) {
  const { name, amount } = item;

  // Methods
  useEffect(() => {
    tracker.addEvent(3, childGoogleTracker);
  }, []);

  function childGoogleTracker() {
    console.log(`3. Card: ${name}:${amount}`);
  }

  return (
    <article className="card">
      <h3>{name}</h3>
      <p>
        <b>Offer:</b> {amount}
      </p>
    </article>
  );
}
