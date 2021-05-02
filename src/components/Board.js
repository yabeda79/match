import React, { useEffect } from "react";

import Card from "./Card";

const Board = ({ images, setImages }) => {
  useEffect(() => {
    if (images.filter((i) => i.rotated).length === 2) {
      checkCardRotation();
    }
  }, [images]);

  const handleCardClick = (id) => {
    rotateCard(id);
    // checkCardRotation(id);
  };

  const rotateCard = (id) => {
    // setImages(images.map(img => {
    //   if (img.id === id) {
    //     return { ...img, rotated: true };
    //   } else {
    //     return img;
    //   }
    // }));

    setImages(
      images.map((img) => (img.id === id ? { ...img, rotated: true } : img))
    );
  };

  const checkCardRotation = () => {
    const filteredImg = images.filter((i) => i.rotated);
    const completed = filteredImg[0].pairId === filteredImg[1].pairId;

    console.log(filteredImg, completed, images);

    setImages(
      images.map((img) =>
        img.rotated ? { ...img, completed, rotated: false } : img
      )
    );
  };

  return (
    <div className="board4">
      {images.map((image, ind) => (
        <Card key={ind} image={image} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default Board;
