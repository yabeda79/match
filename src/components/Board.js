import React from "react";

import Card from "./Card";

const Board = ({ images }) => {
  return (
    <div className="board4">
      {images.map((image, ind) => (
        <Card key={ind} image={image} />
      ))}
    </div>
  );
};

export default Board;
