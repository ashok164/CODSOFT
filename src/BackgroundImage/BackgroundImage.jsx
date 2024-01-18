import React from "react";

function BackgroundImage(props) {
  return (
    <div className="MainImage">
      <img
        src={props.imageUrl}
        alt="image"
        width={props.width}
        height={props.height}
      />
      <div className="text">{props.description}</div>
    </div>
  );
}

export default BackgroundImage;
