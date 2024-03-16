"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useLazySearchProductsQuery } from "@/redux/products/product.api";
import ProductsList from "@/components/ProductsList";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/Error";
import { FaSearch } from "react-icons/fa";
import { BsFilter, BsSearch } from "react-icons/bs";
import Pagination from "@/components/Pagination";

const Search = () => {
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [debouncedQuery] = useDebounce(query, 500);
  const [searchProducts, { data, error, isLoading }] =
    useLazySearchProductsQuery();

  useEffect(() => {
    if (debouncedQuery.length) {
      searchProducts({ query: debouncedQuery });
    }
  }, [debouncedQuery, searchProducts]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  

  return (
    <div className="w-full h-full px-8  my-20 lg:px-[375px]">
      <h1 className="text-2xl">Search Products</h1>
      <form action="/search" className="mt-[20px] ">
        
          <BsSearch size={24}  className="absolute z-50 ml-[10px] my-3"/>
          <input
            type="text"
            name="query"
            value={query}
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            className="relative pl-[50px] text-lg w-full rounded-lg outline h-[50px] mb-8"
          />
       

      </form>

      {data && query.length ? (
        <>
          <ProductsList products={data?.products} />
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={data?.total}
            limit={data?.limit}
          />
        </>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Search;
