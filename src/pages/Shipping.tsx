import { BrandCarts } from "modules/BrandCarts";
import { ParallaxBlock } from "modules/ParallaxBlock";
import { TopSgippingBlock } from "modules/TopSgippingBlock";
import { ContentBlock } from "modules/ContentBlock";
import Bg from '../assets/jpeg/Plaform-hero.jpg'
import comprehensive from "../assets/jpeg/comprehensive-3pl.jpg";
import compare from "../assets/jpeg/axel-ship-compare.jpg";
import Button from "src/components/Button";
import BannerBlock from "modules/BannerBlock";
import { StartShipping } from "modules/StartShipping";



export const Shipping = () => {
    return (
        <article className="flex flex-col items-center">
            <TopSgippingBlock />
            <ParallaxBlock img={Bg} />
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
            <StartShipping />
            <div className="flex container justify-between xl:max-w-[1245px] gap-16 pt-10 pl-2">
                <ul className="line-list">
                    <li>No Platform Fee</li>
                    <li>No Per Label Fee</li>
                    <li>Unlimited Labels</li>
                    <li>Best USPS Discounts</li>
                    <li>Branded Labels</li>
                    <li>Email / Phone Customer Support</li>
                    <li>10+ User Accounts</li>
                    <li>Web App</li>
                </ul>
                <ul className="line-list">
                    <li>API Access</li>
                    <li>Global Carrier Discounts</li>
                    <li>Use Your Negotiated Rates</li>
                    <li>Unlimited Carrier Accounts</li>
                    <li>Rates at a Glance</li>
                    <li>Unlimited Platform Integrations</li>
                    <li>API: Orders Endpoint</li>
                    <li>API: Batch Endpoint</li>
                </ul>
                <ul className="line-list">
                    <li>Multi-piece Shipments</li>
                    <li>Insurance</li>
                    <li>U.S. Address Validation</li>
                    <li>Global Address Validation</li>
                    <li>Best in Class Uptime</li>
                    <li>Integration Specialist</li>
                    <li>A La Carte Package Tracking</li>
                    <li>A La Carte Address Verification</li>
                </ul>
            </div>
            <ContentBlock img={compare} imgPosition="right">
                <section className="flex flex-col gap-6">
                    <h2 className="text-5xl font-bold">Axel Ship Advantage
                    </h2>
                    <p className="text-[17px] ">
                    We specialize in the outbound shipping strategy for B2B, B2C, service, wholesale, supplier, or e-commerce businesses.
                    </p>
                    <p className="text-[17px] ">
                        <br />
                    Being in business for over 20 years, we have seen success across all industries including perishable, non-perishable goods, textiles, apparel, equipment, and more.  With our fulfillment center and 3PL partners, we help businesses with end-to-end logistics fulfillment and distribution.
                    </p>
                    <Button label="Compare Rates" className="w-[150px] text-[13px]" />
                </section>
            </ContentBlock>
            <BannerBlock />
            {/*<BrandCarts /> */}

        </article>
    );
};

export default Shipping;
