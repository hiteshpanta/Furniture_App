import React from 'react'
import { useGetBlogsQuery } from './blogApi'
import { base } from '@/app/mainApi';

export default function BlogCard() {
  const {isLoading, error, data} = useGetBlogsQuery();

   if(error) return <div className='text-pink-900'>{error}</div>

    console.log(data);

  return (
    <div className='bg-white p-10'>
        <div className='grid grid-cols-4 space-x-5'>

          {data?.blogs?.map((item)=> {
            return <div className='flex flex-col space-y-5' key={item._id}>

              <img className="h-60 w-45 rounded-xl" src={`${base}/${item.image}`} alt="" />

              <p className='line-clamp-1'>{item.content}</p>

              <div className='flex flex-col items-center'>
                <a href="/blog-page" className='font-medium'>View More</a>
                <hr className='mt-1 border bg-black w-20' />
              </div>


            </div>
          })}

        
      

      </div>
    </div>
  )
}
