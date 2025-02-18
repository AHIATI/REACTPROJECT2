import React from "react";
import child1 from "../../assets/child1.jpg";
import child2 from "../../assets/child2.jpg";
import child3 from "../../assets/child3.jpg";
import child4 from "../../assets/child4.jpg";
import bigphoto from "../../assets/bigphoto.jpg";
import "./SixthContent.css";
const SixContent = () => {
  return (
    <div className="sixth_container">
      <div className="sixth_container_first_text">
        <h2>Cook it. Love it. Tag it #HelloFreshPics</h2>
        <p>Follow us on Instagram @hellofresh</p>
      </div>
      <div className="sixth_content_div_container">
        <div className="sixth_image_container">
          <div className="sixth_content_image">
            <img src={child1} alt="" />
          </div>
          <div className="sixth_content_text">
            <p>
              <b>bdanielle1285</b>
            </p>
            <p>My little chef helping me</p>
            <p>make dinner tonight and</p>
            <p>trying out some of his new</p>
            <p>kitchen utensils I got him</p>
          </div>
        </div>
        <div className="sixth_image_container">
          <div className="sixth_content_image">
            <img src={child2} alt="" />
          </div>
          <div className="sixth_content_text">
            <p>
              <b>bdanielle1285</b>
            </p>
            <p>My little chef helping me</p>
            <p>make dinner tonight and</p>
            <p>trying out some of his new</p>
            <p>kitchen utensils I got him</p>
          </div>
        </div>
        <div className="sixth_image_container">
          <div className="sixth_content_image">
            <img src={child3} alt="" />
          </div>
          <div className="sixth_content_text">
            <p>
              <b>bdanielle1285</b>
            </p>
            <p>My little chef helping me</p>
            <p>make dinner tonight and</p>
            <p>trying out some of his new</p>
            <p>kitchen utensils I got him</p>
          </div>
        </div>
        <div className="sixth_image_container">
          <div className="sixth_content_image">
            <img src={child4} alt="" />
          </div>
          <div className="sixth_content_text">
            <p>
              <b>bdanielle1285</b>
            </p>
            <p>My little chef helping me</p>
            <p>make dinner tonight and</p>
            <p>trying out some of his new</p>
            <p>kitchen utensils I got him</p>
          </div>
        </div>
      </div>
      <div className="bigphoto">
        <img src={bigphoto} alt="" />
      </div>
    </div>
  );
};

export default SixContent;
