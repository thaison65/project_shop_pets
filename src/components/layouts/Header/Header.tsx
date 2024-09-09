import React from 'react';
import { arrowDownSVG, countrySVG, logoSVG, searchSVG } from '../../../assets/icons';
import { Button } from '../../common/Button';

interface HeaderLayoutProps {
  device: number;
}

const links = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Category',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ device }) => {
  const isMobile = device <= 768;

  return (
    <header className='relative'>
      {isMobile ? (
        <nav>Mobile Navigation</nav>
      ) : (
        <section className='flex items-center justify-between w-full px-[130px] py-[28px]'>
          <nav className='flex items-center gap-12'>
            <img src={logoSVG} alt='logo' loading='lazy' />
            <ul className='flex items-center gap-12'>
              {links.map((link) => (
                <li key={link.name}>
                  <a className='font-semibold' href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <article className='w-[280px] flex items-center gap-3 pl-4 pr-5 py-3 bg-neutral-10 rounded-full'>
            <img src={searchSVG} alt='icon-search' loading='lazy' />
            <input type='text' placeholder='Search something here!' className='w-full outline-none border-none size-[14px]' />
          </article>

          <Button>John the community</Button>

          <div className='flex items-center gap-1'>
            <img src={countrySVG} alt='icon-country' loading='lazy' />
            <p>VND</p>
            <img src={arrowDownSVG} alt='icon-arrow-down' loading='lazy' />
          </div>
        </section>
      )}
    </header>
  );
};

export default HeaderLayout;
