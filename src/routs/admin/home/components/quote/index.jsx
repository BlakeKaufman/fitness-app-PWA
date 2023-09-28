import { useEffect, useState } from "react";
import "./index.css";

import listOfQuotes from "../../../../../../quotes.json";

export function GeneratedQuote() {
  const [quote, setQuote] = useState("");
  const [newQuote, setNewQuote] = useState(0);

  useEffect(() => {
    const quotes = listOfQuotes;
    const randomNum = Math.floor(Math.random() * quotes.length);
    console.log(randomNum);

    const randomQuote = quotes[randomNum]["q"];
    console.log(randomQuote);

    setQuote(randomQuote);
  }, [newQuote]);

  return (
    <section className="quote">
      <h1>{quote}</h1>

      <span
        onClick={() => setNewQuote((prev) => (prev += 1))}
        className="newQuoteBTN"
      >
        New Quote
      </span>
    </section>
  );
}
