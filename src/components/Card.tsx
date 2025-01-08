import { useEffect } from "react";

interface Props {
  item: {
    /** The name of the financial institution giving the offer. */
    name: string;

    /** The amount the financial institution is willing to loan. */
    amount: number;
  };
}

export default function Card({ item }: Props) {
  const { name, amount } = item;

  useEffect(() => {
    console.log(`Child ${name}:${amount}`);
  }, []);

  return (
    <article className="card">
      <h3>{name}</h3>
      <p>
        <b>Offer:</b> {amount}
      </p>
    </article>
  );
}
