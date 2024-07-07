import { list, StartShippingList } from './configs/StartShippingConfig'
import Button from 'src/components/Button';

export const StartShipping = () => {
    return (
        <article className="bg-[#f6f6f6] w-full">
            <section className='container xl:max-w-[1245px] mx-auto gap-10 sm:gap-20 flex flex-col py-14 sm:py-28 px-6 sm:px-0'>
                <h3 className='text-adptive-ml font-bold'>How to get started</h3>

                <div className='flex flex-col sm:gap-0 gap-6 lg:flex-row justify-between'>
                    {list.map((item: StartShippingList) => (
                        <div className='flex gap-10 items-center'>
                            <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[rgb(0 0 0 / 10%)] border-2 animate-scale scale-0 flex items-center justify-center text-4xl animation-delay-${item.delay}`}>
                            <p>{item.number}</p></div>
                            <div className={`animate-appearsFromRight  sm:w-[56%] w-[72%] flex items-center opacity-0 animation-delay-${item.delay}`}>
                                <div className='flex flex-col'><h4 className='text-2xl font-bold'>{item.title}</h4>
                                    <p className=''>{item.description}</p></div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <Button className='w-36 h-12 text-[13px]' label='Get Started' />
            </section>
        </article>
    );
};