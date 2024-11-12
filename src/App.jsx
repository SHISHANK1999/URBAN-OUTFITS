import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login' 
import Orders from './pages/Orders'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from './pages/PlaceOrder.jsx'



const App = () => {
  return (
  
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
    <Navbar />
    <SearchBar />
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Collection' element={<Collection/>} />
       <Route path='/About' element={<About />} />
       <Route path='/Contact' element={<Contact/>} />
       <Route path='/Product/:ProductId' element={<Product/>} />
       <Route path='/Cart' element={<Cart/>} />
       <Route path='/Login' element={<Login/>} />
       <Route path='/place-order' element={<PlaceOrder />} />
       <Route path='/Orders' element={<Orders/>} />
      </Routes>
      <Footer />
    </div>
   
  )
}

export default App
