import { ContentBlock } from "modules/ContentBlock";
import shipping from "../assets/jpeg/ltl-shipping-trucking.jpg";
import ltlShipping from "../assets/jpeg/ltl-shipping.jpg";
import ltl2 from "../assets/jpeg/ltl-2.jpg";
import Button from "src/components/Button";
import IconsList from "src/components/IconsList";
import { iconsList, iconsListLtl } from "modules/configs/IconsListConfig";
import { StartShipping } from "modules/StartShipping";
import BannerBlock from "modules/BannerBlock";
import TopContentBlock from "modules/TopContentBlock";
import ParallaxBlock from "modules/ParallaxBlock";
import Bg from '../assets/jpeg/hero-ltl.jpeg'

const Shipping = () => {
  return (
    <article className="flex flex-col items-center px-6 sm:px-0">
      <TopContentBlock title="Maximize Savings with LTL Shipping" text="<span>Streamlined Delivery Solutions for</span><span>eCommerce, D2C, and B2B: Seamless</span><span>Large Parcel Transport.</span>" />
      <ParallaxBlock img={Bg} />
      <ContentBlock img={ltlShipping} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
          What Is LTL Shipping?
          </h2>
          <h3>Efficient Solutions for Small Package and Freight Transportation: Unlock Savings with Less-than-Truckload (LTL) Shipping. Seamlessly share trailer space, known as capacity sharing, to maximize cost-effectiveness while enjoying a range of added advantages tailor-made for small businesses.</h3>
          <ul className="list-disc ml-6">
            <li>Small package and freight transportation</li>
            <li>Cost-effective LTL shipping</li>
            <li>Capacity sharing benefits</li>
            <li>Efficient solutions for businesses</li>
            <li>Maximizing savings and advantages</li>
          </ul>
          
        </section>
      </ContentBlock>

      <ContentBlock img={shipping} imgPosition="left">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
          Business Benefits with LTL
          </h2>
          <h3 className="text-[17px] ">
          Unlock the Benefits of LTL Shipping: Your Ideal Choice for eCommerce, Small Businesses, and Small Shipments. Experience Remarkable Cost Savings through Capacity Sharing, paying only for the trailer space you utilize. Enhance Package Security with Palletized or Crated Goods. Enjoy Added Flexibility with Expedited Shipping, Lift Gate, Tracking, and More for a Convenient LTL Shipping Experience.
          </h3>
          <Button label="Get In Touch" className="w-[150px] text-[13px]" />
        </section>
      </ContentBlock>
      <ContentBlock img={ltl2} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">Scale with LTL Shipping</h2>
          <h3 className="text-[17px] ">
          Accelerate Your Business Expansion with Streamlined LTL Shipping Solutions. Seamlessly Scale Without Missing a Step. Instant Rates, Reliable Carrier Network, and Transparent Communication from Our Dedicated Logistics Team Ensure Smooth Operations and Rapid Growth.
          </h3>
          <ul className="list-disc ml-6">
            <li>Fast and straightforward LTL shipping</li>
            <li>Seamless business growth</li>
            <li>Transparent communication</li>
            <li>Dedicated logistics support</li>
          </ul>
          <h3>Our vast network of partners can do it all.</h3>
          <Button label="Get In Touch" className="w-[150px] text-[13px]" />
        </section>
      </ContentBlock>
      <IconsList title="Specialized Services" config={iconsListLtl} />
      <StartShipping />
      <BannerBlock />
    </article>
  );
};

export default Shipping;
