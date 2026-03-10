import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useGetProductsQuery } from '@/features/products/productApi';
import { Cross, Delete } from 'lucide-react';

export default function SearchSection({onClose}) {
    const [params, setPrams] = useSearchParams();
    
      const querYPage = params.get('page') ?? 1;
    
      const query = params.get('search') ? {
        search: params.get('search')
      } : null;
      const { isLoading, error, data } = useGetProductsQuery({
        ...query,
        page: querYPage
      });
    
      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, [querYPage]);
  return (
    <div className="fixed right-10 flex justify-center items-start ">
        <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        {/* <Button
            onClick={onClose}
            className="absolute right-3">
            <Delete/>
        </Button> */}
        <Formik
            initialValues={{
                    search: params.get('search') ||''
            }}
            onSubmit={(val, { resetForm }) => {
                            setPrams({ search: val.search });
                              resetForm();
                    }}
        >
        {({ handleChange, handleSubmit, values}) => (
            <form onSubmit={handleSubmit} className="mt-4 mb-4 max-w-sm">
                <div className="flex gap-5 justify-end p-2 shadow-sm ">
                        <Input
                            value={values.search}
                            onChange={handleChange}
                            name="search" placeholder="Search" 
                            className="w-full p-2 border rounded"
                        />
                        <Button type="submit" className={"bg-white text-gray-500"}>Search</Button>
                </div>
                  
            </form>
        )}
        </Formik>
      
    </div>
    </div>
    
  )
}
