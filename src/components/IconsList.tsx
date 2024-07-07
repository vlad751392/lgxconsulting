import { FC } from "react";
import { Link } from "react-router-dom";
import { IconsListConfig } from "modules/configs/IconsListConfig";

interface Props {
  config: IconsListConfig[];
}

const IconsList: FC<Props> = ({ config }) => {
  return (
    <div className="flex gap-6 container xl:max-w-[1245px] my-7 flex-wrap justify-center">
      {config.map((item) => (
        <div className="flex flex-col gap-4 max-w-[245px]">
          <div>
            <img src={item.icon} />
          </div>
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsList;
