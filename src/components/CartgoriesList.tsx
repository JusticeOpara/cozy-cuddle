import { FC } from 'react';
import Link from 'next/link';
import { ICategory } from '@/redux/products/product.types';

interface Props {
  categories: ICategory[] | undefined;
}


const CategoriesList: FC<Props> = ({ categories }) => (
   
  <ul className='flex flex-row flex-wrap justify-center gap-1 gap-x-4 max-w-[50vw] items-center'>
   
     {categories?.map(category => (
      <li key={category.id} className=''>
        <Link href={`/products/categories/${category.name}`} className='border border-black text-xl p-4 shadow-sm rounded-md font-Montserrat capitalize hover:bg-[#E9F0FB]'>{category.name}</Link>
      </li>
    ))} 
  </ul>
);

export default CategoriesList;