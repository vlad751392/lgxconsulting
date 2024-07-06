import { FC } from "react";
import { FooterList } from "modules/configs/FooterConfig";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    config: FooterList[];
}

const List: FC<Props> = ({ title, config }) => {
    return (
        <div>
            <p className="font-bold pb-7">{title}</p>
            <div className="text-[13px] font-bold gap-2 flex flex-col">
                {config.map((item) => (
                    item.nav ? <Link key={item.name} to={item.path}>{item.name}</Link> : <a  href={item.path}>{item.name}</a>
                ))}
            </div>
        </div>
    );
};

export default List;
