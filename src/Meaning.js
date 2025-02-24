import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>{props.meaning.definition}</p>
        <br />
        <em>{props.meaning.example}</em>
      </div>
    </div>
  );
}
