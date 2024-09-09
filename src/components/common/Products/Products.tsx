import React from 'react';
import { ProductType } from '../../../types/product';
import Product from './Product';

type ProductsProps = {
  data: ProductType[];
  title: string;
};

const Products: React.FC<ProductsProps> = (props) => {
  const { data, title } = props;

  return (
    <section className='grid grid-cols-4 gap-4'>
      {data.map((item, index) => (
        <Product key={item.id + index} {...item} title={title} />
      ))}
    </section>
  );
};

export default Products;
