import React, { useState } from "react";
import { ShippingSolutions } from "modules/ShippingSolutions";
import { AboutPlatform } from "modules/AboutPlatform";
import { BannerBlock } from "modules/BannerBlock";
import { StartShipping } from "modules/StartShipping";
import { HomeLogosList } from "modules/HomeLogosList";
import { ShipRates } from "modules/ShipRates";
import circles from "../assets/jpeg/integrations-circles.jpg";
import { ContentBlock } from "modules/ContentBlock";
import Button from "src/components/Button";


export const Home = () => {
  return (
    <article className="flex flex-col items-center">
      {/* <ShippingSolutions /> */}
      {/* <HomeLogosList />*/}
    
      <AboutPlatform /> 
    <ShipRates /> 
      <StartShipping />
      <ContentBlock imgHeight={460} imgWidth={450} img={circles} imgPosition="right">
        <section className="flex flex-col gap-8 max-w-[85%]">
          <h2 className="text-adptive-ml font-bold">Seamless Integration</h2>
          <p className="text-[17px]">
            Our solution directly integrates with Shipping Platforms, eCommerce Platforms, Warehouse Management systems, and custom WMS/ERP Systems through our global shipping API.
          </p>
          <Button className="w-[193px] h-[53px] text-[13px]" label="See All Integrations" />
        </section>
      </ContentBlock>
      <BannerBlock />
      
    </article>
  );
};

export default Home;