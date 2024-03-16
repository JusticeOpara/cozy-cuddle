import { useParams } from 'next/navigation';
import { useGetCategoryProductsQuery } from '@/redux/products/product.api';
import ProductsList from './ProductsList';
import ErrorMessage from './Error';



type CategoryParamsId = {
  category: string;
};

const ProductDetails = () => {
  const { category } = useParams() as CategoryParamsId;
  const { data, isLoading, error } = useGetCategoryProductsQuery({ category });


  if (isLoading) return <h1>Loading</h1>;
  if (error) return <ErrorMessage error={error} />;
console.log(category,"category")

  return (
    <div className='category-details bg-red-500'>
      <h1>{category}</h1>
      snklgslkjkjkgdsjkjgkjkgsdjk
      <ProductsList products={data?.products} />
    </div>
  );
};

export default ProductDetails;