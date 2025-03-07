import { useEffect, useState } from 'react';
import { useNavigating } from '../../hooks/useNavigating';

const getWidthClass = (percentage: number) => {
  if (percentage < 1) return 'width-0';
  if (percentage < 10) return 'width-10';
  if (percentage < 20) return 'width-20';
  if (percentage < 30) return 'width-30';
  if (percentage < 40) return 'width-40';
  if (percentage < 50) return 'width-50';
  if (percentage < 60) return 'width-60';
  if (percentage < 70) return 'width-70';
  if (percentage < 80) return 'width-80';
  if (percentage < 90) return 'width-90';
  return 'width-100';
};

const useSideItem = () => {
  const [percentage, setPercentage] = useState(0);
  const classPercentage = getWidthClass(percentage);
  const { scrollToTopAndNavigate } = useNavigating();

  const calcPercentage = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setPercentage(scrollPercentage);
  };

  const effect = useEffect(() => {
    calcPercentage();
    window.addEventListener('scroll', calcPercentage);
    return () => window.removeEventListener('scroll', calcPercentage);
  }, []);

  return { scrollToTopAndNavigate, classPercentage };
};

export { useSideItem };
