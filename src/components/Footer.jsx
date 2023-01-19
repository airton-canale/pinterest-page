import { Star } from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-[3rem] flex flex-col items-center text-center gap-3">
        <img
          className="w-16 rounded-full"
          alt="Profile"
          src="https://github.com/airton-canale.png"
        />
        <p className="max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          facilis eligendi esse, totam. <br /> Cum quaerat voluptate nisi
          distinctio consequuntur recusandae.
        </p>
        <div>
          <p>-Airton Canale</p>
          <p>Frontend Developer</p>
        </div>
        <div className="flex flex-row">
          <Star size={13} color="orange" weight="duotone" />
          <Star size={13} color="orange" weight="duotone" />
          <Star size={13} color="orange" weight="duotone" />
          <Star size={13} color="orange" weight="duotone" />
          <Star size={13} color="orange" weight="duotone" />
        </div>
      </div>
      <div className="bg-[url('/public/assets/footer.jpg')] bg-no-repeat bg-cover bg-center h-24 w-full"></div>
    </>
  );
};

export default Footer;
