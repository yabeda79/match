import React from "react";

import Card from "./Card";

const Board = ({ images, setImages }) => {
  return (
    <div className="board4">
      {images.map((image, ind) => (
        <Card key={ind} images={image} setImages={setImages} />
      ))}
    </div>
  );
};

export default Board;
