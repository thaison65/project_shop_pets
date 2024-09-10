import React, { useEffect, useState } from 'react';
import { AccordionHeader } from '../../components/common/AccordinHeader';
import { Products } from '../../components/common/Products';
import { ProductType } from '../../types/product';
import { ContentBanner } from '../../components/common/ContentBanner';
import { imgBanner, imgSellers } from '../../assets/images';

import { dataPet, dataProduct } from '../../data';
import { bakers, butcher, felix, goodboy, pedigree, sheba, whiskas } from '../../assets/images/sellers';
import { arrowRightSVG, fontistoSVG } from '../../assets/icons';
import { Button } from '../../components/common/Button';
import { image1, image2, image3 } from '../../assets/images/knowledges';
import useScreenSize from '../../hooks/useScreenSize';

export interface HomePageProps {}

const sellers = [
  {
    id: 1,
    name: 'Sheba',
    image: sheba,
  },
  {
    id: 2,
    name: 'Whiskas',
    image: whiskas,
  },
  {
    id: 3,
    name: 'Bakers',
    image: bakers,
  },
  {
    id: 4,
    name: 'Felix',
    image: felix,
  },
  {
    id: 5,
    name: 'Goodboy',
    image: goodboy,
  },
  {
    id: 6,
    name: 'Butcher',
    image: butcher,
  },
  {
    id: 7,
    name: 'Pedigree',
    image: pedigree,
  },
];

const knowledges = [
  {
    id: 1,
    title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
    description:
      'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.',
    image: image1,
  },
  {
    id: 2,
    title: 'Dog Diet You Need To Know',
    description:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    image: image2,
  },
  {
    id: 3,
    title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
    description: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
    image: image3,
  },
];

const HomePage: React.FC<HomePageProps> = () => {
  const { width } = useScreenSize();

  const isTablet = width <= 1024;

  const [dataPets, setDataPets] = useState<ProductType[]>([]);
  const [dataProducts, setDataProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setDataPets(dataPet);
    setDataProducts(dataProduct);
  }, []);

  return (
    <>
      <section id='container-pets' className='flex flex-col gap-7'>
        <AccordionHeader title='Take A Look At Some Of Our Pets' subtitle='Whats new?' buttonText='View more' />
        <Products data={dataPets} title='pets' />
      </section>

      <section
        id='container-banner'
        className='flex flex-col lg:flex-row justify-between gap-7 bg-primary-dark-blue-80 rounded-[20px] overflow-hidden pt-9 pl-5'>
        <div className='relative order-1 lg:order-2 flex flex-col gap-2 w-full lg:w-auto'>
          <div className='absolute -top-[150%] lg:-top-[70%]  lg:-right-[40%] w-full lg:w-[782px]  h-[635px] bg-secondary-mon-yellow-40 rounded-[99px] rotate-[25.23deg]'></div>
          <div className='relative z-10 flex items-center justify-center mr-24'>
            <div className=' w-1/2 lg:w-[403px] flex flex-col items-center lg:items-end'>
              <ContentBanner size='small' />
            </div>
          </div>
        </div>
        <img
          src={imgBanner}
          alt='image banner'
          className='relative order-2 lg:order-1 w-full lg:w-[513px] h-auto lg:h-[342px] object-cover'
          loading='lazy'
        />
      </section>

      {!isTablet && (
        <section id='container-products' className='flex flex-col gap-7'>
          <AccordionHeader title='Our Products' subtitle='Hard to choose right products for your pets?' buttonText='View more' />
          <Products data={dataProducts} title='products' />
        </section>
      )}

      {!isTablet && (
        <section id='container-seller' className='flex flex-col gap-7'>
          <AccordionHeader
            title='Pet Sellers'
            subtitle='Proud to be part of'
            buttonText='View all our sellers'
            flexContent='flex items-center gap-2'
          />
          <div className='flex flex-wrap'>
            {sellers.map((seller) => (
              <div key={seller.id} className='flex flex-col items-center gap-2 flex-1'>
                <img src={seller.image} alt={seller.name} className='object-cover' loading='lazy' />
              </div>
            ))}
          </div>
        </section>
      )}

      {!isTablet && (
        <section id='container-fontisto' className='relative flex flex-col bg-[#FFB775] rounded-lg h-[378px] overflow-hidden'>
          <div className='w-[788px] h-[788px] absolute z-0 top-[170px] right-[-13.5rem] rounded-[99px] rotate-[59.25deg] bg-gradient-to-t from-custom-1 from-6.17% via-custom-1 via-75.14% to-custom-2 opacity-30'></div>
          <div className='w-[782px] h-[635px] absolute z-0 bottom-[1.5rem] left-[-13.5rem] rounded-[99px] rotate-[60.25deg] bg-[#FCEED5] opacity-30'></div>
          <article className='relative z-10 flex items-center justify-between'>
            <div className='w-[448px] flex flex-col ml-20'>
              <h3 className='flex gap-4 font-bold text-primary-dark-blue text-4xl'>
                Adoption <img src={fontistoSVG} alt='icon fontisto' />
              </h3>
              <p className='text-primary-dark-blue text-2xl font-semibold'>We Need Help. So Do They.</p>
              <p className='w-[394px] text-primary-dark-blue-80 text-xs'>
                Adopt a pet and give it a home,
                <br /> it will be love you back unconditionally.
              </p>
              <div className='flex gap-4 mt-10'>
                <Button>Explore Now</Button>
                <Button variant='outline' icon={arrowRightSVG}>
                  View Intro
                </Button>
              </div>
            </div>
            <figure>
              <img src={imgSellers} alt='img sellers' loading='lazy' className='w-[584px] h-[378px]' />
            </figure>
          </article>
        </section>
      )}

      <section id='container-knowledge' className='flex flex-col gap-7'>
        <AccordionHeader title='Useful Pet Knowledge' subtitle='You already know ?' buttonText='View more' />
        <div className='flex flex-wrap gap-7'>
          {knowledges.map((knowledge) => (
            <div
              key={knowledge.id}
              className='flex flex-col w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] items-center gap-[15px] p-2 rounded-xl shadow-1'>
              <img src={knowledge.image} alt={knowledge.title} className='object-cover rounded-lg' loading='lazy' />
              <div className='flex flex-col gap-[10px] p-2'>
                <p className='text-white text-xs bg-state-blue-sea rounded-full px-4 py-2 w-fit'>Pet knowledge</p>
                <h4 className='text-primary-dark-blue text-base font-semibold'>{knowledge.title}</h4>
                <p className='text-primary-dark-blue-80 text-sm h-[60px] overflow-hidden overflow-ellipsis line-clamp-3'>{knowledge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
