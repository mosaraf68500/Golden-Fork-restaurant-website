import React from 'react'
import { Helmet } from 'react-helmet'
import MenuHome from '../../components/ui/menu/components/MenuHome'
import MenuItem from '../../ReuseableComponents/SharedSectionTitle/menuItem/MenuItem'
import TodaysOffer from '../../components/ui/menu/components/TodaysOffer'
import Cover from '../../ReuseableComponents/SharedSectionTitle/OurMenuCover/Cover'

import desserts from "../../assets/home/chef-service.jpg"
import DessertsMenu from '../../components/ui/menu/components/DessertsMenu'
import PizzaMenu from '../../components/ui/menu/components/PizzaMenu'
import SaladsMenu from '../../components/ui/menu/components/SaladsMenu'
import Soups from '../../components/ui/menu/components/Soups'

import pizza from "../../assets/menu/pizza-bg.jpg"
import salad from "../../assets/menu/salad-bg.jpg"
import soup from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
  return (
    <div>
<Helmet>
        <title>Our Menu </title>
        <meta name="description" content="This is home page" />
      </Helmet>
      <MenuHome></MenuHome>
      <TodaysOffer></TodaysOffer>


      <Cover
    img={desserts} 
    title="DESSERTS" 
    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
/>

<DessertsMenu></DessertsMenu>



      <Cover
    img={pizza} 
    title="PIZZA" 
    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
/>

<PizzaMenu></PizzaMenu>



      <Cover
    img={salad} 
    title="SALAD" 
    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
/>



<SaladsMenu></SaladsMenu>



      <Cover
    img={soup} 
    title="SOUP" 
    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
/>




<Soups></Soups>
    </div>
  )
}

export default Menu
