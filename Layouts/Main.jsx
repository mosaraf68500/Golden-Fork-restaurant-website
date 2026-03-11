
import { Outlet } from 'react-router'
import Footer from '../components/shared/footer/Footer'
import Navbar from '../components/shared/navbar/Navbar'

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
