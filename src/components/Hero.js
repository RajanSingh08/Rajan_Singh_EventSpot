import React from 'react';
import hero from '../assests/hero-img.png';
import yellowCircle from '../assests/Ellipse 13.png';
import greenCircle from '../assests/Ellipse 12.png';
import yellowSquare from '../assests/Rectangle 51.png';
import blueSquare from '../assests/Rectangle 52.png';
import redTriangle from '../assests/Polygon 1.png';

const Hero = () => {
  return (
    <div className="bg-base-white relative flex flex-col w-full xl:h-[40rem] md:mt-36 lg:h-[32rem] md:h-[28rem] h-[28rem] mt-24 overflow-hidden">
      
      {/* SHAPES with Infinite Movement and Fade-In Animation */}
      <img
        className="hidden lg:block absolute top-14 left-12 h-6 w-6 lg:top-12 lg:left-12 animate-fade-in animate-move"
        src={yellowCircle}
        alt="yellow circle"
        style={{ animationDelay: "0.3s" }}
      />
      <img
        className="hidden lg:block absolute bottom-4 left-[44rem] h-6 w-6 lg:bottom-4 lg:left-[45rem] animate-fade-in animate-move"
        src={greenCircle}
        alt="green circle"
        style={{ animationDelay: "0.4s" }}
      />
      <img
        className="hidden lg:block absolute top-[6rem] left-[86rem] h-8 w-8 lg:top-[6rem] lg:left-[80rem] animate-fade-in animate-move"
        src={yellowSquare}
        alt="yellow square"
        style={{ animationDelay: "0.5s" }}
      />
      <img
        className="hidden lg:block absolute top-[28rem] left-[32rem] h-8 w-8 lg:top-[28.5rem] lg:left-[34rem] animate-fade-in animate-move"
        src={blueSquare}
        alt="blue square"
        style={{ animationDelay: "0.6s" }}
      />
      <img
        className="hidden lg:block absolute top-[34rem] left-[10rem] h-6 w-6 lg:top-[36rem] lg:left-[9rem] animate-fade-in animate-move"
        src={greenCircle}
        alt="green circle"
        style={{ animationDelay: "0.7s" }}
      />
      <img
        className="hidden lg:block absolute top-[32rem] left-[83rem] h-5 w-5 lg:top-[30rem] lg:left-[82rem] animate-fade-in animate-move"
        src={redTriangle}
        alt="red triangle"
        style={{ animationDelay: "0.8s" }}
      />

      {/* HERO CONTENT with Slide and Fade-in Animation */}
      <div className="absolute top-32 left-24 flex flex-col justify-between xl:w-[45rem] xl:h-[24rem] lg:w-[40rem] lg:h-[20rem] animate-slide-in">
        <h1 className="xl:text-5xl font-bold xl:w-[32rem] xl:leading-[4rem] lg:text-4xl lg:w-[24rem] lg:leading-[3rem] md:w-[20rem] md:text-3xl md:leading-[3rem] text-3xl leading-12 tracking-wide">
          Welcome to <span className="text-yellow">Elegant Events</span> – Your Dream Event Awaits
        </h1>

        <p className="relative bottom-4 left-1 xl:w-[36rem] lg:w-[30rem] md:w-[24rem] w-[18rem] text-gray capitalize">
          We bring your visions to life, crafting unforgettable experiences tailored to your needs. From intimate gatherings to grand celebrations, let us turn moments into memories.
        </p>

        <button className="relative top-2 xl:w-40 xl:px-4 xl:py-3 xl:text-lg lg:w-32 lg:py-3 md:text-base md:w-28 md:py-1 w-28 py-2 bg-yellow rounded-md shadow-button animate-fade-in" style={{ animationDelay: "1s" }}>
          PLAN YOUR EVENT →
        </button>
      </div>

      {/* HERO IMAGE with Slide-in Animation */}
      <img
        className="absolute bottom-0 right-0 xl:w-[51rem] xl:h-[35rem] lg:w-[42rem] lg:h-[30rem] md:h-[24rem] md:w-[28rem] xl:block lg:block md:block hidden animate-slide-in-right"
        src={hero}
        alt="hero"
      />
    </div>
  );
};

export default Hero;
