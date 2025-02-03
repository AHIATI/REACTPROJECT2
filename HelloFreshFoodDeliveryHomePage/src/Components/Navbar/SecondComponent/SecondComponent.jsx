import React from "react";
import "./SecondComponent.css";
import spaghetti from "../../../assets/spaghetti.jpg";
import jollof from "../../../assets/jollof.jpg";
import doughnut from "../../../assets/doughnut.jpg";
import FreshFoodBanner from "../../FreshFoodBanner/FreshFoodBanner";
import banner from "../../../assets/banner.jpg";
const SecondComponent = () => {
  return (
    <div className="second_content">
      <div className="text-content">
        <p>Check Out What's New at HelloFresh:</p>
        <p>Fast, Easy Meals for Every Schedule</p>
      </div>
      <div className="image_content">
        <div className="container">
      
        <div className="combiner">
          <div className="first_food">
            <img src={jollof} alt="jollof rice" />
          </div>
          <div className="food_banner">
            <img src={banner} alt='banner'/>
            </div>
            </div>
            <div className="food_description">
          <p className="font">READY MADE MEALS</p>
          <p>Heat & eat when you're on the go. </p>
          </div>
          </div>
          
         
          
        
        <div className="second_food">
          <img src={doughnut} alt="an image of doughnut" />
          <div className="food_description">
          <p className="font">PREP AND BAKE</p>
          <p>Low prep. Easy cleanup.</p>
          </div>
        </div>
        <div className="second_food">
          <img src={spaghetti} alt="an image of hot spaghetti" />
          <div className="food_description">
          <p className="font">15 MINS MEALS</p>
          <p>Tasty, three-step recipes.</p>
          </div>
        </div>
        </div>
              <button >Get Started</button>   
    </div>
  );
};

export default SecondComponent;
