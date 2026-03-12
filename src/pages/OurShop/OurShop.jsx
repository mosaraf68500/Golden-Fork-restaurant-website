import React from 'react'
import Cover from '../../ReuseableComponents/SharedSectionTitle/OurMenuCover/Cover'
import shop from "../../assets/shop/banner2.jpg"
import ShopPageAllCategories from '../../components/ui/OurShop/ShopPageAllCategories'
const OurShop = () => {
  return (
    <div>
       <Cover
    img={shop} 
    title="OUR SHOP" 
    subTitle="Would you like to try a dish?" 
/>


<ShopPageAllCategories></ShopPageAllCategories>
    </div>
  )
}

export default OurShop
