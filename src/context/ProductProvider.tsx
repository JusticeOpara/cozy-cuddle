// DataProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { PropsWithChildren } from 'react';

interface IDataContext {
  data: any;
  isLoading: boolean;
  filterCategory: (category: string) => void; // New function for category filtering
}

const DataContext = createContext<IDataContext>({
  data: null,
  isLoading: false,
  filterCategory: () => {}, // Default empty function
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setIsLoading(false);
    
  };

  
  useEffect(() => {
    fetchData();
  }, []);



  // New function for category filtering
  const filterCategory = async (category: string) => {
    setIsLoading(true);
    const result = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    setData(result.data);
    setIsLoading(false);
  };

  return (
    <DataContext.Provider value={{ data, isLoading, filterCategory }}>
      {children}
    </DataContext.Provider>
  );
};