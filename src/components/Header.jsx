import React from "react";
import ButtonHeader from "./ButtonHeader";

const Header = () => {
  return (
    <div className="max-w[1024px] mx-auto	top-0 w-full absolute flex justify-between brightness-100">
      <div className="m-0 p-4 px-8 flex">
        <img className="h-7 w-8" src="/assets/nubank.png" alt="nubank" />
      </div>
      <div className="m-0 p-5 px-10 flex items-start gap-4">
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
