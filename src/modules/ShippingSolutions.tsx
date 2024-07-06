/// <reference types="vite-plugin-svgr/client" />

import  YellowLine  from '../assets/svg/yellowLine.svg?react';
import cart from '../assets/png/hero-cart-lightbluebg.jpg'
import Button from 'src/components/Button';
import Stat1 from 'src/assets/jpeg/animating-graph.jpg'
import Stat2 from 'src/assets/jpeg/small-hero.jpg'

export const ShippingSolutions = () => {
  return (
    <section className="flex mt-24 container max-w-[1280px]">
      <div className='max-w-[600px]'>
      <h1 className='font-bold text-[62px]'>Shipping solutions for <em className='relative inline-block whitespace-nowrap'>e-commerce<YellowLine className='absolute left-0' /></em></h1>
      <p className='py-5 text-2xl'>Free shipping software with pre-negotiated pricing with DHL.</p>
      <p className='text-[14px]'>No monthly costs or additional fees.</p>
      <Button label='Compare Rates' />
      </div>
      <div className='max-w-64'>
        <img src={Stat1} className='rounded-[20px] ' alt="" />
        <img src={Stat2} className='rounded-[20px]' alt="" />
      </div>
      <img className='h-[500px] w-[500px]' src={cart} alt="" />
    </section>
  );
};

export default ShippingSolutions;