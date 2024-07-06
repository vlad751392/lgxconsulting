import BannerImage from '../assets/jpeg/fashion-brand.jpg'

export const BannerBlock = () => {
    return (
      <article className="rounded-[20px] bg-[yellow] container flex gap-[115px] my-[120px] container max-w-[1280px]">
        <img className='w-[390px] h-[500px]' src={BannerImage} alt="" />
        <section className="flex flex-col">
        <h6>CASE STUDY</h6>
        <p className='text-2xl'>Axel Ship has transformed our shipping and delivery operations. They saved us money with cost-saving strategies and delivered products faster than ever. Their customer service is unmatched, always friendly and professional.</p>
        <p>–</p>
        <p>Apparel Brand • Los Angeles, CA</p>
        </section>
      </article>
    );
  };
  
  export default BannerBlock;