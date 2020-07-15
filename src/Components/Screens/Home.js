import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "../../App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home = () => {
  const mensshoes1 = require("../../Slider-Images/1.png");
  const mensshoes2 = require("../../Slider-Images/4.png");
  const mensshoes3 = require("../../Slider-Images/7.png");

  const womenshoes1 = require("../../Slider-Images/2.png");
  const womenshoes2 = require("../../Slider-Images/5.png");
  const womenshoes3 = require("../../Slider-Images/8.png");

  const kidsshoes1 = require("../../Slider-Images/3.png");
  const kidsshoes2 = require("../../Slider-Images/6.png");
  const kidsshoes3 = require("../../Slider-Images/9.png");

  const menshoes = require("../../Our-Products-Images/1.png");
  const womenshoes = require("../../Our-Products-Images/2.png");
  const kidshoes = require("../../Our-Products-Images/3.png");

  const ourclient1 = require("../../Our-Clients-Images/1.png");
  const ourclient2 = require("../../Our-Clients-Images/2.png");
  const ourclient3 = require("../../Our-Clients-Images/3.png");
  const ourclient4 = require("../../Our-Clients-Images/4.png");
  const ourclient5 = require("../../Our-Clients-Images/5.png");

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <div>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={1000}
          bullets={false}
          animation="cubeAnimation"
        >
          <div className="slider" data-src={mensshoes1} />
          <div data-src={womenshoes1} />
          <div data-src={kidsshoes1} />
          <div data-src={mensshoes2} />
          <div data-src={womenshoes2} />
          <div data-src={kidsshoes2} />
          <div data-src={mensshoes3} />
          <div data-src={womenshoes3} />
          <div data-src={kidsshoes3} />
        </AutoplaySlider>
      </div>
      <br />
      <div>
        <h1 className="productHeading">Our Products</h1>
        <div className="ourproducts">
          <div className="product">
            <img src={menshoes} alt="Men's Shoes" />
            <h3 className="productName">Men's Shoes</h3>
          </div>
          <div className="product">
            <img src={womenshoes} alt="Women's Shoes" />
            <h3 className="productName">Women's Shoes</h3>
          </div>
          <div className="product">
            <img src={kidshoes} alt="Kids Shoes" />
            <h3 className="productName">Kids Shoes</h3>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h1 className="productHeading">Our Clients</h1>
        <div className="clients">
          <img className="clientImage" src={ourclient1} />
          <img className="clientImage" src={ourclient2} />
          <img className="clientImage" src={ourclient3} />
          <img className="clientImage" src={ourclient4} />
          <img className="clientImage" src={ourclient5} />
        </div>
      </div>
    </>
  );
};

export default Home;
