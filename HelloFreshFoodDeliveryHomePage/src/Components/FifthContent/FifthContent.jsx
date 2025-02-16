import React from "react";
import "./FifthContent.css";
import deliverybox from "../../assets/deliverybox.jpg";
const FifthContent = () => {
  return (
    <div className="box_container">
      <div className="box_image">
        <img src={deliverybox} alt="image of a delivery box" />
      </div>
      <div className="box_message">
        <div className="box_message_title">
          <p>What’s inside HelloFresh meal</p>
          <p>delivery boxes?</p>
        </div>
        <div className="box_message_submessage">
          <p>Every HelloFresh delivery brings you a curated selection of meal kits designed to</p>
            <p>make dinnertime easy, exciting, and stress-free. Here’s what’s inside:</p>
        </div>
        <div className="box_message_mainmessage">
          <p><b>✓ Fresh, quality produce:</b> Crisp vegetables and ripe fruits selected to bring</p>
          <p>vibrant flavors to every dish.</p>
        </div>
        <div className="box_message_mainmessage">
          <p><b>✓ Simple recipe cards:</b> Step-by-step recipes with nutritional information that take </p>
          <p>the guesswork out of cooking, no matter your skill level.
          </p>
        </div>
        <div className="box_message_mainmessage">
          <p><b>✓ Top-notch proteins:</b> From succulent chicken to sustainably sourced seafood, we</p>
          <p>deliver the best to elevate your meals.</p>
        </div>
        <div className="box_message_mainmessage">
          <p><b>✓ Customizable add-ons: </b> Choose from tasty snacks, savory sides, or additional</p>
          <p>proteins to enhance your weekly meal kit.</p>
        </div>
        <div className="box_message_mainmessage">
          <p><b>✓ Eco-friendly packaging: </b> Insulated boxes and recyclable materials keep your</p>
          <p>ingredients fresh and minimize waste.</p>
        </div>

        <div className="about_deliverybox">
          <button id="menus">Get Offer</button>
        </div>
      </div>
    </div>
  );
};

export default FifthContent;
