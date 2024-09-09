import HeaderLayout from '../Header';
import FooterLayout from '../Footer';
import { HeroBannerLayout } from '../Header/HeroBanner';
import { bgHeroSVG } from '../../../assets/icons';
import useScreenSize from '../../../hooks/useScreenSize';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children } = props;
  const { width } = useScreenSize();

  const isMobile = width <= 768;

  return (
    <div className='max-w-screen-2xl mx-auto flex flex-col gap-[60px]'>
      <header className='relative flex flex-col justify-center overflow-hidden flex-1 w-full min-h-[695px] h-[695px] bg-gradient-to-t from-custom-1 from-6.17% via-custom-1 via-75.14% to-custom-2 rounded-br-[40px] rounded-bl-[40px]'>
        {isMobile ? <img src='' alt='' /> : <img className=' object-cover inset-0 absolute z-0' src={bgHeroSVG} alt='' loading='lazy' />}
        <HeaderLayout device={width} />

        <HeroBannerLayout />
      </header>
      <main className='flex-1 w-[1180px] mx-auto flex flex-col gap-[60px]'>{children}</main>
      <footer className='flex flex-col gap-10 pt-20 pb-10 px-[130px] rounded-tl-[40px] rounded-tr-[40px] bg-gradient-to-t from-custom-1 from-6.17% via-custom-1 via-75.14% to-custom-2 rounded-sl-[40px] rounded-sr-[40px]'>
        <FooterLayout />
      </footer>
    </div>
  );
};

export default AppLayout;
