import { FC } from "react";
import { list, StartShippingList } from '../modules/configs/StartShippingConfig'
import Button from 'src/components/Button';
import cn from 'classnames';

type StartShippingProps = {
    adapted?: boolean
}

export const AanimatedList = (props: StartShippingProps) => {
    return (
        <div className={cn("input", {
            "flex flex-col gap-8": props.adapted,
            "flex flex-col sm:gap-0 gap-6 lg:flex-row justify-between": !props.adapted
        })}>
            {list.map((item: StartShippingList) => (
                <div className={cn('flex gap-10', {
                    '': props.adapted,
                    "items-center": !props.adapted,
                })}>


                    <div className={cn(`rounded-full border-[rgb(0 0 0 / 10%)] border-2 animate-scale scale-0 flex items-center justify-center  animation-delay-${item.delay}`, {
                        "w-8 h-8 text-base": props.adapted,
                        "w-14 h-14 sm:w-20 sm:h-20 text-4xl": !props.adapted,
                    })}>
                        <p>{item.number}</p></div>
                    <div className={`animate-appearsFromRight  sm:w-[56%] w-[72%] flex items-center opacity-0 animation-delay-${item.delay}`}>
                        <div className='flex flex-col'><h4 className={cn("text-2xl font-bold", {
                            " leading-none": props.adapted,
                            "": !props.adapted
                        })}>{item.title}</h4>
                            <p className=''>{item.description}</p></div>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default Button;
