import FeatureSection from '@/components/account/FeatureSection'
import TopBanner from '@/components/account/TopBanner'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import React from 'react'
import {  useNavigate } from 'react-router'

import { useGetUsersQuery } from './userApi'

export default function User() {
  const {isLoading, error,data} = useGetUsersQuery();


  if (error) return <div className='text-pink-900'>{error.message}</div>

  console.log(data)

//   const nav = useNavigate();

  return (
    <div>
      <div>
        <TopBanner 
          title="Blog"
          paths={[
            {Label: "Home", href: "/"},
            {label: "Blog"}

          ]}/>
      </div>

      <div>
        <div className="p-5">
        
              {/* <div className="mb-4">
                <Button
                  onClick={() => nav('/blog-add')}
                  className={'bg-green-700'}>Add Blog</Button>
              </div> */}
        
              <div className='w-full'>
                <div className='[&>div]:rounded-sm [&>div]:border'>
                  <Table>
                    <TableHeader>
                      <TableRow className='hover:bg-transparent'>
                        <TableHead>Username</TableHead>
                        <TableHead>Id</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>CreatedAt</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.user?.map(item => {
                         return <TableRow key={item._id}>

                          <TableCell>
                            <div className='flex items-center gap-3'>
                              {/* <Avatar>
                                <AvatarImage src={`${base}/${item.image}`} alt={item.image} />
                                
                              </Avatar> */}
                             
                              <div className='font-medium'>{item.username}</div>
                            </div>
                          </TableCell>
                          
                          <TableCell>{item._id}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.createdAt}</TableCell>
                          {/* <TableCell>
                            <Button onClick={() => nav(`/blog-edit/${item._id}`)} >
                              <EditIcon />
                            </Button>
                          </TableCell> */}
                          {/* <TableCell >
                            <RemoveBlog id={item._id} />
        
                          </TableCell> */}
                        </TableRow>
                      })}
                    </TableBody>
                  </Table>
                </div>
        
              </div>
        
            </div>
      </div>


      <div className='mt-10'>
        <FeatureSection />
      </div>
    </div>
  )
}
