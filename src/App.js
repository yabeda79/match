import React, { useState, useEffect } from "react";
import "./App.css";
//import { createApi } from "unsplash-js";

import Board from "./components/Board";
import Select from "./components/Select";

const App = () => {
  const [option, setOption] = useState(8);
  const [images, setImages] = useState([]);

  const getImage = async () => {
    const response = await Promise.all(
      Array(parseInt(option, 10))
        .fill(null)
        .map(() => fetch(`https://source.unsplash.com/300x300`))
    );
    let data = await Promise.all(response.map((item) => item.blob())); //axios юзнуть https://github.com/unsplash/unsplash-js#usage
    const urlCreator = window.URL || window.webkitURL;
    //data = data.map((item) => urlCreator.createObjectURL(item));
    // data = data.map((item) => {
    //   return {
    //     src: urlCreator.createObjectURL(item),
    //     completed: false,
    //     id: Math.floor(Math.random() * 1000),
    //   };
    // });
    data = data.map((item) => {
      return {
        src: urlCreator.createObjectURL(item),
        rotated: false,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      };
    });
    data = data.concat(data).sort(() => Math.random() - 0.5);
    setImages(data);
    console.log(data);
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
