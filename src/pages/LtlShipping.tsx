import { ContentBlock } from "modules/ContentBlock";
import comprehensive from "../assets/jpeg/comprehensive-3pl.jpg";
import Button from "src/components/Button";
import IconsList from "src/components/IconsList";
import { iconsList } from "modules/configs/IconsListConfig";
import { StartShipping } from "modules/StartShipping";
import BannerBlock from "modules/BannerBlock";
import TopContentBlock from "modules/TopContentBlock";
import ParallaxBlock from "modules/ParallaxBlock";
import Bg from '../assets/jpeg/hero-ltl.jpg'

const Shipping = () => {
  return (
    <article className="flex flex-col items-center">
      <TopContentBlock title="Maximize Savings with LTL Shipping" text="<span>Streamlined Delivery Solutions for</span><span>eCommerce, D2C, and B2B: Seamless</span><span>Large Parcel Transport.</span>" />
      <ParallaxBlock img={Bg} />
      <ContentBlock img={comprehensive} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
            Comprehensive Third-Party Logistics (3PL)
          </h2>
          <h3 className="text-[17px] ">
            Managing order fulfillment as an eCommerce business owner can be
            time-consuming. Axel Ship offers expert 3PL services to simplify
            your shipping process and improve efficiency, allowing you to focus
            on day-to-day operations. <br />
            <br />
            Our comprehensive solutions encompass distribution, warehousing, and
            fulfillment, making us your go-to logistics partner.
          </h3>
        </section>
      </ContentBlock>

      <ContentBlock img={comprehensive} imgPosition="left">
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
      <ContentBlock img={comprehensive} imgPosition="right">
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
      <IconsList config={iconsList} />
      <StartShipping />
      <BannerBlock />
    </article>
  );
};

export default Shipping;
