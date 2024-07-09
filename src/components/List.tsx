import { FC } from "react";
import { FooterList } from "modules/configs/FooterConfig";
import { Link, useNavigate } from "react-router-dom";

interface Props {
    title: string;
    config: FooterList[];
}

const List: FC<Props> = ({ title, config }) => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <p className="font-bold py-7">{title}</p>
            <div className="text-[13px] font-bold gap-2 flex flex-col">
                {config.map((item) => (
                    item.nav 
                        ? <p key={item.name} onClick={() => handleClick(item.path)} className="text-left cursor-pointer trantion-all hover:text-blue-regular">{item.name}</p> 
                        : <a key={item.name} href={`${item.path}`}>{item.name}</a>
                ))}
            </div>
        </div>
    );
};

export default List;
