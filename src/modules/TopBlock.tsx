/// <reference types="vite-plugin-svgr/client" />

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import YellowLine from '../assets/svg/yellowLine.svg?react';
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
        <section ref={ref} className="flex mt-24 container xl:max-w-[1245px] items-center">
            <div className={`max-w-[600px]  ${isVisible ? 'animate-appearsFromBottom' : 'opacity-0'}`} >
                <div >
                    <h2 className='font-bold text-[80px]'><em className='relative inline-block whitespace-nowrap leading-none'>Seamless<YellowLine className='absolute left-0 w-full top-auto h-[30%] bottom-[-20%]' /></em>Integration</h2>
                </div>
                <Button className='mt-[50px] text-[17px] py-[15px] px-[35px]' label='Get Started' />
            </div>
            <div className=''>
            <AnimatedText text='<span>Simplify your shipping operations:</span><span>Integrate our global logistics shipping API</span><span>with your existing techstack.</span>' />
            <div className={`'max-w-48 ${isVisible ? 'animate-appearsFromBottom' : 'opacity-0'}`}>
                <LogosList config={logos} logoWidth={40} logoHeight={40}/>
                <p><span className='font-bold'>60+</span> integrations</p>
            </div>
            </div>
        </section>
    );
};

export default TopBlock;