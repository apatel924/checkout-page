//CheckoutPage.js
import React from 'react';
import BackButton from './BackButton';
import UpdateDiscordBox from './UpdateDiscordBox';
import PaymentInfoBox from './PaymentInfoBox';
import CheckoutSummaryBox from './CheckoutSummaryBox';

const CheckoutPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-black to-purple-900 p-8 overflow-auto">
      <div className="flex flex-col lg:flex-row w-full lg:w-2/3 h-full bg-black text-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col w-full lg:w-1/2 space-y-4">
          <BackButton />
          <h1 className="text-3xl">Checkout</h1>
          <h2 className="text-xl text-gray-400">Secure Checkout</h2>
          <UpdateDiscordBox />
          <PaymentInfoBox />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 h-1/2 lg:h-auto mt-4 lg:mt-0 lg:ml-4">
          <CheckoutSummaryBox />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
