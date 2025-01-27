import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Banner from "../assets/Hero Section.png";
import ArrowLeft from "../assets/left-arrow.svg";
import ArrowRight from "../assets/right-arrow.svg";
import Scratch from "../assets/sratch.svg";
import Ilustrator1 from "../assets/Ilustrator-1.png";

const HeroSection = () => {
  // Create a reference for Swiper
  const swiperRef = useRef(null);

  // State to track the current slide index for pagination
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slides data (this can be fetched from an API or passed as props)
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

  // Handle slide change to update current slide index
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className="relative bg-cover bg-no-repeat !mt-0 bg-center h-screen">
      <div className="background absolute inset-0 w-fit h-fit bg-black/50"></div>
      <Swiper
        ref={swiperRef}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={800}
        parallax={true}
        navigation={false} // Disable default navigation
        onSlideChange={handleSlideChange} // Track slide change to update pagination
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <div
          slot="container-start"
          className="parallax-bg relative  after:absolute after:w-full after:h-full after:bg-black after:opacity-50"
          style={{
            backgroundImage: `url(${Banner})`,
          }}
          data-swiper-parallax="-23%"
        ></div>

        {/* Dynamically Render SwiperSlides from the slidesData array */}
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <div className="wrap items-center justify-center grid grid-cols-12 gap-20">
                <div className="wrapper col-span-7">
                  <p
                    className="text-xl font-semibold"
                    data-swiper-parallax="-300"
                  >
                    Original & Natural
                    <img src={Scratch} className="w-[25%]" alt="" />
                  </p>
                  <div
                    className="wrap-title text-7xl space-y-2 font-bold text-secondary"
                    data-swiper-parallax="-200"
                  >
                    <h1 className="text-7xl font-bold">{slide.title}</h1>
                    <span className="text-white">{slide.subtitle}</span>
                  </div>
                  <p
                    className="text-xl font-light my-6 max-w-xl"
                    data-swiper-parallax="-100"
                  >
                    {slide.description}
                  </p>
                </div>
                <img src={Ilustrator1} className="col-span-5" alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute container bottom-[22%] translate-y-1/2 translate-x-1/2 right-1/2 flex items-center justify-between z-10">
        <div className="toggle-btn space-x-4">
          <button
            className="py-4 px-4 text-2xl outline-1 outline-white rounded-full hover:outline-none hover:bg-secondary transition ease-in-out duration-300 cursor-pointer"
            onClick={() => swiperRef.current.swiper.slidePrev()} // Custom "previous" button
            aria-label="Previous"
          >
            <img src={ArrowLeft} className="w-8" alt="Previous" />
          </button>
          <button
            className="py-4 px-4 text-2xl outline-1 outline-white rounded-full hover:outline-none hover:bg-secondary transition ease-in-out duration-300 cursor-pointer"
            onClick={() => swiperRef.current.swiper.slideNext()} // Custom "next" button
            aria-label="Next"
          >
            <img src={ArrowRight} className="w-8" alt="Next" />
          </button>
        </div>

        <div className="paggination-toggle-btn flex items-center gap-2">
          {/* Dynamically Render Pagination Dots */}
          {slidesData.map((_, index) => (
            <div
              key={index}
              className={`dot w-4 h-4 rounded-full outline-white outline-1 cursor-pointer ${
                currentIndex === index ? "bg-secondary" : "bg-transparent"
              }`}
              onClick={() => swiperRef.current.swiper.slideTo(index)} // Go to the clicked dot
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute container bottom-[6%] gap-3 translate-y-1/2 translate-x-1/2 right-1/2 flex items-center justify-end z-10">
        <p className="text-white font-medium uppercase">Scroll to Explore</p>
        <span className="animate-bounce text-white text-xl">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
