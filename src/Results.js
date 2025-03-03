import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h3>{props.results.phonetic}</h3>
        </section>
        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div>
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
