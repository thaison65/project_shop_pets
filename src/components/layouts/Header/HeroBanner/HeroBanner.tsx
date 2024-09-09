import { imgHeroBanner } from '../../../../assets/images';
import { ContentBanner } from '../../../common/ContentBanner';

const HeroBannerLayout = () => {
  return (
    <section className='relative flex-1 flex justify-between px-[130px] h-full'>
      <section className='w-[480px] flex flex-col justify-center gap-1 -mt-[125px]'>
        <ContentBanner />
      </section>
      <img src={imgHeroBanner} alt='bg-hero' className='w-[944px] h-[611px] absolute top-0 -right-6' loading='lazy' />
    </section>
  );
};

export default HeroBannerLayout;
