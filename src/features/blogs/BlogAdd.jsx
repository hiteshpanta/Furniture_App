import React from 'react'
import BlogAddForm from './BlogAddForm'
import TopBanner from '@/components/account/TopBanner'

export default function BlogAdd() {
  return (
    <div>
      <div>
        <TopBanner 
        title="Blog"
        paths={[
            { label: "Admin", href: "/" },
            { label: "Blog" }
        ]}/>
      </div>


        <div className='flex justify-center'>
          < BlogAddForm />
        </div>

        
    </div>
    
  )
}
