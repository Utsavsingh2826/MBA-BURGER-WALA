import React from 'react'
import{  BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Contact from "./components/contact/Contact"
import Cart from "./components/Cart/Cart"
import Shipping from "./components/Cart/Shipping"
import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import  './styles/footer.scss'
import './styles/contact.scss'
import './styles/cart.scss'
import  './styles/shipping.scss'
const App = () => {
  return <Router>
   <Header/>
   <Routes>
   <Route path ="/" element ={<Home/>}></Route>
    <Route path ="/contact" element={<Contact/>}></Route>
    <Route path ="/cart" element={<Cart/>}></Route> 
    <Route path ="/shipping" element ={<Shipping/>}></Route> 
     </Routes>
   <Footer/>
  </Router>
}

export default App
