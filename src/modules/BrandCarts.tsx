import { Carts } from "./configs/AboutPlatformConfig";
import { carts } from "./configs/BrandCards";

export const BrandCarts = () => {
  return (
    <article>
      <section className="container mx-auto">
        <div className="flex flex-wrap max-w-[1245px] gap-[30px]">
          {carts.map((cart: Carts) => (
            <div className="flex flex-col min-w-[230px] flex-1 bg-[#f6f6f6] p-7 rounded-3xl gap-6">
              <img className="w-170 h-70 mx-auto" src={cart.photo} alt="Icon" />
              <div className="mt-1 mb-1 bg-[#c1c1c1] h-[1px]"></div>
              <h4 className="font-bold">{cart.title}</h4>
              <p className="font-regular h5 font-weight-400">
                {cart.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
