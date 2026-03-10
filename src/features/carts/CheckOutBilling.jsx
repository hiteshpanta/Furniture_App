import TopBanner from '@/components/account/TopBanner'
import React from 'react'
import CheckoutForm from './CheckOutForm'

export default function CheckOutBilling() {
  return (
    <div>
      <TopBanner 
        title="CheckOut"
        paths={[
            { label: "Home", href: "/" },
            { label: "CheckOut" }
        ]}
      />

      <div>
        <CheckoutForm />
      </div>
      
    </div>
  )
}
