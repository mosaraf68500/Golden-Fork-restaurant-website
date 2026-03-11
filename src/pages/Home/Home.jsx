import React from 'react'

import HeroSection from '../../components/ui/Home/components/HeroSection'
import OrderOnline from '../../components/ui/Home/components/OrderOnline'
import BistoBossNewsletter from '../../components/ui/Home/components/BistoBossNewsletter'
import PopularMenu from '../../components/ui/Home/components/PopularMenu'
import CallUs from '../../components/ui/Home/components/CallUs'
import RecommendsMenu from '../../components/ui/Home/components/RecommendsMenu'
const Home = () => {
  return (
    <div>
<HeroSection></HeroSection>

      <OrderOnline></OrderOnline>
      <BistoBossNewsletter></BistoBossNewsletter>
      <PopularMenu></PopularMenu>

      <CallUs></CallUs>
      <RecommendsMenu></RecommendsMenu>
    </div>
  )
}

export default Home
