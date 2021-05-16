import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Definitions.css";

export default function Definitions(props) {
  if (props.data.definitions.length > 1) {
    return (
      <div className="Definitions">
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div className="meaning" key={index}>
              <div className="description">
                {index + 1}. {definition.definition}
              </div>
              <Examples examples={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="Definitions">
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div className="meaning" key={index}>
              <div className="description">{definition.definition}</div>
              <Examples examples={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    );
  }
}
