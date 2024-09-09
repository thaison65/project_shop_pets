import React, { useState, useEffect } from 'react';
import { ProductType } from '../../../types/product';
import { giflSVG } from '../../../assets/icons';

interface ProductProps extends ProductType {
  title: string;
}

const Product: React.FC<ProductProps> = (props) => {
  const { id, name, product_type, age, size, price, urlImage, promotion, title } = props;
  const [image, setImage] = useState<string | undefined>();

  useEffect(() => {
    const loadImage = async () => {
      try {
        let images: any;
        if (title === 'pets') {
          images = import.meta.glob(`../../../assets/images/pets/*.png`, { eager: true });
        } else if (title === 'products') {
          images = import.meta.glob(`../../../assets/images/products/*.png`, { eager: true });
        }

        if (urlImage in images) {
          const img = images[urlImage] as { default: string };
          setImage(img.default);
        } else {
          console.error('Image not found:', urlImage);
        }
      } catch (error) {
        console.error('Failed to load image:', error);
      }
    };

    loadImage();
  }, [urlImage]);

  return (
    <article className='flex flex-col p-2 gap-4 rounded-md hover:shadow-md hover:shadow-neutral-60 cursor-pointer'>
      {<img src={image} alt={name} className='w-full h-full object-cover rounded-lg' loading='lazy' />}

      <div className='flex flex-col px-2 pb-5 gap-1'>
        <h3 className='font-bold'>{title === 'pets' ? `${id} - ${name}` : `${name}`}</h3>
        <div className='flex gap-2 items-center'>
          <p className='text-sm text-neutral-60'>
            {title === 'pets' ? 'Gene:' : 'Product:'} <span className='font-bold'>{product_type}</span>
          </p>
          <div className='w-[18px] h-[18px] flex items-center justify-center'></div>
          {title === 'pets' && (
            <p className='text-sm text-neutral-60'>
              Age: <span className='font-bold'>{age}</span>
            </p>
          )}
          {size && (
            <p className='text-sm text-neutral-60'>
              Size: <span className='font-bold'>{size}</span>
            </p>
          )}
        </div>
        <p className='text-sm text-neutral-100 font-bold'>{price}</p>
        {promotion && (
          <div className='flex items-center gap-2 rounded-lg bg-secondary-mon-yellow-40 px-[10px] pb-1 pt-[6px] mt-3'>
            <img src={giflSVG} alt='promotion' loading='lazy' />
            <p className='text-sm font-semibold text-primary-dark-blue-80'> {promotion}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default Product;
