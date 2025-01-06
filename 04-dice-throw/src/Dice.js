import React from "react";
import { useState } from "react";

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState(1);

  const diceRoll = () => {
    const result = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(result);
  };

  return (
    <>
      <div className="layout">
        <div
          style={{
            border: "2px",
            borderStyle: "solid",
            width: "50px",
            height: "50px",
          }}
        >
          {diceNumber}
        </div>
        <button onClick={diceRoll}>Roll Dice</button>
      </div>
    </>
  );
}
