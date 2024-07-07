import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  divClass?: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
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
  // Разбиваем текст на отдельные части по </div>
  const parts = text.split('</span>');

  return (
    <div ref={ref} className={`${className} relative overflow-hidden group min-h-[120px]`}>
      {/* Маппим каждую часть текста */}
      <p  className={`relative  ${isVisible ? 'animated-text animation-delay-900 opacity-100' : 'opacity-0'}`}>
      {parts.map((part, index) => (
        < >
          {/* Оборачиваем каждую часть в <div> */}
          <span key={index} dangerouslySetInnerHTML={{ __html: part + (index < parts.length - 1 ? '</span>' : '') }} />
          </>
      ))}
      </p>
    </div>
  );
};

export default AnimatedText;
