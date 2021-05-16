import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <div className="example">"{props.examples}"</div>
      </div>
    );
  } else {
    return null;
  }
}
