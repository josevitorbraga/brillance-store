import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "infinite-react-carousel";

import video1 from "./banner2.mp4";
import video2 from "./banner1.mp4";

export default function SliderCarrousel() {
  const history = useHistory();
  const handleClickColares = () => {
    history.push("/categoria/colares");
  };
  const handleClickBrincos = () => {
    history.push("/categoria/brincos");
  };
  return (
    <>
      <Slider
        dots
        arrows={false}
        autoplay={true}
        autoplaySpeed={4000}
        adaptiveHeight={true}
      >
        <div className="videoBanner" onClick={handleClickColares}>
          <video id="test" autoPlay loop>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="videoBanner" onClick={handleClickBrincos}>
          <video id="test" autoPlay loop>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Slider>
    </>
  );
}
