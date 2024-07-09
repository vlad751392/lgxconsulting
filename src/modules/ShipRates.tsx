import { logos, Logos } from './configs/HomeLogosListConfig'
import Box from '../assets/svg/black-box.svg?react';
import animationData from '../assets/lottie/background.json';
import Lottie from 'react-lottie';
import AnimatedText from 'src/components/AnimatedText';

export const ShipRates = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <section className='my-11 p-6 sm:px-0 container xl:max-w-[1100px] 2xl:max-w-[1245px]'>
            <div>
                <h2 className='text-adptive-l font-bold pt-10'>Ship with the lowest rates.</h2>
                <AnimatedText className='text-xl lg:text-2xl xl:w-3/4' text='<span>We&apos;re able to negotiate the best rates because of our shipping volume,</span><span>which we pass on to our customers.</span>' />
            </div>
            <div className='flex flex-col lg:flex-row border-t border-gray-secondary pt-16'>
            <div className='bg-blue-regular p-10 lg:w-[380px] gap-3 flex flex-col rounded-2xl text-white relative overflow-hidden shadow-custom'>
                <div className='absolute top-[-260px] left-[142px]'>
                    <Lottie options={defaultOptions} height={550} width={550} />
                </div>
                <Box fill='#fff' />
                <p className='text-2xl leading-none'>LGX Consulting</p>
                <p className='text-adptive-l leading-none'>Free</p>
                <ul className='list-dot pt-4'>
                    <li>Unlimited shipments</li>
                    <li>No minimums</li>
                    <li>No subscription fees</li>
                    <li>Unlimited labels</li>
                    <li>Rates at a glance</li>
                    <li>Insurance</li>
                </ul>
                <div className="staircase-container rounded-[35px] mt-10 w-full h-[55px] bg-white">
                    <div className="staircase-text w-full h-full justify-center items-center text-black">
                        <span>G</span>
                        <span>e</span>
                        <span>t </span>
                        <span>&nbsp;</span>
                        <span>S</span>
                        <span>t</span>
                        <span>a</span>
                        <span>r</span>
                        <span>t</span>
                        <span>e</span>
                        <span>d</span>
                    </div>
                </div>
            </div>
            <div className='p-10 lg:ml-10 ml-0 lg:w-[373px] gap-3 flex flex-col rounded-2xl relative overflow-hidden'>
                <Box />
                <p className='text-2xl leading-none pb-4'>ShipStation</p>
                <p className='text-adptive-l leading-none font-bold'><sup className='text-[50%] align-[unset] top-[-1em]'>$</sup>99/<span className='text-[26px]'> month</span></p>
                <ul className='list-dot pt-4'>
                    <li>Up to 2k shipments
                    </li>
                    <li>Up to 3 users</li>
                    <li>No subscription fees</li>
                    <li>Monthly fee</li>
                    <li>Individual carrier accounts for an additional fee</li>
                </ul>

            </div>
            <div className='p-10 lg:w-[390px] gap-3 flex flex-col rounded-2xl relative overflow-hidden'>
                <Box />
                <p className='text-2xl leading-none pb-4'>Shippo</p>
                <p className='text-adptive-l leading-none font-bold'><sup className='text-[50%] align-[unset] top-[-1em]'>$</sup>19/<span className='text-[26px]'> month</span></p>
                <ul className='list-dot pt-4'>
                    <li>Up to 31 shipments per month
                    </li>
                    <li>Up to 3 users</li>
                    <li>Up to 10k labels per month</li>
                    <li>Monthly fee</li>
                    <li>Up to 5 user accounts</li>
                </ul>

            </div>
            </div>
            <p className='pt-8'>Pricing sources: https://www.shipstation.com/pricing/, https://goshippo.com/pricing. Updated June 2024.</p>
        </section>
    );
};