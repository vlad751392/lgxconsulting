import { logos, Logos } from './configs/HomeLogosListConfig'

export const HomeLogosList = () => {
    return (
        <>
            <section className='container mx-auto flex-col lg:flex-row flex justify-between gap-2 xl:max-w-[1100px] 2xl:max-w-[1245px] py-14 sm:py-28'>
                {logos.map((logo: Logos) => (
                    <img className='w-56 h-28' key={logo.id} src={logo.photo} alt="Icon" />
                ))
                }
            </section>
        </>
    );
};