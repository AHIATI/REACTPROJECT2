import React from "react";
import fish from './../../assets/fish.png';
import time from './../../assets/time.png';
import stars from './../../assets/stars.png';
import affordable from './../../assets/affordable.png';
import './ThirdContent.css';
const SecondContent = () => {
  return (
    <div className="mealkits_div">
      <h1 className="mealkits_divtext">Why HelloFresh Meal Kits?</h1>
      <div className="mealkits_container">
        <div className="kits_wrapper">
          <div className="kits_images">
           <img src={fish} alt="A picture of a meat to indicate protein"></img>
          </div>
          <div className="kits_text">
            <p className="kits_textbold">Plenty of protein</p>
            <p>Quality protein matters in a</p>
            <p>meal delivery service,</p>
            <p>whether it's chicken, steak,</p>
            <p>fish, or plant-based.</p>
          </div>
        </div>

        <div className="kits_wrapper">
          <div className="kits_images">
            <img src={time} alt="an image to represent time"/>
          </div>
          <div className="kits_text">
            <p className="kits_textbold">No commitment whatsoever</p>
            <p>Skip weeks, pause, or cancel</p>
            <p>your meal kit subscription</p>
            <p>at any time.</p>
          </div>
        </div>

        <div className="kits_wrapper">
          <div className="kits_images">
            <img src={stars} alt></img>
          </div>
          <div className="kits_text">
          
            <p className="kits_textbold"> The most 5-star reviews among</p>
            <p>meal kit services</p>
            <p>Our huge recipe selection</p>
            <p>wows week after week.</p>
          </div>
        </div>

        <div className="kits_wrapper">
          <div className="kits_images">
            <img src={affordable} alt=""></img>
          </div>
          <div className="kits_text">
            <p className="kits_textbold">Fresh and affordable meal delivery</p>
            <p>Chef-created deliciousness</p>
            <p>that's cheaper than takeout.</p>
          </div>
        </div>
      </div>
      <button className="bold">Get Offer</button>
    </div>
  );
};

export default SecondContent;
