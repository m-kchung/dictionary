import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  console.log(props.data);
  return (
    <div className="Definitions">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index + 1}. {definition.definition}
              <br />
              <em>{definition.example}</em>
              <br />
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
