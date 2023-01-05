import React from "react";
import ButtonHeader from "./ButtonHeader";

const Header = () => {
  return (
    <div className="w-full h-3/5 bg-[url('/public/assets/header.jpg')] bg-no-repeat bg-cover bg-center absolute flex justify-between">
      <div class="p-4">
        <img class="h-7 w-8" src="/assets/nubank.png" alt="nubank" />
      </div>
        <div class="justify-between p-4">
          <ButtonHeader name="HOME" />
          <ButtonHeader name="SERVICES" />
          <ButtonHeader name="FEATURES" />
          <ButtonHeader name="REVIEWS" />
          <ButtonHeader name="PRICING" />
          <ButtonHeader name="CONTACT" />
        </div>
    </div>
  );
};

export default Header;
