'use client'

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import PopularBurger from './PopularBurger/PopularBurger'
import Delivery from './Delivery/Delivery'
import Reservation from './Reservation/Reservation'
import NewsLetter from './Newsletter/NewsLetter'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Page = () => {
  useEffect(()=>{
    const initAOS = async()=>{
      await import ('aos')
      AOS.init({
        duration:1000,
        easing: 'ease',
        once: true,
        mirror:false,
        anchorPlacement: 'top-center'
      })
    }

    initAOS()
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Delivery/>
      <Reservation/>
      <NewsLetter/>
    </div>
  )
}

export default Page