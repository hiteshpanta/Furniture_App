import { Formik } from "formik";
import { useGetProductsQuery } from "../products/productApi"
import ProductCard from "../products/ProductCard";
import ProductCardSkeleton from "../products/ProductCardSkeleton";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import Top5Product from "./Top5Product.jsx";
import DisplaySection from "./DisplaySection";
import OurBlogs from "../blogs/BlogCard";
import InstagramSection from "@/components/account/InstagramSection";
import SofaComponent from "./SofaComponent";
import BlogCard from "../blogs/BlogCard";

export default function Home() {
  const [params, setParams] = useSearchParams();

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


  if (isLoading) return <div className="grid grid-cols-4 gap-6 mt-4 items-start">
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
  </div>

  // if (error) return <h1 className="text-pink-500">{error?.error || error.data?.message}</h1>

  return (
    <div className="">

      <DisplaySection />


      <main className="">

        <Top5Product />

        <div className="mt-10"><SofaComponent /></div>
        
        
        
        


        {/* <div className="bg-white">
          <h3 className="flex justify-center">Top Picks For You</h3>
          <p className="mt-1 text-gray-400 font-xl flex justify-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          <div> */}
            {/* <div className="px-5 grid grid-cols-4 gap-6 mt-30 items-start">
              {data.products.map((product) => {
                return <ProductCard key={product._id} product={product} />
              })}
            </div> */}
          {/* </div>
        </div> */}

        <div className="mt-5">
          <div className="flex items-center justify-center flex-col">
              <h2 className='text-lg font-medium'>Our Blogs</h2>
              <p className='text-gray-400'>Find a bright ideal to suit your taste with our great seclection</p>
          </div>
          <BlogCard />

          <div className='flex flex-col items-center'>
            <a href="/blog-page" className='font-medium'>View All Post</a>
            <hr className='mt-1 border bg-black w-20' />
          </div>
        </div>
        

        

        <InstagramSection />


      </main>



      {/* <div className="flex gap-5 my-5 justify-center">
        <Button disabled={Number(querYPage) === 1} onClick={() => setPrams({ page: Number(querYPage) - 1 })}>Prev</Button>
        <h1>{params.get('page') ?? 1}</h1>
        <Button onClick={() => setPrams({ page: Number(querYPage) + 1 })} disabled={data.totalPages === Number(querYPage)}>Next</Button>
      </div> */}




    </div>
  )
}



