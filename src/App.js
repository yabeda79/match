import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { createApi } from "unsplash-js";

import Board from "./components/Board";
import Select from "./components/Select";

const App = () => {
  const [option, setOption] = useState(8);
  const [images, setImages] = useState([]);

  // -----------------------library usage start-----------------------
  const unsplash = createApi({
    accessKey: "ihnyzbSe2SNeccUWfV4tZWQFbMaapIvg7L-vuf5mUjs",
  });
  const getUnsplashPhotos = async () => {
    const response = await unsplash.photos.get({
      page: 1,
      perPage: option,
    });
    // unsplash.photos
    //   .getRandom({ page: 1, page: option })
    //   .then((result) => (photo = result.response));
    console.log(response);
  };
  console.log(getUnsplashPhotos());
  // -----------------------library usage end-----------------------

  // ------------------------increment shuffle?------------------------
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const getImage = async () => {
    const response = await Promise.all(
      Array(parseInt(option, 10))
        .fill(null)
        .map(() => fetch(`https://source.unsplash.com/300x300`))
    );
    let data = await Promise.all(response.map((item) => item.blob())); //axios юзнуть https://github.com/unsplash/unsplash-js#usage
    const urlCreator = window.URL || window.webkitURL;
    data = data.map((item) => {
      return {
        src: urlCreator.createObjectURL(item),
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
  console.log(images);

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
