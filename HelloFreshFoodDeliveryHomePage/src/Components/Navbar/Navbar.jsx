import React from "react";
import { useState } from "react";
import "./Navbar.css";
import leaf from "../../assets/leaf.png";
import FreshFoodBanner from "../FreshFoodBanner/FreshFoodBanner";
const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
  const [isSustainabilityVisible, setIsSustainabilityVisible] = useState(false);

  const showMenuOnHover = () => setIsMenuVisible(true);
  const hideMenuOnHover = () => setIsMenuVisible(false);

  const showAboutUsOnHover = () => setIsAboutUsVisible(true);
  const hideAboutUsOnHover = () => setIsAboutUsVisible(false);

  const showSustainabilityOnHover = () => setIsSustainabilityVisible(true);
  const hideSustainabilityOnHover = () => setIsSustainabilityVisible(false);

  return (
    <nav>
      <FreshFoodBanner/>
      <div className="nav_links">
        <ul>
          <li>
            <a href="/">Our Plans</a>
          </li>
          <li
            onMouseEnter={showAboutUsOnHover}
            onMouseLeave={hideAboutUsOnHover}
          >
            <a href="/">
              About Us <i className="fa fa-caret-down"></i>
            </a>
            {isAboutUsVisible && (
              <div className="drop_down">
                <ul>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Our stories</a>
                  </li>
                  <li>
                    <a href="/">How it works</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={showMenuOnHover} onMouseLeave={hideMenuOnHover}>
            <a href="/">
              Our Menus <i className="fa fa-caret-down"></i>
            </a>
            {isMenuVisible && (
              <div className="drop_down">
                <ul>
                  <li>
                    <a href="/">Our Menus</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Cookbook and Recipes</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Vegeterian Meals</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <a href="/">Gift Cards</a>
          </li>

          <li
            onMouseEnter={showSustainabilityOnHover}
            onMouseLeave={hideSustainabilityOnHover}
          >
            <a href="/">
              Sustainability <i className="fa fa-caret-down"></i>
            </a>
            {isSustainabilityVisible && (
              <div className="drop_down">
                <ul>
                  <li>
                    <a href="/">Sustainability</a>
                  </li>
                  <li>
                    <a href="/">Sustainability team</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/"> Recycling and Packaging</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Cut back on food waste</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Reduce your carbon footprint</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Suppliers</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Social impact</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Hunger matters</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <a href="/">Hello Fresh for Teams</a>
          </li>
        </ul>
      </div>
      <div className="login">
        <button>Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
