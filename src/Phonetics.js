import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

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
      {props.phonetics.text}
    </div>
  );
}
