/// <reference types="vite-plugin-svgr/client" />

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BlueLine from '../assets/svg/blueLine.svg?react';
import AnimatedText from 'src/components/AnimatedText';
import LogosList from 'src/components/LogosList';
import { Logos, logos } from './configs/TopBlockConfig';

import Button from 'src/components/Button';

interface AnimatedTextProps {
    text: string;
    divClass?: string;
}

export const TopBlock = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // чтобы анимация сработала только один раз
        threshold: 0.5, // порог видимости 50%
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <section ref={ref} className=" flex flex-col lg:flex-row mt-24 justify-center lg:justify-between container overflow-hidden xl:max-w-[1100px] 2xl:max-w-[1245px] items-center">
            <div className={`overflow-hidden text-center lg:w-3/5 lg:text-left  ${isVisible ? 'animate-appearsFromBottom' : 'opacity-0'}`} >
                <div >
                    <h2 className='font-bold text-[52px] sm:text-[80px] leading-[1.1]'><em className='relative svg-container inline-block whitespace-nowrap leading-none'>Seamless<BlueLine className=" absolute left-0 w-full top-auto h-[30%] bottom-[-20%]" /></em>Integration</h2>
                </div>
                <Button nav='/pricing' className='mt-[50px] text-[17px] py-[15px] px-[35px]' label='Get Started' />
            </div>
            <div className='flex flex-col self-end lg:w-2/5'>
            <AnimatedText className='text-center lg:text-left pt-14 md:pt-10 text-2xl pb-10' text='<span>Simplify your shipping operations:</span><span>Integrate our global logistics shipping API</span><span>with your existing techstack.</span>' />
            <div className={`'max-w-48 mx-auto lg:mx-0 lg:justify-normal ${isVisible ? 'animate-appearsFromBottom' : 'opacity-0'}`}>
                <LogosList config={logos} logoWidth={40} logoHeight={40}/>
                <p className='text-center lg:text-left'><span className='font-bold'>60+</span> integrations</p>
            </div>
            </div>
        </section>
    );
};

export default TopBlock;