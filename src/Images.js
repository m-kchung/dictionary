import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="Images">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <a href={image.url} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    alt={props.keyword}
                    className="image"
                    width="100%"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
