import List from 'src/components/List';
import { ServiceList, CompanyList, ContactList } from "modules/configs/FooterConfig";
import Button from 'src/components/Button';

export const Footer = () => {
    return (
        <article className="bg-[#f6f6f6] w-full">
            <section className='container max-w-[1280px] mx-auto'>
                <div className='flex'>
                    <h2 className='text-adptive-ml font-bold'>Get in touch with us today to see how we can help you scale your business.</h2>
                    <Button className='py-[13px] px-[35px] text-[13px]' label='Get Started' />
                </div>

                <div className='flex flex-wrap'>
                    <List title='Service' config={ServiceList}/>
                    <List title='Company' config={CompanyList}/>
                    <List title='Contact' config={ContactList}/>
                    
                </div>

            </section>
            <section className='flex font-bold'>
                <p>© 2024 Axel Ship Inc.</p>
                <p>Terms Of Service  •  Privacy Policy</p>
            </section>
        </article>
    );
};

export default Footer;