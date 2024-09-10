import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Banner imageSrc="https://images.pexels.com/photos/2874782/pexels-photo-2874782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Footer />
    </>
  )
}

export default page
