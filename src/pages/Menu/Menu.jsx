import React from 'react'
import { Helmet } from 'react-helmet'
import MenuHome from '../../components/ui/menu/components/MenuHome'

const Menu = () => {
  return (
    <div>
<Helmet>
        <title>Our Menu </title>
        <meta name="description" content="This is home page" />
      </Helmet>
      <MenuHome></MenuHome>
    </div>
  )
}

export default Menu
