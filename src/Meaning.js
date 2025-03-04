import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <p className="definition">{props.meaning.definition}</p>
      <div className="Example">
        <Example example={props.meaning.example} />
      </div>
      <br />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
