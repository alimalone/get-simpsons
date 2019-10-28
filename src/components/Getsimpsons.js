import React from "react";

function DisplayQuotes({ simpson }) {
  return (
    <div className="DisplayQuotes">
      <img src={simpson.image} alt={simpson.character} />
      <ul>
        <li>Name: {simpson.character}</li>

        <li>Citation: {simpson.quote}</li>
      </ul>
    </div>
  );
}

export default DisplayQuotes;
