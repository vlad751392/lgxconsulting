import { list, StartShippingList } from './configs/StartShippingConfig'
import Button from 'src/components/Button';

export const StartShipping = () => {
    return (
        <article className="bg-[#f6f6f6] w-full">
            <section className='container mx-auto'>
                <h3 className='text-adptive-m font-bold'>How to get started</h3>

                <div className='flex flex-wrap gap-[120px]'>
                    {list.map((item: StartShippingList) => (
                        <div className='flex gap-10'>
                            <div className='w-20 h-20 rounded-full border-[rgb(0 0 0 / 10%)] border-2 animate-scale flex items-center justify-center text-4xl'><p>{item.number}</p></div>
                            <div className='animate-appearsFromRight max-w-[256px]'>
                                <div className='flex flex-col'><h4 className='text-2xl font-bold'>{item.title}</h4>
                                    <p className=''>{item.description}</p></div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <Button className='py-[13px] px-[35px] text-[13px]' label='Get Started' />
            </section>
        </article>
    );
};