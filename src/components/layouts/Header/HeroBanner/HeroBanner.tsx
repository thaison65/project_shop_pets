import { imgHeroBanner } from '../../../../assets/images';
import { ContentBanner } from '../../../common/ContentBanner';

const HeroBannerLayout = () => {
  return (
    <section className='mt-[182px] relative flex flex-col lg:flex-row justify-between px-4 lg:px-[130px] h-full'>
      <section className='w-full lg:w-[540px] flex flex-col justify-center items-center lg:items-start gap-1 mb-8 lg:mb-0 lg:-mt-[125px] z-10 order-last lg:order-first'>
        <ContentBanner />
      </section>
      <img
        src={imgHeroBanner}
        alt='bg-hero'
        className='w-full lg:w-[944px] h-auto lg:h-[611px] lg:absolute lg:-top-28 lg:-right-6 order-last'
        loading='lazy'
      />
    </section>
  );
};

export default HeroBannerLayout;
