import { carts, Carts } from './configs/AboutPlatformConfig'
import Platform from '../assets/png/free-platform.png'
import Button from 'src/components/Button';

export const AboutPlatform = () => {
    return (
        <article className="bg-[#f6f6f6] w-full">
            <section className='container mx-auto max-w-[1245px] flex flex-col'>
                <h2 className='text-adptive-l font-bold pt-10'>Free shipping platform.</h2>
                <div className='max-w-[810px] pb-12'> <p className='text-2xl'>Connect your store to our free shipping software or use your existing teach-stack with our discounted rates.</p></div>
                
                
                <img src={Platform} className='w-[817px] h-[365px] self-end' alt="" />
                <div className='flex flex-wrap gap-[100px] max-w-[844px] self-end'>
                {carts.map((cart: Carts) => (
                    <div className='flex flex-col max-w-[372px]'>
                        <img className='w-10 h-10' src={cart.photo} alt="Icon" />
                        <h4 className='text-2xl font-bold py-7'>{cart.title}</h4>
                        <p className='text-17px'>{cart.description}</p>
                    </div>
                ))
                }
                </div>
                <Button label='See all features' />
            </section>
        </article>
    );
};