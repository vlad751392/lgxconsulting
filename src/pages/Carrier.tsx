import { ContentBlock } from "modules/ContentBlock";
import regional from "../assets/jpeg/regional-delivery.jpg";
import Button from "src/components/Button";
import IconsList from "src/components/IconsList";
import expand from "../assets/jpeg/expand-your-business.jpg";
import delivery from "../assets/jpeg/regional-carrier-delivery.jpg";
import save from "../assets/jpeg/save-on-3pl-blue.jpg";
import { iconsList, iconsListCarriers, iconsListCarriers2 } from "modules/configs/IconsListConfig";
import { StartShipping } from "modules/StartShipping";
import BannerBlock from "modules/BannerBlock";
import TopContentBlock from "modules/TopContentBlock";
import ParallaxBlock from "modules/ParallaxBlock";
import Bg from '../assets/jpeg/hero-car.jpg'


const Fulfilment = () => {
  return (
    <article className="flex flex-col items-center px-6 sm:px-0">
      <TopContentBlock title="3PL and Warehousing" text="<span>Inventory Management and Minimize</span><span>Holding Costs with the Expertise of 3PL</span><span>Services, Ensuring Seamless Warehousing</span><span>and Distribution.</span>" />
      <ParallaxBlock img={Bg} />
      <ContentBlock img={regional} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
          Optimize Your Supply Chain
          </h2>
          <h3 className="text-[17px] ">
          Unleash the Benefits of Regional Parcel Carriers: Flexibility, Cost Savings, and Unmatched Support. Embracing over 85% coverage of the US population, these carriers excel in short-haul deliveries, surpassing major national and international shipping providers. By establishing direct partnerships with businesses, they extend their reach to specific zip codes within their network.<br /><br />At Axel Ship, we collaborate closely with regional carriers, skillfully negotiating the most competitive prices to serve targeted geographical areas. Experience unparalleled responsiveness, affordability, and speed in our delivery services, as we harness the strength of these regional carriers to propel your business forward.
          </h3>
        </section>
      </ContentBlock>

      <ContentBlock img={expand} imgPosition="left">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
            Expanding Your eCommerce Business
          </h2>
          <h3 className="text-[17px] ">
            Partnering with our 3PL service providers opens doors for market
            expansion and business growth. Streamlined logistics processes
            enhance customer satisfaction while ensuring the protection and
            security of your goods, reducing risks. <br />
            <br />
            With efficient inventory management, you gain flexible options to
            scale your eCommerce business, introduce new products, explore
            emerging markets, and achieve even more.
          </h3>
          <Button label="Get In Touch" className="w-[150px] text-[13px]" />
        </section>
      </ContentBlock>
      <ContentBlock img={delivery} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">Solutions that Save</h2>
          <h3 className="text-[17px] ">
            Customized Solutions for Your Business: We tailor our services to
            fit your needs. Trust us with your eCommerce fulfillment, freeing up
            your time for growth. Our secure warehousing ensures protected and
            trackable goods.
          </h3>
          <ul className="list-disc ml-6">
            <li>We receive</li>
            <li>Store</li>
            <li>Pick and pack</li>
            <li>Track, ship, and deliver</li>
          </ul>
          <h3>Our vast network of partners can do it all.</h3>
          <Button label="Get In Touch" className="w-[150px] text-[13px]" />
        </section>
      </ContentBlock>
      <IconsList title="Featured Regional Carriers" config={iconsListCarriers} />
      <div className="bg-blue-secondary px-6 sm:px-0 w-[100vw] text-white py-32"><div className="mx-auto container xl:max-w-[1100px] 2xl:max-w-[1245px]">
      <IconsList title="Regional Parcel Carrier Advantage" config={iconsListCarriers2} />
      <div className="h-1 bg-gray-secondary w-100% my-24"></div>
      <ContentBlock img={save} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
          Expand with Regional
          Parcel Carriers
          </h2>
          <h3 className="text-[17px] ">
          Check off all your boxes with regional parcel carrier options that offer the smoothest shipping solutions. Keep your customers satisfied and coming back for more. Axel Ship can help to optimize your shipping with our regional partners to offer lower rates and faster delivery.
          </h3>
          <Button label="Get In Touch" className="w-[150px] text-[13px]" />
        </section>
      </ContentBlock>
      </div>
      </div>
      <StartShipping />
      <BannerBlock />
    </article>
  );
};

export default Fulfilment;
