import { ContentBlock } from "modules/ContentBlock";
import comprehensive from "../assets/jpeg/comprehensive-3pl.jpg";
import freight from "../assets/jpeg/freight-forwarding.jpg";
import delivery from "../assets/jpeg/freight-forwarding-delivery.jpg";
import Button from "src/components/Button";
import IconsList from "src/components/IconsList";
import { iconsList, iconsListForwarding } from "modules/configs/IconsListConfig";
import { StartShipping } from "modules/StartShipping";
import BannerBlock from "modules/BannerBlock";
import TopContentBlock from "modules/TopContentBlock";
import ParallaxBlock from "modules/ParallaxBlock";
import Bg from '../assets/jpeg/hero-fright.jpg'

const Forwarding = () => {
  return (
    <article className="flex flex-col items-center px-6 sm:px-0">
      <TopContentBlock title="Freight Forwarding" text="<span>Unlock Maximum Cost Efficiency with</span><span>Unbeatable Air Rates for Your Import and</span><span>Export Requirements.</span>" />
      <ParallaxBlock img={Bg} />
      <ContentBlock img={freight} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
          Freight Forwarding
          for Your Business
          </h2>
          <h3 className="text-[17px] ">
          Our freight forwarding service specializes in efficient global transportation of your goods, whether for imports or exports. Our expertise in best practices, regulations, and coordination ensures timely delivery of your cargo across borders and overseas.
          </h3>
        </section>
      </ContentBlock>

      <ContentBlock img={delivery} imgPosition="left">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
          Expand with Freight Forwarders
          </h2>
          <h3 className="text-[17px] ">
          Streamline your import and export operations effortlessly. Our freight forwarders accompany you every step of the way, guaranteeing prompt services, seamless tracking using cutting-edge technology, and the highest level of safety and security for your goods. Our trusted partners handle your shipments with utmost care. We excel at finding you the most cost-effective prices by refining your choices, and we stay up-to-date on the necessary documentation for hassle-free customs clearance and smooth border crossings.
          </h3>
          <Button label="Get In Touch" className="w-[150px] text-[13px]" />
        </section>
      </ContentBlock>
      <IconsList title="Freight Needs Fulfilled" config={iconsListForwarding} />
      <StartShipping />
      <BannerBlock />
    </article>
  );
};

export default Forwarding;
