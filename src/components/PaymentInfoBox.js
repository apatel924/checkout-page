import React, { useState } from "react";

const PaymentInfoBox = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [country, setCountry] = useState('');

  const handleBookNow = () => {
    // handle your booking logic here
    console.log(cardNumber, cardHolderName, expiryDate, cvv, country);
  }

  return (
    <div className="payment-info-box">
        <div className="payment-options">
            <div className="credit-card-option">
                <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                <input type="text" placeholder="Cardholder Name" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)}/>
                <input type="text" placeholder="Expiration Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}/>
                <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)}/>
            </div>
            <div className="paypal-option">
                //paypal info
            </div>
        </div>
        <div className="country-input">
            <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
        </div>
        <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default PaymentInfoBox;
