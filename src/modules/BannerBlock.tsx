import BannerImage from '../assets/jpeg/fashion-brand.jpg'
import BannerImagePhone from '../assets/jpeg/mobile-fashion-brand.jpg'

export const BannerBlock = () => {
    return (
      <article className="rounded-[20px] bg-gray-regular gap-10 container flex-col lg:flex-row flex mt-10 mb-[120px] xl:max-w-[1245px] mx-6 sm:mx-0">
        <img className='rounded-[20px] hidden lg:block w-[390px] h-[500px]' src={BannerImage} alt="" />
        <img className='rounded-[20px] block lg:hidden ' src={BannerImagePhone} alt="" />
        <section className="flex flex-col px-[8%] justify-center gap-8">
        <h6 className='text-[13px] font-bold'>CASE STUDY</h6>
        <p className='text-2xl font-bold pt-3'>Axel Ship has transformed our shipping and delivery operations. They saved us money with cost-saving strategies and delivered products faster than ever. Their customer service is unmatched, always friendly and professional.</p>
        <p>–</p>
        <p className='pb-8 lg:pb-0'>Apparel Brand • Los Angeles, CA</p>
        </section>
      </article>
    );
  };
  
  export default BannerBlock;