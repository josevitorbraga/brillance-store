import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "infinite-react-carousel";

import banerColares from "./bannerColar.jpeg";
import bannerColecao from "./bannerColecao.jpeg";

export default function SliderCarrousel() {
  const history = useHistory();
  const handleClickColares = () => {
    history.push("/categoria/colares");
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
        <div className="bannerSlider">
          <img src={bannerColecao} alt="colecao" />
        </div>
        <div onClick={() => handleClickColares()} className="bannerSlider">
          <img src={banerColares} alt="colares" />
        </div>
      </Slider>
    </>
  );
}
