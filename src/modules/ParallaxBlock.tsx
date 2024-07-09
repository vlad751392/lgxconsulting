import Bg from '../assets/jpeg/freeway.jpg'
import BannerImagePhone from '../assets/jpeg/mobile-fashion-brand.jpg'
import { Parallax } from "react-parallax";

interface AnimatedTextProps {
    img: string;
  }

export const ParallaxBlock: React.FC<AnimatedTextProps> = ({ img }) => {
    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      };

    return (
      <article className="xl:max-w-[1100px] 2xl:max-w-[1245px] rounded-3xl  opacity-0 animate-appearsFromBottomLong my-8 container">

        <Parallax
          className=""
          bgImage={img}
          strength={300}    
        >
            <div style={{ height: 100 }} />
        </Parallax>
      </article>
    );
  };
  
  export default ParallaxBlock;