import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Banner from "../assets/Hero Section.png";
import ArrowLeft from "../assets/left-arrow.svg";
import ArrowRight from "../assets/right-arrow.svg";
import Scratch from "../assets/sratch.svg";
import Ilustrator1 from "../assets/Ilustrator-1.png";

const HeroSection = () => {
  const swiperRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesData = [
    {
      title: "Agriculture Matter",
      subtitle: "Good Production",
      description:
        "Dissuade ecstatic and properly saw entirely sir why laughter endeavor.",
    },
    {
      title: "Sustainable Farming",
      subtitle: "Good Production",
      description:
        "Innovation in farming techniques to ensure sustainability and productivity.",
    },
    {
      title: "Agriculture Matter",
      subtitle: "Good Production",
      description:
        "Enhancing the production quality through better methods and practices.",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className="relative bg-cover !mt-0 bg-no-repeat bg-center h-screen">
      <div className="background absolute inset-0 w-full h-full bg-black/50"></div>
      <Swiper
        ref={swiperRef}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={800}
        parallax={true}
        navigation={false}
        onSlideChange={handleSlideChange}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <div
          slot="container-start"
          className="parallax-bg relative after:absolute after:w-full after:h-full after:bg-black after:opacity-70"
          style={{
            backgroundImage: `url(${Banner})`,
          }}
          data-swiper-parallax="-23%"
        ></div>

        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <div className="wrap items-center justify-center lg:grid grid-cols-12 flex flex-col-reverse  gap-6 ">
                <div className="wrapper col-span-7  text-center  lg:mx-0 mx-auto lg:text-left">
                  <p
                    className="text-lg sm:text-2xl flex flex-col gap-1 lg:items-start items-center justify-center font-semibold"
                    data-swiper-parallax="-300"
                  >
                    Original & Natural
                    <img
                      src={Scratch}
                      className="w-[30%] mx-auto md:mx-0"
                      alt=""
                    />
                  </p>
                  <div
                    className="wrap-title text-3xl flex flex-col md:gap-3 md:text-5xl lg:text-7xl space-y-2 font-bold text-secondary"
                    data-swiper-parallax="-200"
                  >
                    <span>{slide.title}</span>
                    <span className="text-white block md:inline">
                      {slide.subtitle}
                    </span>
                  </div>
                  <p
                    className="text-sm sm:text-base md:text-2xl font-light my-6 max-w-xl mx-auto md:mx-0"
                    data-swiper-parallax="-100"
                  >
                    {slide.description}
                  </p>
                </div>
                <img
                  src={Ilustrator1}
                  className="col-span-5 md:w-[90%]  w-full lg:w-auto mx-auto"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute container lg:bottom-[22%] md:bottom-[12%] bottom-[13%] translate-y-1/2 translate-x-1/2 right-1/2 flex items-center md:justify-between justify-center z-10">
        <div className="toggle-btn md:space-x-4 md:inline hidden space-x-2">
          <button
            className="md:py-4 py-2 md:px-4 px-2 text-2xl outline-1 outline-white rounded-full hover:outline-none hover:bg-secondary transition ease-in-out duration-300 cursor-pointer"
            onClick={() => swiperRef.current.swiper.slidePrev()}
            aria-label="Previous"
          >
            <img src={ArrowLeft} className="md:w-8 w-6" alt="Previous" />
          </button>
          <button
            className="md:py-4 py-2 md:px-4 px-2 text-2xl outline-1 outline-white rounded-full hover:outline-none hover:bg-secondary transition ease-in-out duration-300 cursor-pointer"
            onClick={() => swiperRef.current.swiper.slideNext()}
            aria-label="Next"
          >
            <img src={ArrowRight} className="md:w-8 w-6" alt="Next" />
          </button>
        </div>

        <div className="paggination-toggle-btn flex items-center gap-2">
          {slidesData.map((_, index) => (
            <div
              key={index}
              className={`dot w-4 h-4 rounded-full outline-white outline-1 cursor-pointer ${
                currentIndex === index ? "bg-secondary" : "bg-transparent"
              }`}
              onClick={() => swiperRef.current.swiper.slideTo(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute container bottom-[6%] gap-3 translate-y-1/2 translate-x-1/2 right-1/2 flex items-center justify-center md:justify-end z-10">
        <p className="text-white font-medium uppercase text-sm sm:text-base">
          Scroll to Explore
        </p>
        <span className="animate-bounce text-white text-lg sm:text-xl">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
