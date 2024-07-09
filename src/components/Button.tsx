import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
    label: string,
    className?: string,
    nav? : string 
}

export const Button: FC<Props> = ({ nav = "#", label, className }: Props) => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <button className={`${className} rounded-[30px] transition-all hover:shadow-button hover:-translate-y-1 bg-blue-regular text-white font-bold`} onClick={() => handleClick(nav)}>
            {label}
        </button>
    );
};

export default Button;
