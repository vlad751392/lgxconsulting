import React from 'react';
import cn from 'classnames';

interface UnderlinedTextProps {
  text: string;
  active? : boolean;
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text, active }) => {
  return (
    <div className="relative inline-block overflow-hidden group ">
      <span className="relative uppercase text-[12px] font-bold">{text}</span>
      <div className={cn(active ? "bg-blue-500 w-full h-[2px] absolute bottom-0 left-0" : "group-hover:animate-textUnderlineAnimation absolute bottom-0 left-0 h-[2px] w-full -translate-x-full bg-blue-500")}></div>
    </div>
  );
};

export default UnderlinedText;
