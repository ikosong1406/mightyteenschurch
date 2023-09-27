import { Outlet } from 'react-router-dom'
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css';

const layout = () => {
  return (
  <div className='layout-container'>
    <Header />
    <Outlet />
    <Footer />
  </div>
  )
}

export default layout