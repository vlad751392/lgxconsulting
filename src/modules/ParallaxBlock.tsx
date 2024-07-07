import Bg from '../assets/jpeg/freeway.jpg'
import BannerImagePhone from '../assets/jpeg/mobile-fashion-brand.jpg'
import { Parallax } from "react-parallax";

export const ParallaxBlock = () => {
    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      };

    return (
      <article className=" my-52 container">

        <Parallax
          className=""
          bgImage={Bg}
          strength={600}
        >
            <div className='h-[890px]'>
                <img src={Bg} className=' opacity-0' alt="" />
            </div>
        </Parallax>
      </article>
    );
  };
  
  export default ParallaxBlock;