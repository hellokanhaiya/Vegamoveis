// FirstComponent.js
import React from "react";

function FirstComponent({ onClick }) {
  return (
    <div className="text-white">
      <h2>First Component</h2>
      <button onClick={onClick}>Show Second Component</button>
    </div>
  );
}

export default FirstComponent;
