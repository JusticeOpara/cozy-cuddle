
import { useParams } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { CiStar } from 'react-icons/ci';
import { useGetProductQuery } from '@/redux/products/product.api';
import AddToCartBtn from './AddToCartBtn';
import Loading from './Loading';
import 'swiper/css';
import 'swiper/css/pagination';

type ProductParamsId = {
  id: string;
};

const ProductDetails = () => {
  const { id } = useParams() as ProductParamsId;
  const { data: product, isLoading } = useGetProductQuery({ id });

  if (isLoading) return <Loading />;
  if (!product) return <p>Product not found</p>;

  const { title, description, price, rating, category, images, id: productId } = product;

  return (
    <div className='product-details'>
      <h1>{title}</h1>
      <div className='product-details__pics'>
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='product-details__description'>
        <p>{description}</p>
      </div>
      <div className='product-details__category'>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>
      <div className='product-details__price'>
        <p>
          <strong>Price:</strong> {price}$
        </p>
      </div>
      <div className='product-details__rating'>
        <div className='product-rating'>
          <strong>Rating:</strong>
          <CiStar />
          {rating}
        </div>
      </div>
      <AddToCartBtn id={productId}>Add to cart</AddToCartBtn>
    </div>
  );
};

export default ProductDetails;