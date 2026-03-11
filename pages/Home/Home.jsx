import React from 'react'
import HeroSection from '../../components/ui/Home/components/heroSection'
import OrderOnline from '../../components/ui/Home/components/OrderOnline'
import BistoBossNewsletter from '../../components/ui/Home/components/BistoBossNewsletter'

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>

      <OrderOnline></OrderOnline>
      <BistoBossNewsletter></BistoBossNewsletter>
    </div>
  )
}

export default Home
