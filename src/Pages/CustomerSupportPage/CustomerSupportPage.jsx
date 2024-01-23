import React from "react";
import "./CustomerSupportPage.css";

const CustomerSupportPage = () => {
  return (
    <div className="customer-support-container">
      <h1>Customer Support</h1>
      <p className="confidence-message">
        Shop with 100% Confidence. We want you to be confident that you will
        receive the type of customer service you’ve come to expect from Trendy-Biles.
         We are always here to help, even after you have left our
        store.
      </p>

      <div className="warranty-section">
        <h2>Warranty and Protection</h2>
        <p>
          All items available on Trendy-Biles.com are delivered with the
          brand’s warranty and protection promise.
        </p>
        <p>
          All items are guaranteed to be original stock from the brand,
          distributor, or manufacturer warehouse. They carry a limited original
          warranty from the brand or distributor protecting against
          manufacturing defaults.
        </p>
        <p>
          The warranty begins on the day your item(s) are received and lasts as
          per the brand’s Terms and Conditions (mentioned on the product
          Invoice).
        </p>
      </div>

      <div className="return-policy-section">
        <h2>Return Policy</h2>
        <p>
          Items purchased on Trendy-Biles.com can be sent to our address. Our
          after-sales service will facilitate your query but will not be held
          responsible for the brand’s commitment. If you can't send the item,
          you can call our support team, and we will pick it up from your
          address.
        </p>
        <p>
          In case the product is defective on delivery, the after-sales service
          will decide whether the product should be replaced or repaired.
          However, repairs are not accepted under specific conditions:
        </p>
        <ul>
          <li>
            The defect is due to improper use (improper voltage, exposure to
            liquid, abuse or misuse, etc.).
          </li>
          <li>The serial number on the product is unknown.</li>
          <li>The item has been repaired by a third party.</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
