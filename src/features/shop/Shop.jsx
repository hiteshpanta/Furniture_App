import React, { useEffect } from 'react'
import FeatureBar from './FeatureBar'
import FeatureSection from '@/components/account/FeatureSection'
import TopBanner from '@/components/account/TopBanner'
import { useGetProductsQuery } from '../products/productApi'
import { useSearchParams } from 'react-router'
import ProductCard from '../products/ProductCard'
import { Button } from '@/components/ui/button'

export default function Shop() {
    const {isLoading, error, data} = useGetProductsQuery();
     const [params, setPrams] = useSearchParams();


    const querYPage = params.get('page') ?? 1;
    
      const query = params.get('search') ? {
        search: params.get('search')
      } : null;

      // const { isLoading, error, data } = useGetProductsQuery({
      //   ...query,
      //   page: querYPage
      // });
    
      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, [querYPage]);
  return (
    <div>
      <TopBanner 
        title="Shop"
        paths={[
            { label: "Home", href: "/" },
            { label: "Shop" }
        ]}/>
      <div className='mt-10'>
        <FeatureBar />
      </div>

      <div>
        <div>
            <div className="px-5 grid grid-cols-4 gap-6 mt-30 items-start">
                {data?.products?.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })}
            </div>
        </div>

      </div>

      <div className="flex gap-5 my-5 justify-center">
        <Button disabled={Number(querYPage) === 1} onClick={() => setPrams({ page: Number(querYPage) - 1 })}>Prev</Button>
        <h1>{params.get('page') ?? 1}</h1>
        <Button onClick={() => setPrams({ page: Number(querYPage) + 1 })} disabled={data?.totalPages === Number(querYPage)}>Next</Button>
      </div>

      <div className='mt-10'>
        <FeatureSection />
      </div>
    </div>
  )
}
