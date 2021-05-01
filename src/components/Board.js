import React, { useEffect } from "react";

import Card from "./Card";

const Board = ({ images, setImages }) => {
  useEffect(() => {
    if (images.filter(i => i.rotated).length === 2) {
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
    const filteredImg = images.filter(i => i.rotated);
    const completed = filteredImg[0].pairId === filteredImg[1].pairId;

    setImages(
      images.map((img) =>
        img.rotated
          ? { ...img, completed, rotated: completed }
          : img
      )
    );
  };

  // const checkCardRotation = (id) => {
  //   setFilteredImg(images.filter((item) => item.rotated === true));
  //   if (
  //     filteredImg.length == 2 &&
  //     filteredImg[0].pairId === filteredImg[1].pairId
  //   ) {
  //     setImages(
  //       images.map((img) =>
  //         img.id === id ? { ...img, rotated: false, completed: true } : img
  //       )
  //     );
  //     setFilteredImg([]);
  //   }
  // };

  {
    /*
    CHECK PAIR LOGIC
    1. Use useEffect with images im dependencies
    2. Filter images by rotated = true field and see if length is 2
    3. If true, check pair id and change state
    4. If false, set rotated to false and change state
  */
  }

  return (
    <div className="board4">
      {images.map((image, ind) => (
        <Card key={ind} image={image} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default Board;
