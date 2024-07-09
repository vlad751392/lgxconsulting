import { carts, Carts } from './configs/AboutPlatformConfig'
import Platform from '../assets/png/free-platform.png'
import Button from 'src/components/Button';
import AnimatedText from 'src/components/AnimatedText';

export const AboutPlatform = () => {
    return (
        <article className="bg-[#f6f6f6] w-[100vw] px-5 sm:px-0 sm:w-full">
            <section className='container mx-auto xl:max-w-[1100px] 2xl:max-w-[1245px] py-10 flex flex-col'>
                <h2 className='text-adptive-l font-bold pt-10'>Free shipping platform.</h2>
                <AnimatedText className='text-xl lg:text-2xl xl:w-3/4' text='<span>Connect your store to our free shipping software or use your existing</span><span>teach-stack with our discounted rates.</span>' />
                <div className='self-end'>
                <img src={Platform} className='md:w-[817px] md:h-[365px]' alt="" />
                <div className='flex flex-wrap gap-6 py-7 justify-between max-w-[844px]'>
                {carts.map((cart: Carts) => (
                    <div className='flex flex-col md:max-w-[372px]'>
                        <img className='w-10 h-10' src={cart.photo} alt="Icon" />
                        <h4 className='text-2xl font-bold py-7'>{cart.title}</h4>
                        <p className='text-17px'>{cart.description}</p>
                    </div>
                ))
                }
                </div>
                <Button nav='/shipping' className='w-[170px] text-[13px] h-12' label='See all features' />
                </div>
            </section>
        </article>
    );
};