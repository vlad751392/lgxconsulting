import { FC } from "react";

interface Props {
    label: string,
    className?: string,
}

export const Button: FC<Props> = ({ label, className }: Props) => {
    return (
        <button className={`${className} rounded-[30px] bg-blue-regular text-white font-bold`}>
            {label}
        </button>
    );
};

export default Button;
