import { FC } from "react";
import { FooterList } from "modules/configs/FooterConfig";
import { Link } from "react-router-dom";
import { Logos } from "modules/configs/HomeLogosListConfig";

interface Props {
    config: any;
    logoWidth: number
    logoHeight: number
}

const LogosList: FC<Props> = ({ logoWidth, logoHeight, config }) => {
    return (
        <section className='flex gap-3'>
                {config.map((logo: Logos) => (
                    <img width={logoWidth} height={logoHeight} key={logo.id} src={logo.photo} alt="Icon" />
                ))
                }
            </section>
    );
};

export default LogosList;
