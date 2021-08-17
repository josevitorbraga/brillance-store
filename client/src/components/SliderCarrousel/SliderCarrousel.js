import React from "react";
import Slider from "infinite-react-carousel";

import img from "./SLIDERTESt.jpg";
import img2 from "./SLIDER2.jpg";
import video from "./brincos.mp4";

// Precisa dar .play() no video

export default function SliderCarrousel() {
  return (
    <>
      <Slider dots arrows={false} autoplay={true} autoplaySpeed={4000}>
        <div className="sliderContent">
          <img src={img} alt="sliderImg" />
        </div>
        <div>
          <video id="test" autoplay loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="sliderContent">
          <img src={img2} alt="sliderImg" />
        </div>
      </Slider>
    </>
  );
}
