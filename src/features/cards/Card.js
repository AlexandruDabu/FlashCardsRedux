import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCards } from "./cardsSlice";
// import selector

export default function Card({ id }) {
  const card = useSelector(selectCards); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card[id].back : card[id].front}
      </button>
    </li>
  );
}
