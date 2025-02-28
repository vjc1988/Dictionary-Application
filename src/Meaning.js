import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <p className="definition">{props.meaning.definition}</p>
      <em className="example">{props.meaning.example}</em>
      <br />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
