import { BrandCarts } from "modules/BrandCarts";
import { ParallaxBlock } from "modules/ParallaxBlock";
import { TopBlock } from "modules/TopBlock";
import { JoinForm } from "modules/JoinForm";
import { AanimatedList } from "src/components/AanimatedList";


export const Pricing = () => {
    return (
        <article className="flex flex-col items-center">
            <h2>Request a Quote</h2>
            <h4>Compare rates to see how much you can save.</h4>
            <section className="flex gap-20 xl:min-w-[1245px]">
                <div className="w-2/4 ">
                    <AanimatedList adapted />
                    <div className="flex gap-16 border-t border-gray-divider pt-10 pl-2">
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
            {/*<ParallaxBlock />
      <BrandCarts /> */}

        </article>
    );
};

export default Pricing;
