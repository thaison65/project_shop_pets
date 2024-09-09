import { facebookSVG, instagramSVG, logoSVG, twitterSVG, youtubeSVG } from '../../../assets/icons';
import { Button } from '../../common/Button';

interface FooterLayoutProps {}

const FooterLayout: React.FC<FooterLayoutProps> = () => {
  return (
    <>
      <section id='container-contact' className='flex gap-10 p-8 bg-primary-dark-blue rounded-2xl'>
        <h3 className='text-white text-xl font-semibold w-[389px]'>Register Now So You Don't Miss Our Programs</h3>
        <div className='flex gap-3 w-full flex-1 bg-white rounded-[14px] p-3 '>
          <input type='text' placeholder='Enter your email' className='flex-1 border py-[14px] px-7 rounded-lg outline-none' />
          <Button size='small' rounded='rounded-lg'>
            Subscribe Now
          </Button>
        </div>
      </section>

      <section className='flex justify-between'>
        <ul className='flex gap-[60px]'>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Category</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>

        <ul className='flex gap-10'>
          <li>
            <a href=''>
              <img src={facebookSVG} alt='facebook' loading='lazy' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src={twitterSVG} alt='twitter' loading='lazy' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src={instagramSVG} alt='instagram' loading='lazy' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src={youtubeSVG} alt='youtube' loading='lazy' />
            </a>
          </li>
        </ul>
      </section>

      <hr className='border-primary-dark-blue' />

      <section className='flex justify-between items-center'>
        <p>© 2024 Gifl. All rights reserved.</p>
        <img src={logoSVG} alt='' loading='lazy' />
        <div className='flex gap-4'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </>
  );
};

export default FooterLayout;
