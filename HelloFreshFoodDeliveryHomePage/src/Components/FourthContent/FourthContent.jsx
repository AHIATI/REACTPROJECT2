import React from "react";
import "./FourthContent.css";
import FreshFoodBanner from "../FreshFoodBanner/FreshFoodBanner";
import aboutus from "../../assets/aboutus.png";
import ImageSlider from "./../ImageSlider/ImageSlider";
import slider1 from "./../../assets/slider1.jpg";
import spaghetti from "./../../assets/spaghetti.jpg";
import slider3 from "./../../assets/slider3.jpg";
import slider4 from "./../../assets/slider4.jpg";
import slider5 from "./../../assets/slider5.jpg";
import doughnut from "./../../assets/doughnut.jpg";
import jollof from "./../../assets/jollof.jpg";
import pizza from "./../../assets/pizza.jpg";

const sliderImages = [slider1, spaghetti, slider3, slider4, slider5,doughnut,jollof,pizza];

const FourthContent = () => {
  return (
    <div className="food_container">
      <h3>Choose from 100+ weekly menu and market items</h3>
      <p>
        Plus, discover the latest seasonal and convenience items at HelloFresh
        Market for an added touch of culinary
      </p>
      <p>inspiration</p>

      <div className="food_images">
        <ImageSlider slides={sliderImages} />
      </div>
      <div className="about_hellofresh">
        <div className="about_hellofresh_text">
          <h2>Everything You Need, All In One Box</h2>
          <p>The best of meal kits and online grocery shopping,</p>
          <p>streamlined into one weekly box.</p>
        </div>
        <div className="about_hellofresh_image">
          <img src={aboutus} alt="" />
        </div>
        <div className="about_hellofresh_banner">
          <FreshFoodBanner />
          <button id="market">Market</button>
        </div>
      </div>
      <button>View Our menus</button>
    </div>
  );
};

export default FourthContent;
