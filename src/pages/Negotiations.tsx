import { ContentBlock } from "modules/ContentBlock";
import negotiations from "../assets/jpeg/negotiations.jpg";
import Button from "src/components/Button";
import IconsList from "src/components/IconsList";
import { iconsList, iconsListNegotiation } from "modules/configs/IconsListConfig";
import { StartShipping } from "modules/StartShipping";
import BannerBlock from "modules/BannerBlock";
import TopContentBlock from "modules/TopContentBlock";
import ParallaxBlock from "modules/ParallaxBlock";
import Bg from '../assets/jpeg/hero-negotiations.jpg'

const Negotiations = () => {
  return (
    <article className="flex flex-col items-center mx-6 sm:mx-0">
      <TopContentBlock title="Shipping Contract Negotiations" text="<span>Unlock Exclusive Cost Savings: Leverage</span><span>Our Expertise to Skillfully Negotiate</span><span>Optimal Discounts with Carriers.</span>" />
      <ParallaxBlock img={Bg} />
      <ContentBlock img={negotiations} imgPosition="right">
        <section className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">A Better Way to Navigate Negotiations</h2>
          <h3 className="text-[17px] ">
          Let Us Shoulder the Burden While You Reap the Benefits. At AxelShip, we understand that time and money are valuable resources. Don’t navigate the negotiation process alone—our dedicated team is here to assist.
Leveraging our expansive network, profound industry knowledge, and expertise, we match you with contract negotiators who are tailor-made for your unique business requirements. Experience a reduction in transportation expenses while forging a mutually advantageous relationship with your carrier, all with the peace of mind that AxelShip has got you covered.
          </h3>
        </section>
      </ContentBlock>
      
      <IconsList title="Our Process" config={iconsListNegotiation} />
      <StartShipping />
      <BannerBlock />
    </article>
  );
};

export default Negotiations;
