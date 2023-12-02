import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [newImage, setnewImage] = useState(0);
  const { img, title, subtitle } = images[newImage];

  const changeImage = (newValue) => setnewImage(Math.max(0, Math.min(newValue, images.length - 1)));

  return (
    <div className="container">
      <div className="image" style={{ backgroundImage: `url(${img})` }}>
        <div className="start" onClick={() => changeImage(newImage - 1)}>
          <ArrowBackIosIcon style={{ fontSize: 50 }} />
        </div>
        <div className="input">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="end" onClick={() => changeImage(newImage + 1)}>
          <ArrowForwardIosIcon style={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;