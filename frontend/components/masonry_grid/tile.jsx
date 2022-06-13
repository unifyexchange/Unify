import React from "react";

const Tile = ({ src }) => {
  return (
    <div className="tile">
      <img src={src} height="330px" width="330px" />
    </div>
  );
};

export default Tile;
