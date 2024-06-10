import React from 'react';
import Loader from '@/components/loader';
import { fetchData } from '@/utils/useFetch';
import ShopUI from '@/views/page-shop';


const Page = async () => {
  const { data, error } = await fetchData('https://dummyjson.com/products');

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {!data ? <Loader /> : <ShopUI data={data?.products}/>}
    </>
  );
};

export default Page;
