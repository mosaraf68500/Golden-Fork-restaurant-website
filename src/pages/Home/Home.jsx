import React from 'react'

import HeroSection from '../../components/ui/Home/components/HeroSection'
import OrderOnline from '../../components/ui/Home/components/OrderOnline'
import BistoBossNewsletter from '../../components/ui/Home/components/BistoBossNewsletter'
import PopularMenu from '../../components/ui/Home/components/PopularMenu'
import CallUs from '../../components/ui/Home/components/CallUs'
import RecommendsMenu from '../../components/ui/Home/components/RecommendsMenu'
import OurMenuSection from '../../components/ui/Home/components/OurMenuSection'
import ReviewSection from '../../components/ui/Home/components/ReviewSection'
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>

       <Helmet>
        <title>Home </title>
        <meta name="description" content="This is home page" />
      </Helmet>
       <HeroSection></HeroSection>
      <OrderOnline></OrderOnline>
      <BistoBossNewsletter></BistoBossNewsletter>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <RecommendsMenu></RecommendsMenu>
      <OurMenuSection></OurMenuSection>
      <ReviewSection></ReviewSection>
    </div>
  )
}

export default Home
