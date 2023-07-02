import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from './pages/About.js'
import Register from './pages/Auth/Register.js'
import Login from './pages/Auth/Login.js'
import Contact from './pages/Contact.js'
import Homepage from "./pages/Home.js"
import Pagenotfound from './pages/Pagenotfound.js'
import Policy from './pages/Policy.js'
import Dashboard from './pages/user/Dashboard.js'
import PrivateRoute from './components/Layout/Routes/Private.js'
import ForgotPassword from './pages/Auth/ForgotPassword.js'
import AdminRoute from './components/Layout/Routes/AdminRoutes.js'
import AdminDashboard from './pages/admin/AdminDashboard.js'
import CreateCategory from './pages/admin/CreateCategory.js'
import CreateProduct from './pages/admin/CreateProduct.js'
import Users from './pages/admin/Users.js'
import Profile from './pages/user/Profile.js'
import Orders from './pages/user/Orders.js'
import Pokedetails from './pages/Pokedetails.js'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/pokedetails' element={<Pokedetails/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>} >
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/profile' element={<Profile/>}/>
      <Route path='user/orders' element={<Orders/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>} >
      <Route path='admin' element={<AdminDashboard/>}/>
      <Route path='admin/Create-category' element={<CreateCategory/>}/>
      <Route path='admin/Create-product' element={<CreateProduct/>}/>
      <Route path='admin/users' element={<Users/>}/>
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    </>
  )
}

export default App