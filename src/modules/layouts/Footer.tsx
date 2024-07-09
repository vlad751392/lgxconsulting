import List from "src/components/List";
import {
  ServiceList,
  CompanyList,
  ContactList,
} from "modules/configs/FooterConfig";
import Button from "src/components/Button";
import { useNavigate } from "react-router";

export const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



  return (
    <article className="bg-gray-regular w-full">
      <section className="container xl:max-w-[1100px] 2xl:max-w-[1245px] mx-auto gap-8 md:gap-[112px] flex flex-col sm:px-0 px-5">
        <div className="flex gap-8 xl:gap-36 flex-col xl:flex-row pt-28 items-center">
          <h2 className="text-adptive-ml font-bold xl:max-w-[70%] max-w-full">
            Get in touch with us today to see how we can help you scale your
            business.
          </h2>
          <Button
            className="w-[167px] h-12 text-[13px] self-start md:self-end"
            label="Compare Rates"
            nav="/pricing"
          />
        </div>

        <div className="flex flex-col sm:flex-row max-w-3xl justify-between">
          <List title="Service" config={ServiceList} />
          <List title="Company" config={CompanyList} />
          <List title="Contact" config={ContactList} />
        </div>
        <section className="flex font-bold sm:flex-row flex-col text-[13px] gap-[38%] py-6 border-t border-gray-secondary">
          <p className="pb-5 sm:pb-0">© 2024 LGX Consulting Inc.</p>
          <p>
            <a className=" cursor-pointer" onClick={() => handleClick('/terms-of-service')} >Terms Of Service</a> •
            <a className=" cursor-pointer" onClick={() => handleClick('/privacy-policy')} >Privacy Policy</a>
          </p>
        </section>
      </section>
    </article>
  );
};

export default Footer;
