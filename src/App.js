import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import Board from "./components/Board";
import Select from "./components/Select";

import { getImages } from "./api";

const App = () => {
  const [option, setOption] = useState(4);
  const [images, setImages] = useState([]);

  // ------------------------increment shuffle?------------------------
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const getImage = async () => {
    const images = await getImages(option);
    let data = images.response.results.map((item) => {
      return {
        url: item.urls.small,
        rotated: false,
        completed: false,
        pairId: uuidv4(),
      };
    });

    data = shuffle(
      data.concat(data).map((item) => ({ ...item, id: uuidv4() }))
    );

    console.log(data)
    setImages(data);
  };

  useEffect(() => {
    getImage();
  }, [option]);

  return (
    <div className="app">
      <Board images={images} setImages={setImages} />
      <Select option={option} setOption={setOption} />
    </div>
  );
};

export default App;
