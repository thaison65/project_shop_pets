import React from 'react';
import { playIconSVG } from '../../../assets/icons';
import { Button } from '../Button';
import useScreenSize from '../../../hooks/useScreenSize';

interface ContentBannerProps {
  size?: 'small' | 'large';
}

const ContentBanner: React.FC<ContentBannerProps> = ({ size = 'large' }) => {
  const { width } = useScreenSize();

  const isTablet = width <= 1024;

  return (
    <>
      <h1
        className={`text-primary-dark-blue font-bold ${size === 'small' ? 'text-2xl sm:text-2xl lg:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
        One More Friend
      </h1>
      <p
        className={`text-primary-dark-blue font-semibold ${
          size === 'small' ? 'text-lg sm:text-xl lg:text-2xl' : 'text-xl sm:text-xl lg:text-3xl mb-3 lg:mb-4'
        }`}>
        Thousands More Fun!
      </p>
      <p
        className={`text-primary-dark-blue mb-4 lg:mb-6 font-normal ${
          size === 'small' ? 'text-[12px] sm:text-[12px] lg:text-base text-right' : 'text-[8px] sm:text-[8px] lg:text-lg'
        }`}>
        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div className='flex gap-2 sm:gap-3 lg:gap-4'>
        <Button variant='outline' icon={playIconSVG} size={isTablet ? 'medium' : undefined}>
          View Intro
        </Button>
        <Button size={isTablet ? 'medium' : undefined}>Explore Now</Button>
      </div>
    </>
  );
};

export default ContentBanner;
