import React from "react";

function handleChange() {
  console.log("Entering password...");
}

export default function Keypad() {
  return <input type="password" onChange={handleChange} />;
}
