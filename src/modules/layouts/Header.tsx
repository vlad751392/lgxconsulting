import { useEffect, useState } from "react";
import { NavBarConfig, NavList } from "modules/configs/NavBarConfig";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from '../../assets/png/logo.png';
import Button from "src/components/Button";
import UnderlinedText from "src/components/UnderlinedText";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  const toggleMenuNav = (path: string) => {
    
    setIsMenuOpen(!isMenuOpen);
    handleClick(path)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

    const handleClick = (path = '' ) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className={`fixed items-center top-0 px-12 z-[2] bg-white shadow-md w-full bg-body bg-no-repeat bg-cover flex flex-row transition-all duration-300 ${isScrolled ? 'py-[9px]]' : 'py-[27px]'}`}>
      <div className="flex items-center gap-2 container xl:max-w-[1100px] 2xl:max-w-[1245px] mx-auto justify-between">
        <div className="flex gap-7 items-center">
          <Link to='/'>
            <img src={Logo} width={108} height={32} />
          </Link>
          <div className="hidden lg:flex gap-7">
            {NavList.map((item: NavBarConfig) => (
              <p  onClick={() => handleClick(item.path)} key={item.name} className="cursor-pointer">
                <UnderlinedText active={location.pathname === item.path ? true : false} text={item.name} />
              </p>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex  gap-9 items-center">

          <a href="https://login.axelship.com/ec/login.php"><UnderlinedText text="Login" /></a>
          <Button nav="/pricing" className="py-2.5 w-36 text-[12px] h-8 leading-none" label="COMPARE RATES" />
          <a href="tel:844-549-7447"><UnderlinedText text="844-549-7447" /></a>

        </div>
      </div>
      <div className="lg:hidden relative w-8 h-6 gap-2 flex z-[9999] flex-col justify-between items-center" onClick={toggleMenu}>
        <div className={`w-8 h-[2px] bg-black transform transition duration-300 ${isMenuOpen ? '-rotate-45 relative top-[3px] bg-white' : ''}`}></div>
        <div className={`w-8 h-[2px] bg-black transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-[2px] bg-black transform transition duration-300 ${isMenuOpen ? 'rotate-45 relative -top-[19px] bg-white' : ''}`}></div>
      </div>
      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full w-full bg-blue-secondary absolute right-0 top-0 bottom-0 shadow-lg">
        {NavList.map((item, index) => (
          <p
            onClick={() => toggleMenuNav(item.path)}
            key={item.name}
            className={`text-white text-2xl my-2 ${location.pathname === item.path ? 'border-b-2 border-white' : ''}  ${isMenuOpen ? 'transition-opacity duration-500 opacity-100' : 'opacity-0'}`}
            style={isMenuOpen ?  { transitionDelay: `${((index+1) * 200)+200}ms` } : {}}
          >
            {item.name}
          </p>
        ))}
        <a href="https://login.axelship.com/ec/login.php" style={isMenuOpen ? { transitionDelay: '1200ms' } : {}} className={`text-white text-2xl my-2 ${isMenuOpen ? 'transition-opacity duration-500 opacity-100' : 'opacity-0 duration-0'}`}>Login</a>
        <a onClick={() => toggleMenuNav('/pricing')} style={isMenuOpen ? { transitionDelay: '1400ms' } : {}} className={`text-white text-2xl my-2 ${isMenuOpen ? 'transition-opacity duration-500 opacity-100' : 'opacity-0 duration-0'}`}>Compare Rates</a>
        <a href="tel:123" style={isMenuOpen ? { transitionDelay: '1600ms' } : {}} className={`text-white text-2xl my-2 ${isMenuOpen ? 'transition-opacity duration-500 opacity-100' : 'opacity-0 duration-0'}`}>844-549-7447</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
