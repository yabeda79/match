import React, { useEffect } from "react";

import { stopwatch } from "durations";

import Card from "./Card";

const Board = ({
  images,
  setImages,
  score,
  setScore,
  highScore,
  setHighScore,
}) => {
  const watch = stopwatch();

  useEffect(() => {
    watch.start();
  });

  useEffect(() => {
    if (images.filter((i) => i.rotated).length === 2) {
      setTimeout(checkCardRotation, 1000);
    }
    alertWin();
  }, [images]);

  const handleCardClick = (id) => {
    rotateCard(id);
  };

  const rotateCard = (id) => {
    setImages(
      images.map((img) => (img.id === id ? { ...img, rotated: true } : img))
    );
  };

  const checkCardRotation = () => {
    const filteredImg = images.filter((i) => i.rotated);
    const completed = filteredImg[0].pairId === filteredImg[1].pairId;

    setImages(
      images.map((img) =>
        img.rotated ? { ...img, completed, rotated: false } : img
      )
    );
  };

  const checkWin = () => {
    const copmletedImages = images.filter((item) => item.completed);
    if (copmletedImages.length === images.length) {
      return true;
    } else {
      return false;
    }
  };

  const alertWin = () => {
    if (checkWin()) {
      alert("You win!");
      console.log(watch.stop());
    }
    if (checkWin()) {
      saveLocalScore();
    }
  };

  const saveLocalScore = () => {
    localStorage.setItem("highScore", JSON.stringify(highScore));
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
