import React, { memo } from 'react';
import { Button } from '../Button';
import { arrowRightSVG } from '../../../assets/icons';

interface AccordionHeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick?: () => void;
  flexContent?: string;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = memo(({ title, subtitle, buttonText, onClick, flexContent = '' }) => {
  return (
    <div className='accordion-header flex justify-between items-center '>
      <div className={`accordion-header-content text-black ${flexContent}`}>
        <p>{subtitle}</p>
        <h3 className='accordion-title text-xl font-bold text-primary-dark-blue '>{title}</h3>
      </div>
      <Button variant='outline' onClick={onClick} icon={arrowRightSVG}>
        {buttonText}
      </Button>
    </div>
  );
});

export default AccordionHeader;
