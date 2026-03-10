import { base } from '@/app/mainApi';
import FeatureSection from '@/components/account/FeatureSection';
import TopBanner from '@/components/account/TopBanner';
import ShowDialog from '@/components/ShowDialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

export default function CartBox() {

  const { carts } = useSelector((state) => state.cartSlice);
  return (
    <div>
      <div><TopBanner title="Cart"
        paths={[
            { label: "Home", href: "/" },
            { label: "Cart" }
        ]}/></div>
      <div className='w-full'>
          <div className='p-10 [&>div]:rounded-sm [&>div]:border'>
            <Table>
              <TableHeader>
                <TableRow className='hover:bg-transparent'>

                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className='w-0'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {carts.map(item => (
                  <TableRow key={item.id} className='has-data-[state=checked]:bg-muted/50'>

                    <TableCell>
                      <div className='flex items-center gap-3'>
                        <Avatar className='rounded-sm'>
                          <AvatarImage src={`${base}/${item.image}`} alt={item.image} />
                          <AvatarFallback className='text-xs'>{item.title}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className='font-medium'>{item.title}</div>
                          <span className='text-muted-foreground mt-0.5 text-xs'>{item.brand}</span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <div className='flex gap-5 items-center'>
                        <Button
                          onClick={() => handleRemove(item)}
                          disabled={item.qty === 1}
                          variant="outline" size="icon">
                          <MinusIcon />
                        </Button>
                        <span>{item.qty}</span>
                        <Button
                          disabled={item.qty === item.stock}
                          onClick={() => handleAdd(item)} variant="outline" size="icon">
                          <PlusIcon />
                        </Button>
                      </div>

                    </TableCell>
                    <TableCell>Rs. {item.price * item.qty}</TableCell>
                    <TableCell className='flex items-center gap-1'>



                      <ShowDialog
                        func={() => handleRemoveItem(item)}

                        detail={'This action cannot be undone. This will permanently delete youraccount and remove your data from our servers.'}>

                        <Button variant='ghost' size='icon' className='rounded-full' >
                          <Trash2Icon />
                        </Button>



                      </ShowDialog>




                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>

        <div className='mt-8'><FeatureSection /></div>
        

    </div>
  )
}
