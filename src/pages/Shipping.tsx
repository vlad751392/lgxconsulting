import { BrandCarts } from "modules/BrandCarts";
import { ParallaxBlock } from "modules/ParallaxBlock";
import { TopSgippingBlock } from "modules/TopSgippingBlock";
import { ContentBlock } from "modules/ContentBlock";
import Bg from '../assets/jpeg/Plaform-hero.jpg'
import comprehensive from "../assets/png/onboarding.jpg";
import automated from "../assets/jpeg/shipping-automated.jpg";
import compare from "../assets/jpeg/axel-ship-compare.jpg";
import Button from "src/components/Button";
import BannerBlock from "modules/BannerBlock";
import { StartShipping } from "modules/StartShipping";



export const Shipping = () => {
    return (
        <article className="flex flex-col items-center px-5 sm:px-0">
            <TopSgippingBlock />
            <ParallaxBlock img={Bg} />
            <ContentBlock img={comprehensive} imgPosition="right">
                <section className="flex flex-col gap-6">
                    <h2 className="text-5xl font-bold">
                        Expanding Your eCommerce Business
                    </h2>
                    <h3 className="text-[17px] ">
                        Axel Ship ensures a seamless and effortless onboarding experience, enabling brands to scale their businesses while simultaneously reducing shipping costs through our turnkey integrations with major eCommerce platforms like Shopify, Magento, BigCommerce, ShipStation, and more.
                        <br /><br />
                        We simplify the process of incorporating your existing carrier accounts, customizing your shipping labels, and integrating your customer user base to our platform, to provide a hassle-free experience.
                    </h3>
                    <Button nav="/integrations" label="View All Integrations" className="w-[190px] h-[48px] text-[13px]" />
                </section>
            </ContentBlock>
            <ContentBlock img={automated} imgPosition="left">
                <section className="flex flex-col gap-6">
                    <h2 className="text-5xl font-bold">Automate your shipping process</h2>
                    <h3 className="text-[17px] ">
                        LGX Consulting simplifies your shipping process by allowing you to connect all your carriers in one place and compare rates quickly, ensuring that you get the best discounts. Our platform streamlines the process of generating bulk and individual labels for online orders.
                    </h3>
                    <p>Benefits:</p>
                    <ul className="list-disc ml-6">
                        <li>Lower shipping costs for both the business and customers</li>
                        <li>Access to a range of carriers and shipping options</li>
                        <li>Negotiation of volume discounts with carriers</li>
                        <li>Expertise in optimizing shipping operations</li>
                    </ul>
                    <h3>Our vast network of partners can do it all.</h3>
                    <Button nav="/pricing" label="Compare Rates" className="w-[150px] h-[48px] text-[13px]" />
                </section>
            </ContentBlock>
            <StartShipping />
            <div className="flex flex-col md:flex-row container justify-between xl:max-w-[1245px] gap-16 pt-10 pl-2">
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
                    <h2 className="text-5xl font-bold">LGX Advantage
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
