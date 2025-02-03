import React from 'react'
import './FreshFoodBanner.css'
import leaf from '../../assets/leaf.png';


const FreshFoodBanner = () => {
  return (
    
      <div className="site_name">
        <img src={leaf} alt="symbol for site" />
        <h1>
          <span id="hello">HELLO</span>
          <span id="fresh">FRESH</span>
        </h1>
      </div>
    
  )
}

export default FreshFoodBanner
