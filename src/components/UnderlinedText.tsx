import React from 'react';

interface UnderlinedTextProps {
  text: string;
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text }) => {
  return (
    <div className="relative inline-block overflow-hidden group ">
      <span className="relative text-sm font-bold">{text}</span>
      <div className="group-hover:animate-textUnderlineAnimation absolute bottom-0 left-0 h-[2px] w-full -translate-x-full bg-blue-500"></div>
    </div>
  );
};

export default UnderlinedText;
