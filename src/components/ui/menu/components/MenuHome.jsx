import React from 'react'
import Cover from '../../../../ReuseableComponents/SharedSectionTitle/OurMenuCover/Cover'
import menuImage from "../../../../assets/menu/banner3.jpg"

const MenuHome = () => {
  return (
    <div>
      <Cover
    img={menuImage} 
    title="Our Menu" 
    subTitle="Would you like to try a dish?" 
/>
    </div>
  )
}

export default MenuHome
