import React, { useState } from "react";
import { ShippingSolutions } from "modules/ShippingSolutions";
import { AboutPlatform } from "modules/AboutPlatform";
import { BannerBlock } from "modules/BannerBlock";
import { StartShipping } from "modules/StartShipping";
import { HomeLogosList } from "modules/HomeLogosList";

export const Home = () => {
  return (
    <article className="flex flex-col items-center">
      <ShippingSolutions />
      <HomeLogosList />
    
    <AboutPlatform />
    {/* <BannerBlock /> */}
    <StartShipping />
    </article>
  );
};

export default Home;