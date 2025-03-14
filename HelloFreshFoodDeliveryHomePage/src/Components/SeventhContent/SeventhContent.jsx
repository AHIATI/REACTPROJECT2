import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./SeventhContent.css";

const SeventhContent = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const sections = [
    {
      title: "How can I redeem my free high protein item for life?",
      content: [
        "1. Sign up to HelloFresh and pick your meals for the week",
        "2. After meal selection, you’ll be taken to HelloFresh Market, where you can pick one item from our delicious assortment of high protein items.",
        "3. Receive the free high protein item in your next meal kit delivery box and enjoy!",
        "4. Make sure you pick one item for each of your weekly meal boxes.",
      ],
    },
    {
      title: "How does HelloFresh’s meal kit delivery service work?",
      content: [
        "1. Choose your meal plan and select your recipes.",
        "2. We deliver fresh ingredients to your door.",
        "3. Follow our easy recipes to cook delicious meals.",
      ],
    },
    {
      title: "Which food and recipes that HelloFresh offer",
      content:
        "HelloFresh’s meal delivery service offers a variety of meal plans to fit your lifestyle, including meat & veggies, low-carb, and low-calorie options. With six meal kit preferences you can select chef-designed dishes tailored to your needs. Our low-calorie meal kits, for instance, feature dietician-approved recipes that contain only about 650 calories. Meanwhile, our family-friendly meal delivery preference allows you to get easy and delicious recipes that even your kids will love. What’s more: you can always upgrade to Gourmet Recipes and include add-ons like garlic bread in every box",
    },
    {
      title: "How many times does HelloFresh deliver mealKits",
      content:
        "Once a week. You can expect your meal kit delivery to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii",
    },
    {
      title: "Does HelloFresh give nutrition and calorie information?",
      content:
        "Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrates, protein, dietary fiber, sugar, sodium, unsaturated and saturated fat, and cholesterol.",
    },
    {
      title: "How do i recycle my HelloFresh meal boxes?",
      content:
        "You can fold your box and place it with your curbside recyclables, take it to your local recycling center, or even compost it.Explore the recycling and packaging page for more details on how to recycle the HelloFresh meal kit box and its contents.",
    },
    {
      title: "Why should i choose HelloFresh as my meal kit delivery service?",
      content:
        "HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews among meal kit delivery services according to Trustpilot. HelloFresh was also recognized as having America’s Best Customer Service among meal kit companies by Newsweek in its “America’s Best Customer Service 2020 and 2022” articles. It has also been named the #1 meal kit by USA Today in its “Readers’ Choice Awards” five years running. Beyond the awards and accolades, HelloFresh’s meal service supports healthier and more sustainable lifestyles.",
    },
    {
      title: "Do HelloFresh meal kits support a healthy lifestyle",
      content:
        "Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, including vegetarian, pescatarian, Calorie Smart, Carb Smart and more! By featuring crisp, seasonal vegetables and other fresh produce, we make sure your meal kits are packed with the freshest local ingredients.",
    },
  ];

  return (
    <div className="seventh_container">
      <h2>More questions about our meal delivery services?</h2>
      <div className="subcontent_one_container">
        {sections.map((section, index) => (
          <div className="subone_main" key={index}>
            <div
              className="roundcover_container"
              onClick={() => toggleSection(index)}
            >
              <div className="round_dropdown">
                <FontAwesomeIcon
                  icon={visibleSection === index ? faCaretUp : faCaretDown}
                  className="faCaret_down"
                />
              </div>
              <div className="round_dropdown_text">
                <p>
                  <b>{section.title}</b>
                </p>
              </div>
            </div>
            {visibleSection === index && (
              <div className="main_text">
                {Array.isArray(section.content) ? (
                  section.content.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="subcontent_two">
        <p>
          *Offer only valid for new customers or former customers who
          deactivated over 270 days prior to using this voucher. ‘Free Ready
          Made Meals’ offer valid for new and existing customers with qualifying
          auto-renewing subscription purchase.‘Free Ready Made Meals ’ offer is
          based on a limit of one free Ready Made Meal per box with active
          subscription, available starting with deliveries week of February 22,
          2025, while supplies last. If subscription is canceled, this offer
          becomes invalid and will not reinstated upon reactivation. ‘50% off’
          offer valid for new customers only with qualifying auto-renewing
          subscription purchase. ‘50% off’ offer is based on total discount
          given on first box for a 4-person, 5-recipe plan, and expires 21 days
          after offer purchase at 11:59 PM ET. Customers who purchase a plan of
          greater value will receive more than 50% off, while customers who
          purchase a plan of lesser value will receive less than 50% off.
          Shipping fee applies on all deliveries after the first box. Not valid
          on premiums, meal upgrades, add-ons, taxes or shipping fees. May not
          be combined with gift cards or any other promotion. No cash value.
          Void outside the U.S. and where prohibited. Offer cannot be sold or
          otherwise bartered. HelloFresh has the right to end or modify any
          offer at any time. Additional restrictions may apply. See
          https://www.hellofresh.com/termsandconditions for more.{" "}
        </p>
      </div>
    </div>
  );
};

export default SeventhContent;
