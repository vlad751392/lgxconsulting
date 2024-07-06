import { carts, Carts } from './configs/AboutPlatformConfig'

export const AboutPlatform = () => {
    return (
        <article className="bg-[#f6f6f6]">
            <section className='container mx-auto'>
                <h2 className='text-adptive-l font-bold'>Free shipping platform.</h2>
                <p className='text-2xl'>Connect your store to our free shipping software or use your existing teach-stack with our discounted rates.</p>
                <div className='flex flex-wrap max-w-[820px]'>
                {carts.map((cart: Carts) => (
                    <div className='flex flex-col max-w-[360px]'>
                        <img className='w-10 h-10' src={cart.photo} alt="Icon" />
                        <h4 className='text-2xl font-bold'>{cart.title}</h4>
                        <p className='text-17px'>{cart.description}</p>
                    </div>
                ))
                }
                </div>
            </section>
        </article>
    );
};