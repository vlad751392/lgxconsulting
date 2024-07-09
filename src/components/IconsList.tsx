import { FC } from "react";
import { Link } from "react-router-dom";
import { IconsListConfig } from "modules/configs/IconsListConfig";

interface Props {
  title: string;
  config: IconsListConfig[];
}

const IconsList: FC<Props> = ({ config,title }) => {
  return (
    <div className=" container xl:max-w-[1100px] 2xl:max-w-[1245px]">
      <h3 className="text-2xl font-bold">{title}</h3>
    <div className="flex gap-6 my-7 flex-wrap justify-between">
      {config.map((item) => (
        <div className="flex flex-col gap-4 sm:max-w-[245px]">
          {/* <div>
            <img src={item.icon} />
          </div> */}
          {item.svg === false ? <div>
            <img src={item.icon} />
          </div> : item.icon 
          }
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default IconsList;
