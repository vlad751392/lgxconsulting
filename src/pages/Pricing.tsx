import { JoinForm } from "modules/JoinForm";
import { AanimatedList } from "src/components/AanimatedList";

export const Pricing = () => {
    return (
        <article className="px-5 sm:px-0 flex flex-col items-center mb-16 xl:max-w-[1100px] 2xl:max-w-[1245px] container mx-auto">
            <h2 className="text-adptive-ml font-bold self-start pt-16 pb-5">Request a Quote</h2>
            <h4 className="text-2xl font-bold self-start pb-20">Compare rates to see how much you can save.</h4>
            <section className="flex lg:flex-row flex-col gap-20 container xl:max-w-[1100px] 2xl:max-w-[1245px]">
                <div className="w-full lg:w-2/4">
                    <AanimatedList adapted />
                    <div className="flex gap-20 mt-14 border-t border-gray-divider pt-10 pl-2">
                        <ul className="line-list">
                            <li>Free platform (forever)</li>
                            <li>Unlimited label volume</li>
                        </ul>
                        <ul className="line-list">
                            <li>Easy integration</li>
                            <li>Branded labels</li>
                        </ul>
                    </div>
                </div>
                <JoinForm />
            </section>
            {/* <TopBlock /> */}
            {/* <ParallaxBlock /> */}
            {/* <BrandCarts /> */}
        </article>
    );
};

export default Pricing;
