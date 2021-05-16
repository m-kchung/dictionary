import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Phonetics.css";

export default function Phonetics(props) {
  function play(event) {
    event.preventDefault();
    let audio = new Audio(props.phonetics.audio);
    audio.play();
  }
  return (
    <div className="Phonetics">
      <span className="playAudio" onClick={play}>
        <AiFillPlayCircle />
      </span>
      <span className="phoneticText">{props.phonetics.text}</span>
    </div>
  );
}
