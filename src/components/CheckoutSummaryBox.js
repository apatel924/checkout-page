import React from "react";

const CheckoutSummaryBox = () => {
    return (
        <div className="checkout-summary-box">
            <div className="coupon-code-input">
                <input type="text" placeholder="Enter Coupon Code"/>
                <button className="apply-btn">Apply</button>
            </div>
            <div className="price-details">
                <div className="item">
                    <span>Item Name</span>
                    <span>$100</span>
                </div>
                <div className="item">
                    <span>Quantity</span>
                    <span>2</span>
                </div>
                <div className="item">
                    <span>Service Fee</span>
                    <span>$10</span>
                </div>
                <div className="item total">
                    <span>Total</span>
                    <span>$220</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummaryBox;