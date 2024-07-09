import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';;
import { list, StartShippingList } from '../modules/configs/StartShippingConfig'
import Button from 'src/components/Button';
import cn from 'classnames';

type StartShippingProps = {
    adapted?: boolean
}

export const AanimatedList = (props: StartShippingProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true, // чтобы анимация сработала только один раз
      threshold: 0.5, // порог видимости 50%
    });
  
    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);

    return (
        <div ref={ref} className={cn("input", {
            "flex flex-col gap-8": props.adapted,
            "flex flex-col lg:gap-[9px] gap-6 lg:flex-row justify-between": !props.adapted
        })}>
            {list.map((item: StartShippingList) => (
                <div className={cn('flex', {
                    'gap-8': props.adapted,
                    "items-center gap-10": !props.adapted,
                })}>


                    <div className={cn(`rounded-full border-[rgb(0 0 0 / 10%)] border-2 ${isVisible ? 'animate-scale' : ''} scale-0 flex items-center justify-center  animation-delay-${item.delay}`, {
                        "w-8 h-8 text-base": props.adapted,
                        "w-14 h-14 sm:w-20 sm:h-20 text-4xl": !props.adapted,
                    })}>
                        <p>{item.number}</p></div>
                    <div className={`${isVisible ? 'animate-appearsFromRight' : '' }  sm:w-[64%] w-[56%] flex items-center opacity-0 animation-delay-${item.delay}`}>
                        <div className='flex flex-col'><h4 className={cn("text-2xl font-bold", {
                            " leading-none pb-3": props.adapted,
                            "": !props.adapted
                        })}>{item.title}</h4>
                            <p className='text-gray-text'>{item.description}</p></div>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default Button;
