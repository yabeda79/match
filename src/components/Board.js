import React from "react";

import Card from "./Card";

const Board = ({ images, setImages }) => {
  const handleCardClick = (id) => {
    rotateCard(id);
  };

  const rotateCard = (id) => {
    // setImages(images.map(img => {
    //   if (img.id === id) {
    //     return { ...img, rotated: true };
    //   } else {
    //     return img;
    //   }
    // }));

    setImages(images.map(img => img.id === id ? ({ ...img, rotated: true }) : img));
  };

  {/*
    CHECK PAIR LOGIC
    1. Use useEffect with images im dependencies
    2. Filter images by rotated = true field and see if length is 2
    3. If true, check pair id and change state
    4. If false, set rotated to false and change state
  */}

  return (
    <div className="board4">
      {images.map((image, ind) => (
        <Card key={ind} image={image} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default Board;
