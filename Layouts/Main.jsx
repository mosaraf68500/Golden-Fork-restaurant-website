
import { Outlet } from 'react-router'
import Navbar from '../src/components/shared/navbar/Navbar'
import Footer from '../src/components/shared/footer/Footer'


const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}

export default Main
