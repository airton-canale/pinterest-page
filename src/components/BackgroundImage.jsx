import React from "react";
import Header from "./Header";
import Title from "./Title";

const BackgroundImage = () => {
  return (
    <>
      <div className="h-3/5 bg-[url('/public/assets/header.jpg')] bg-no-repeat bg-cover bg-center brightness-50 absolute w-full"></div>
      <div className="h-3/5 flex items-center">
        <Header />
        <Title />
      </div>
    </>
  );
};

export default BackgroundImage;
