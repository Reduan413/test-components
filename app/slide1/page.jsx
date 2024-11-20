"use client";
import Image from "next/image";
import Slider from "react-slick";
import "./slider1.css";

const Page = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    infinite: true,
    slidesToShow: 2,
    speed: 300,
    autoplay: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "https://via.placeholder.com/380x516",
    "https://via.placeholder.com/380x516",
    "https://via.placeholder.com/380x516",
    "https://via.placeholder.com/380x516",
    "https://via.placeholder.com/380x516",
    "https://via.placeholder.com/380x516",
  ];

  return (
    <div className={`blogCarousel`}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={`blogPostBox`}>
            <div className={`blogPostBoxInner`}>
              <div className={`blogPostImage`}>
                <Image
                  src={src}
                  alt={`Blog Post ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Page;
