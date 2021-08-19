import React from "react";
import Slider from "infinite-react-carousel";

import video1 from "./brincos.mp4";
import video2 from "./banner1.mp4";

export default function SliderCarrousel() {
  return (
    <>
      <Slider dots arrows={false} autoplay={true} autoplaySpeed={4000}>
        <div>
          <video id="test" autoPlay loop>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video id="test" autoPlay loop>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Slider>
    </>
  );
}
