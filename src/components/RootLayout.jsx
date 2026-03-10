import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <>

      <Header />

      <main className=''>
        <Outlet />
      </main>

      <Footer />


    </>
  )
}
