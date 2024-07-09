import BannerImage from '../assets/jpeg/address-label-on-package.jpg'
import BannerImagePhone from '../assets/png/girl-mobile.png'

export const BannerBlock = () => {
    return (
      <article className="rounded-[20px] bg-gray-regular gap-10 container flex-col lg:flex-row flex mt-10 mb-[120px] xl:max-w-[1100px] 2xl:max-w-[1245px] mx-6 sm:mx-0">
        <img className='rounded-[20px] hidden lg:block w-[390px] h-[500px]' src={BannerImage} alt="" />
        <img className='rounded-[20px] block lg:hidden ' src={BannerImagePhone} alt="" />
        <section className="flex flex-col px-[8%] justify-center gap-8">
        <h6 className='text-[13px] font-bold'>CLIENT REVIEW</h6>
        <p className='text-2xl font-bold pt-3'>LGX Consulting has revolutionized our logistics and delivery processes. Their innovative cost-cutting strategies have saved us significant money, and our products are now delivered more quickly than ever. Their customer service is unparalleled, always courteous and efficient.</p>
        <p>–</p>
        <p className='pb-8 lg:pb-0'>Apparel Brand • New York, CA</p>
        </section>
      </article>
    );
  };
  
  export default BannerBlock;