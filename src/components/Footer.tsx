// Node modules
import { useEffect } from "react";

// Project files
import TrackingManager from "../scripts/TrackingManager";

interface Props {
  /** An instance of the tracker manager class to trigger tracking code in the order we desire. */
  tracker: TrackingManager;
}

export default function Footer({ tracker }: Props) {
  // Methods
  useEffect(() => {
    tracker.addEvent(2, childGoogleTracker);
  }, []);

  function childGoogleTracker() {
    const message = `2. Footer: This should run before the cards even if is at the bottom of the parent`;

    console.log(message);
  }

  return (
    <footer className="footer">
      <b>Copyright 2025 Lendo AB</b>
      <small>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit iste nihil
        inventore qui voluptatibus vel harum quis itaque natus debitis facere
        quas fugit perferendis ea recusandae sapiente, quisquam incidunt hic?
      </small>
    </footer>
  );
}
