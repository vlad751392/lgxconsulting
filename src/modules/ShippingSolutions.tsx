import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import YellowLine from '../assets/svg/yellowLine.svg?react';
import cart from '../assets/png/online-shopping-1.png';
import Button from 'src/components/Button';
import animationData from '../assets/lottie/home.json';
import Stat1 from 'src/assets/jpeg/animating-graph.jpg';
import Stat2 from 'src/assets/jpeg/small-hero.jpg';

export const ShippingSolutions = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationActive(true);
    }, 900); // задержка 500ms

    return () => clearTimeout(timer);
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: isAnimationActive,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="flex flex-col lg:flex-row mt-24 overflow-hidden container justify-between relative items-center xl:max-w-[1100px] 2xl:max-w-[1245px]">
      <div className="max-w-[600px]">
        <div className="animate-appearsFromBottom opacity-0 animation-delay-1200">
          <h1 className="font-bold text-adptive-xl">
            Shipping solutions for
            <em className="relative inline-block whitespace-nowrap">
              e-commerce
              <YellowLine className="absolute left-0 w-full top-auto h-[30%] bottom-[-20%]" />
            </em>
          </h1>
          <p className="pt-10 pb-5 text-2xl">Free shipping software with pre-negotiated pricing with DHL.</p>
          <p className="text-[14px] pb-10">No monthly costs or additional fees.</p>
        </div>
        <Button nav='/pricing' className="text-[17px] py-[15px] px-[35px] animate-appearsFromBottom" label="Compare Rates" />
      </div>

      <div className="relative img-container w-full h-full pt-7 sm:mp-0 sm:h-[534px] sm:w-[500px] rounded-[30px] animate-appearsFromBottom">
        <img className="rounded-[30px]" src={cart} alt="" />
      </div>
      <div className="animate-appearsFromBottom animation-delay-1200 opacity-0 max-w-64 absolute top-[90px] left-[40rem] hide-anim hidden xl:hidden">
        <img src={Stat1} className="rounded-[20px]" alt="" />
        <img src={Stat2} className="rounded-[20px] mt-[10px]" alt="" />
        <div className="absolute top-0 w-[100px] h-[100px]">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </section>
  );
};

export default ShippingSolutions;
