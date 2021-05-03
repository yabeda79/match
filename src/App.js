import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import Board from "./components/Board";
import Select from "./components/Select";

import { getImages } from "./api";
import Score from "./components/Score";

const App = () => {
  const [option, setOption] = useState(8);
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
    setImages(data);
  };

  useEffect(() => {
    getImage();
  }, [option]);

  useEffect(() => {
    getLocalScore();
  }, []);

  // const saveLocalScore = () => {
  //   localStorage.setItem("highScore", JSON.stringify(highScore));
  // };

  const getLocalScore = () => {
    if (localStorage.getItem("highScore") === null) {
      localStorage.setItem("highScore", JSON.stringify([]));
    } else {
      let localScore = JSON.parse(localStorage.getItem("highScore"));
      setHighScore(localScore);
    }
  };

  return (
    <div className="app">
      <Board
        images={images}
        setImages={setImages}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Select option={option} setOption={setOption} />
      <Score score={score} highScore={highScore} />
    </div>
  );
};

export default App;
