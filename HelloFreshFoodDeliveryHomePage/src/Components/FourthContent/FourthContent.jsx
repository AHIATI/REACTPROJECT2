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

const sliderImages = [
  { image: slider1, text: "VEGGIE", description: "& PLANT-BASED MEALS" },
  { image: spaghetti, text: "Spaghetti", description: "Quick and Easy" },
  { image: slider3, text: "Family Menu", description: "KID-TESTED RECIPES" },
  { image: slider4, text: "Cakes", description: "Family Parties" },
  { image: slider5, text: "Pasteries", description: "For School Kids" },
  { image: doughnut, text: "Gifts to a friend", description: "Ready to deliver" },
  { image: jollof, text: "Birthdays", description: "Celebrate with us" },
  { image: pizza, text: "Hurray", description: "We are here for you" },
];

const FourthContent = () => {
  return (
    <div className="food_container">
      <h3>Choose from 100+ weekly menu and market items</h3>
      <p>
        Plus, discover the latest seasonal and convenience items at HelloFresh Market for an added touch of culinary
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
          <img src={aboutus} alt="About HelloFresh" />
        </div>
        <div className="about_hellofresh_banner">
          <FreshFoodBanner />
          <button id="market">Market</button>
        </div>
      </div>
      <button>View Our Menus</button>
    </div>
  );
};

export default FourthContent;
