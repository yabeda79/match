import React, { useState, useEffect } from "react";
import "./App.css";

import Board from "./components/Board";
import Select from "./components/Select";

const App = () => {
  const [option, setOption] = useState(16);
  const [images, setImages] = useState([]);

  const getImage = async () => {
    const response = await Promise.all(
      Array(parseInt(option, 10))
        .fill(null)
        .map(() => fetch(`https://source.unsplash.com/300x300`))
    );
    let data = await Promise.all(response.map((item) => item.blob())); //axios юзнуть https://github.com/unsplash/unsplash-js#usage
    const urlCreator = window.URL || window.webkitURL;
    data = data.map((item) => urlCreator.createObjectURL(item));
    setImages(data);
    console.log(data);
  };

  useEffect(() => {
    getImage();
  }, [option]);

  return (
    <div className="app">
      <Board images={images} />
      <Select option={option} setOption={setOption} />
    </div>
  );
};

export default App;
