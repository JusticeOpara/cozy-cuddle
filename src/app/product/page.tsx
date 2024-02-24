"use client"

import { useState } from 'react';
import { useGetProductsQuery } from '../../redux/products/product.api';
import ProductsList from '../../components/ProductsList';
import ErrorMessage from '../../components/Error';
import Pagination from '../../components/Pagination';

const ProductsPage = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, error} = useGetProductsQuery({
    limit: 12,
    skip: (activePage - 1) * 10,
  });

//   if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <h1>Products</h1>
      <ProductsList products={data?.products} />
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        total={data?.total}
        limit={data?.limit}
      />
      {/* <Outlet /> */}
    </>
  );
};

export default ProductsPage;