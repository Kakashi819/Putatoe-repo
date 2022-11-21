import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleCard from "../SimpleCard/SimpleCard";
import "./Slider.css";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    src: "https://storage.googleapis.com/putatoeapp/Image/testImage/IHF0KLY",
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/putatoeapp/Image/testImage/IHF0KLY",
  },
  {
    id: 3,
    src: "https://storage.googleapis.com/putatoeapp/Image/testImage/IHF0KLY",
  },
  {
    id: 4,
    src: "https://storage.googleapis.com/putatoeapp/Image/testImage/IHF0KLY",
  },
  {
    id: 5,
    src: "https://storage.googleapis.com/putatoeapp/Image/testImage/IHF0KLY",
  },
];

const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };

function SliderBox() {
  return (
    <div className="Slider-collections">
        <Slider {...settings}>
          {data.map((val) => {
            return <SimpleCard card={val} />;
          })}
        </Slider>
    </div>
  );
}

export default SliderBox;
