import React from "react";
import "./FirstContent.css";
import rice from '../../assets/rice.jpg';
import pizza from '../../assets/pizza.jpg';

const FirstContent = () => {
  return (
    <div className="first_content">
      <div className="first_image">
        <img src={rice} alt="fried rice" />
      </div>
      <div className="middle_message">
        <div className="first_message">
          <h1>HOMEMADE MADE EASY</h1>
          <h1>WITH HELLOFRESH MEAL KITS</h1>
        </div>
        <div className="second_message">
          <p> Get Up to 10 Free Meals +</p>
          <p>Free High Protein Item For Life*</p>
          <p>with America's #1 Meal Kit!</p>
          <p id="text">Pause or Cancel Anytime.</p>
          </div>
          <div className="third_message">
            <button className="bold">Get Started</button>
            <p>*One per box with active subscription. Free meals applied as discount on first box, new</p>
            <p>subscribers only, varies by plan.</p>
          </div>
      </div>
      <div className="last_image">
        <img src={pizza} alt="Pizza image" />
      </div>
    </div>
  );
};

export default FirstContent;
