import { ContentBlock } from "modules/ContentBlock";
import Arrow from '../assets/svg/right-arrow.svg?react';
import joinus from "../assets/jpeg/joinus.jpg";

export const About = () => {
  return (
    <article className="flex flex-col items-center px-6 sm:px-0">
      <div className="bg-blue-secondary w-[100vw] px-6 sm:px-0 sm:w-full  gap-4">
        <div className="xl:max-w-[1100px] 2xl:max-w-[1245px] mx-auto justify-between pt-20 sm:pt-48 sm:pb-36 2xl:pt-80 pb-20 2xl:pb-72 container flex flex-col lg:flex-row">
        <h1 className="text-white text-adptive-l 2xl:text-adptive-2l font-bold w-full lg:w-2/6">About&nbsp;Us</h1>
        <h3 className="text-white font-bold w-full pt-6 lg:pt-0 text-adptive-m lg:w-4/6">
          LGX Consulting’s backbone is a group of talented and exceptionally trained
          logistics professionals with over 20 years of experience in the
          industry. Coming from different paths of life from technology startups
          to major corporate shipping companies, we united around one passion –
          to make shipping simpler.
        </h3>
        </div>
      </div>
      <div className="bg-white xl:max-w-[1100px] 2xl:max-w-[1245px] mx-auto container  w-full py-28 flex flex-col lg:flex-row gap-4">
        <h2 className="font-bold text-[13px] w-full lg:w-2/6">WHY&nbsp;LGX&nbsp;CONSULTING</h2>
        <h3 className=" font-bold text-adptive-m w-full lg:w-4/6">
          We specialize in the outbound shipping strategy for B2B, B2C, service,
          wholesale, supplier, or e-commerce businesses.
          <br />
          <br />
          Being in business for over 20 years, we have seen success across all
          industries including perishable, non-perishable goods, textiles,
          apparel, equipment, and more. With our fulfillment center and 3PL
          partners, we help businesses with end-to-end logistics fulfillment and
          distribution.
        </h3>
      </div>
      <div className="bg-[#f6f6f6] xl:max-w-[1100px] 2xl:max-w-[1245px] mx-auto container rounded-[20px] py-14 sm:py-36 md:mb-0 mb-14 gap-4">
        <div className="max-w-[996px] flex flex-col lg:flex-row mx-auto">
        <h2 className="text-adptive-ml font-bold px-8 sm:px-16 lg:px-0 w-full lg:w-1/3">Our&nbsp;Values</h2>

        <div className="flex flex-wrap justify-end pt-8 lg:pt-0 px-8 sm:px-16 lg:px-0 gap-8 w-full lg:w-2/3">
          <div className="flex flex-col flex-wrap w-full lg:w-[45%] ">
            <h3 className=" font-bold text-adptive-m text-[#3c83e0]">Commitment</h3>
            <p>
              We don’t settle until we match you with the best shipping strategy
              and rates.
            </p>
          </div>
          <div className="flex flex-col flex-wrap w-full lg:w-[45%]">
            <h3 className=" font-bold text-adptive-m text-[#3c83e0]">Transparency</h3>
            <p>
              We value full transparency with our clients, no hidden fees,
              you’ll know your rates and discounts at all times.
            </p>
          </div>
          <div className="flex flex-col flex-wrap w-full lg:w-[45%]">
            <h3 className=" font-bold text-adptive-m text-[#3c83e0]">
              We roll up our sleeves
            </h3>
            <p>We do all the leg work when it comes to managing your rates. </p>
          </div>
          <div className="flex flex-col flex-wrap w-full lg:w-[45%]">
            <h3 className="font-bold text-adptive-m text-[#3c83e0]">
              Operational Excellence
            </h3>
            <p>
              Our team has been nationally recognized for delivering
              unparalleled savings to thousands of customers.
            </p>
          </div>
        </div>
        </div>
      </div>
      <ContentBlock img={joinus} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">We’re Hiring!</h2>
          <h3 className="text-2xl font-bold">
            If you are as passionate about logistics as much as we are, join our
            team!
          </h3>
          <p className="text-[17px] font-bold">Open Positions</p>
          <ul className="list-disc pl-7">
            <li>Account Manager</li>
            <li>Business Development</li>
          </ul>
          <a href="mailto:test" className="overflow-hidden group text-[17px] font-bold">
            <div className="flex"><Arrow className="w-[1.25rem] h-[1.5rem] transition-all -translate-x-full group-hover:translate-x-0" /><p className="transition-all group-hover:translate-x-4 group-hover:text-blue-regular">Join Us!</p></div>
          </a>
        </section>
      </ContentBlock>
    </article>
  );
};

export default About;
