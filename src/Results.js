import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="word">
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Definitions data={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
