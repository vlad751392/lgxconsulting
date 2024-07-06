import { logos, Logos } from './configs/HomeLogosListConfig'

export const HomeLogosList = () => {
    return (
        <article >
            <section className='container mx-auto max-w-[1245px] flex gap-[85px] py-28'>
                {logos.map((logo: Logos) => (
                    <img className='w-56 h-28' key={logo.id} src={logo.photo} alt="Icon" />
                ))
                }
            </section>
        </article>
    );
};