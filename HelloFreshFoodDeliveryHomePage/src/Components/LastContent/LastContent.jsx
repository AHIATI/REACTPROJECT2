import "./LastContent.css";
import visa from "../../assets/visa.jpg";
import payment1 from "../../assets/payment1.jpg";
import discovernetwork from "../../assets/discovernetwork.jpg";
import playstore from "../../assets/playstore.jpg";
import appstore from "../../assets/appstore.jpg";
const LastContent = () => {
  return (
    <div className="last_content_container">
      <div className="contents">
        <h2>HelloFresh</h2>
        <div className="sub_contents">
          <a href="#">Students</a>
          <a href="#">Blog</a>
          <a href="#">Recipes</a>
          <a href="#">Hero Discounts</a>
          <a href="#">Recipe Directory</a>
          <a href="#">California Supply Chains Act</a>
        </div>
      </div>
      <div className="contents">
        <h2>Our Company</h2>
        <div className="sub_contents">
          <a href="#">HelloFresh Group</a>
          <a href="#">Sustainability</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
      </div>
      <div className="contents">
        <h2>Work with us </h2>
        <div className="sub_contents">
          <a href="#">Partner</a>
          <a href="#">Influencers</a>
          <a href="#">Affiliates</a>
        </div>
      </div>
      <div className="contents">
        <h2>Contact us </h2>
        <div className="sub_contents">
          <a href="#">Help Center & FAQ</a>
          <a href="#">Partnership Inquiries</a>
          <a href="#">Corporate Sales</a>
          <a href="#">Do Not Sell or Share My</a>
          <a href="#">Personal Information</a>
        </div>
      </div>
      <div className="contents">
        <h2>Payment Methods</h2>
        <div className="sub_contents">
         <a href="#"> <img src={visa} alt="visa card to pay money" /></a>
          <a href="#"><img src={payment1} alt="" /></a>
          <a href="#"><img src={discovernetwork} alt="" /></a>
        </div>
      </div>
      <div className="contents">
        <h2>
          <a href="#">Download our app</a>
        </h2>
        <div className="sub_contents">
          <p>Manage your deliveries anywhere and anytime </p>
          <a href="#">
            <img src={playstore} alt="" />
          </a>
          <a href="#">
            <img src={appstore} alt="" />
          </a>
        </div>
      </div>
      </div>
      
      
    
  );
};

export default LastContent;
