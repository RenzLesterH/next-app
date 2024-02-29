import React from 'react';

interface Props{
  params: {
      slug: string;
  };
  searchParams: {
    sort_order: string;
  };
}

const Products = ({params: {slug}, searchParams: {sort_order} }: Props) => {
  return (
      <div>Products {sort_order} {slug}</div>
  )
}

export default Products;