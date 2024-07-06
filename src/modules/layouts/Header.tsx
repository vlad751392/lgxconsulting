import { NavBarConfig, NavList } from "modules/configs/NavBarConfig";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import UnderlinedText from "src/components/UnderlinedText";

const Header = () => {
  return (
    <div className="fixed top-0 px-12 py-8 shadow-md w-full bg-body bg-no-repeat bg-cover flex flex-row justify-between">
      <div className="flex items-center gap-2 container">
        <img />
        {NavList.map((item: NavBarConfig) => (
          <Link to={item.path}>
            <UnderlinedText text={item.name} />
          </Link>
        ))}
        <div>
          <UnderlinedText text="Login" />
          <Button label="COMPARE RATES" />
          <UnderlinedText text="2222-222-222" />
        </div>
      </div>
    </div>
  );
};

export default Header;
