import React from 'react'
import{  BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Contact from "./components/contact/Contact"
import Cart from "./components/Cart/Cart"
import Shipping from "./components/Cart/Shipping"
import ConfirmOrder from "./components/Cart/ConfirmOrder.jsx"
import PaymentSuccess from './components/Cart/PaymentSuccess.jsx'
import Login from './components/login/Login.jsx'
import Profile from "./components/Profile/Profile.jsx"
import MyOrders from './components/myOrders/MyOrders.jsx'
import OrderDetails from './components/myOrders/OrderDetails.jsx'
import Dashboard  from './components/admin/Dashboard.jsx'
import Orders from './components/admin/Orders.jsx'
import Users from './components/admin/Users.jsx'
import About from './components/about/About.jsx'

import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import  './styles/footer.scss'
import './styles/contact.scss'
import './styles/cart.scss'
import  './styles/shipping.scss'
import './styles/confirmOrder.scss'
import './styles/paymentsuccess.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/table.scss'
import './styles/orderdetails.scss'
import './styles/dashboard.scss'
import './styles/about.scss'
const App = () => {
  return <Router>
   <Header/>
   <Routes>
   <Route path ="/" element ={<Home/>}></Route>
    <Route path ="/contact" element={<Contact/>}></Route>
    <Route path ="/cart" element={<Cart/>}></Route> 
    <Route path ="/shipping" element ={<Shipping/>}></Route> 
    <Route path = "/confirmorder" element ={<ConfirmOrder/>}/>
    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    <Route path ="/Login" element ={<Login/>}/>
    <Route path ="/me" element ={<Profile/>}/>
    <Route path ="/myorders" element ={<MyOrders/>}/>
    <Route path ="/order/:id" element ={<OrderDetails/>}/>
    <Route path ="/admin/dashboard" element ={<Dashboard/>}/>
    <Route path="/admin/users" element={<Users />} />
    <Route path="/admin/orders" element={<Orders />} />
    {/* <Route path="*" element={<NotFound />} /> */}
    <Route path ="/about" element ={<About/>}/>
     </Routes>
   <Footer/>
  </Router>
}

export default App
