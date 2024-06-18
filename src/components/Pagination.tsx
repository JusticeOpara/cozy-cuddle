import { FC } from 'react';

interface IPaginationProps {
  activePage: number;
  setActivePage: (active: number) => void;
  total: number | undefined;
  limit: number | undefined;
}

// get array of pages
const getPages = (total: number, limit: number): number[] => {
  const totalPages = Math.ceil(total / limit);

  return Array.from({ length: totalPages }, (_, index) => index + 1);
};

const Pagination: FC<IPaginationProps> = ({ total, limit, activePage, setActivePage }) => {
  if (!total || !limit) return null;

  const pages = getPages(total, limit);

  return (
    <div className='flex justify-center my-5'>
      
      {pages.map(page => (
        <div
          key={page}
          className={`leading-[1px] p-4 hover:bg-[#E9F0FB] shadow cursor-pointer m-[2px] rounded-full ${activePage === page ? ' is-active' : ''}`}
          onClick={() => setActivePage(page)}
          onKeyDown={() => setActivePage(page)}
          role='button'
          tabIndex={0}
        >
          {page}
        </div>
      ))}
      
    </div>
  );
};




export default Pagination;
