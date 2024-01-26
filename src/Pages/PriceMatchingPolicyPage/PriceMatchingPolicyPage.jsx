// PriceMatchingPolicyPage.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import './PriceMatchingPolicyPage.css';
const PriceMatchingPolicyPage = () => {
  return (
    <>
    <div className="Links"> <Link to="/">Home / <Link to="/price-matching-policy">PriceMatchingPolicy</Link></Link></div>
    <div className="Heading"> <h1>Price Matching Policy</h1>
    <div className="matchingpolicy">
     
    <div className="price-matching-policy-container1">
    <h2>What we want</h2>
      <p>
        Trendy-Biles is committed to providing low prices every day, on everything. If you find a lower price from an online retailer in Lebanon on an identical, in-stock product, tell us, and we'll match it.
      </p>

      <h2>Limitations:</h2>
      <ul>
        <li>The item must be identical (size, model, quantity, brand, color).</li>
        <li>The item must be in-stock at the online retailer's website and on Trendy-Biles at the time of the price match request.</li>
        <li>We will price match up to five items per customer per day.</li>
        <li>We will not offer rain-checks for items that are not currently in stock.</li>
        <li>The item must be sold and fulfilled by companies that are registered in Lebanon and sell online.</li>
      </ul>
      </div>

      <div className="price-matching-policy-container2">

      <p><strong>Sorry, we don't match:</strong></p>
      <ul>
        <li>Traders who sell online without official documents.</li>
        <li>Prices from, or on behalf of Marketplace and third-party sellers.</li>
        <li>Special Discounts applied in checkout.</li>
      </ul>
      <h2>How to Match a Trendy-Biles.COM Price to Another Online Retailer:</h2>
      <p>
        If you think you are eligible based on the above, contact us on +961-71-222667 or sales@Trendy-Biles.com before you place your order. We will verify the item eligibility. Trendy-Biles has the final decision for matching an online price.
      </p>

      <h2>How to Match Trendy-Biles In-store Price to Another Retailer's Online Price or Offer:</h2>
      <p>
        Show our salesmen your offer that you have got from a registered company, and they will directly do price adjustment.
      </p>

      <p>Feel free to contact us anytime on 70-777638.</p>
      </div>
      </div>
    </div>
    </>
  );
}

export default PriceMatchingPolicyPage;
