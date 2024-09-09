import React from 'react';
import { playIconSVG } from '../../../assets/icons';
import { Button } from '../Button';

interface ContentBannerProps {
  size?: 'small' | 'large';
}

const ContentBanner: React.FC<ContentBannerProps> = ({ size = 'large' }) => {
  return (
    <>
      <h1 className={`text-primary-dark-blue  font-bold ${size === 'small' ? 'text-[48px]' : 'text-6xl'}`}>One More Friend</h1>
      <p className={`text-primary-dark-blue font-semibold  ${size === 'small' ? 'text-2xl' : 'text-[40px] mb-6'}`}>Thousands More Fun!</p>
      <p className={`text-primary-dark-blue mb-[34px] font-normal ${size === 'small' ? 'text-[12px] text-right' : 'text-base'}`}>
        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div className='flex gap-5'>
        <Button variant='outline' icon={playIconSVG}>
          View Intro
        </Button>
        <Button>Explore Now</Button>
      </div>
    </>
  );
};

export default ContentBanner;
