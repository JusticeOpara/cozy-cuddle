import { FC } from 'react';
import Link from 'next/link';
import { ICategory } from '@/redux/products/product.types';

interface Props {
  categories: ICategory[] | undefined;
}

const CategoriesList: FC<Props> = ({ categories }) => (
  <ul className='categories-list'>
    {categories?.map(category => (
      <li key={category.id} className=''>
        <Link href={`/products/categories/${category.name}`}>{category.name}</Link>
      </li>
    ))}
  </ul>
);

export default CategoriesList;