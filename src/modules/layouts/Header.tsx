import { useEffect, useState } from "react";
import { NavBarConfig, NavList } from "modules/configs/NavBarConfig";
import { Link } from "react-router-dom";
import Logo from '../../assets/png/logo.png';
import Button from "src/components/Button";
import UnderlinedText from "src/components/UnderlinedText";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 px-12 py-8 shadow-md w-full bg-body bg-no-repeat bg-cover flex flex-row transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="flex items-center gap-2 container lg:max-w-[1245px] mx-auto justify-between">
        <div className="flex gap-7 items-center">
          <img src={Logo} width={108} height={32} />
          <div className="hidden lg:flex gap-7">
            {NavList.map((item: NavBarConfig) => (
              <Link to={item.path} key={item.name}>
                <UnderlinedText text={item.name} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <UnderlinedText text="Login" />
          <Button className="p-2.5 text-[12px] h-8 leading-none" label="COMPARE RATES" />
          <UnderlinedText text="2222-222-222" />
          <button className="lg:hidden relative w-8 h-10 gap-2 flex z-[9999] flex-col justify-between items-center" onClick={toggleMenu}>
            <div className={`w-8 h-[2px] bg-black transform transition duration-300 ${isMenuOpen ? '-rotate-45 relative top-2' : ''}`}></div>
            <div className={`w-8 h-[2px] bg-black transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-[2px] bg-black transform transition duration-300 ${isMenuOpen ? 'rotate-45 relative -top-[9px]' : ''}`}></div>
          </button>
        </div>
      </div>
      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full w-full bg-white absolute right-0 top-0 bottom-0 shadow-lg">
          {NavList.map((item: NavBarConfig) => (
            <Link to={item.path} key={item.name} className="text-black text-2xl my-2" onClick={toggleMenu}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
