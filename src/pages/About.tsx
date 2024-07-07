import { ContentBlock } from "modules/ContentBlock";
import joinus from "../assets/jpeg/joinus.jpg";

export const About = () => {
  return (
    <article className="flex flex-col items-center">
      <div className="bg-[#0a063b] pt-[calc(100vw_*_0.16)] w-full pb-36 flex flex-col px-[9vw] gap-4 xl1000:gap-[13vw] xl1000:flex-row ">
        <h1 className="text-white font-bold">About&nbsp;Us</h1>
        <h3 className="text-white font-bold text-3xl">
          Axel Ship’s backbone is a group of talented and exceptionally trained
          logistics professionals with over 20 years of experience in the
          industry. Coming from different paths of life from technology startups
          to major corporate shipping companies, we united around one passion –
          to make shipping simpler.
        </h3>
      </div>
      <div className="bg-white pt-[calc(100vw_*_0.10)] w-full pb-36 flex flex-col px-[9vw] gap-4 xl1000:gap-[13vw] xl1000:flex-row ">
        <h2 className="font-bold text-[13px]">WHY&nbsp;AXEL&nbsp;SHIP</h2>
        <h3 className=" font-bold text-3xl">
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
      {/* ; */}
      <div className="bg-[#f6f6f6] rounded-[20px] px-[calc((100vw_-_180px)_*_0.10)] pt-[calc(100vw_*_0.10)] w-[85vw] mb-36 pb-36 flex flex-col mx-[9vw] gap-4 xl1000:gap-[8vw] xl1000:flex-row ">
        <h2 className="text-[37px] font-bold">Our&nbsp;Values</h2>

        <div className="flex flex-wrap gap-[12px] xl1000:flex-row">
          <div className="flex flex-col flex-wrap gap-[12px] xl1000:px-[30px] w-[100%] xl1000:w-[40%] xl1000:flex-col">
            <h3 className=" font-bold text-2xl text-[#016af4]">Commitment</h3>
            <p>
              We don’t settle until we match you with the best shipping strategy
              and rates.{" "}
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-[12px] xl1000:px-[30px] w-[100%] xl1000:w-[40%]">
            <h3 className=" font-bold text-2xl text-[#016af4]">Transparency</h3>
            <p>
              We value full transparency with our clients, no hidden fees,
              you’ll know your rates and discounts at all times.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-[12px] xl1000:px-[30px] w-[100%] mt-10 xl1000:mt-0 xl1000:w-[40%]">
            <h3 className=" font-bold text-2xl text-[#016af4]">
              We roll up our sleeves
            </h3>
            <p>We do all the leg work when it comes to managing your rates. </p>
          </div>
          <div className="flex flex-col flex-wrap gap-[12px] xl1000:px-[30px] w-[100%] xl1000:w-[40%]">
            <h3 className=" font-bold text-2xl text-[#016af4]">
              Operational Excellence
            </h3>
            <p>
              Our team has been nationally recognized for delivering
              unparalleled savings to thousands of customers.
            </p>
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
          <ul>
            <li>Account Manager</li>
            <li>Business Development</li>
          </ul>
          <a href="" className="text-[17px] font-bold">
            Join Us!
          </a>
        </section>
      </ContentBlock>
    </article>
  );
};

export default About;
