import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from '../ServiceCard/ServiceCard.jsx'
import './ServiceProduct.css'
const cards = [
  {
    id: 1,
    name: "Incoporation of Public Company",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
  {
    id: 2,
    name: "Incoporation of Private",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
  {
    id: 3,
    name: "Incoporation of Nidhi Company",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
  {
    id: 4,
    name: "Incoporation of Producer",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
  {
    id: 5,
    name: "APERA Registration",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
  {
    id: 6,
    name: "MSME Registration",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
  {
    id: 7,
    name: "GST Registration",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
  {
    id: 8,
    name: "GST Return Filing",
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/gst-18-sixteen_nine.jpg",
  },
];

const settings = {
  infinite: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    lazyLoad: true,
    autoplay: true,
   autoplaySpeed: 2000,
};

function ServiceProduct() {
  return (

        <div className="service-product-heading">
        <Slider {...settings}>
          {cards.map((val) => {
            return (
              <ServiceCard card={val}/>
            );
          })}   
        </Slider>
        </div>
  );
}

export default ServiceProduct;
