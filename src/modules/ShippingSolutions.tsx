/// <reference types="vite-plugin-svgr/client" />

import  YellowLine  from '../assets/svg/yellowLine.svg?react';
import cart from '../assets/png/hero-cart-lightbluebg.jpg'
import Button from 'src/components/Button';
import Stat1 from 'src/assets/jpeg/animating-graph.jpg'
import Stat2 from 'src/assets/jpeg/small-hero.jpg'

export const ShippingSolutions = () => {
  return (
    <section className="flex mt-24 container max-w-[1245px] items-center">
      <div className='max-w-[600px]'>
        <div className='animate-appearsFromBottom anim-delay'>
      <h1 className='font-bold text-[62px]'>Shipping solutions for <em className='relative inline-block whitespace-nowrap'>e-commerce<YellowLine className='absolute left-0 w-full top-auto h-[30%] bottom-[-20%]' /></em></h1>
      <p className='pt-10 pb-5 text-2xl'>Free shipping software with pre-negotiated pricing with DHL.</p>
      <p className='text-[14px] pb-10'>No monthly costs or additional fees.</p>
      </div>
      <Button className='text-[17px] py-[15px] px-[35px] animate-appearsFromBottom' label='Compare Rates' />
      </div>
      <div className='max-w-64 relative top-[90px] left-40'>
        <img src={Stat1} className='rounded-[20px] ' alt="" />
        <img src={Stat2} className='rounded-[20px] mt-[10px]' alt="" />
      </div>
      <img className='h-[500px] w-[500px] rounded-[30px] animate-appearsFromBottom' src={cart} alt="" />
    </section>
  );
};

export default ShippingSolutions;