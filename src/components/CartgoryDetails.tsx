import { useParams } from 'next/navigation';
import { useGetCategoryProductsQuery } from '@/redux/products/product.api';
import ProductsList from './ProductsList';
import Error from 'next/error';
import 



type CategoryParamsId = {
  category: string;
};

const ProductDetails = () => {
  const { category } = useParams() as CategoryParamsId;
  const { data, isLoading, error } = useGetCategoryProductsQuery({ category });

  return (
    <div className='category-details'>
      <h1>{category}</h1>
      <ProductsList products={data?.products} />
    </div>
  );
};

export default ProductDetails;