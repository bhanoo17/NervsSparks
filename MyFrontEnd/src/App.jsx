import './App.css'
import Home from './pages/Home'
import Header from './components/navbar/Header'
import Footer from './components/navbar/Footer'
import About from './pages/About'
import Deals from './pages/Deals'
import ContactUs from './pages/ContactUs'
import UserLogin from './components/authentications/userAuth/UserLogin'
import UserSignup from './components/authentications/userAuth/UserSignup'
import Explore from './components/vehicle/VehicleList'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Home />} />
      <Route path='explore' element={<Explore />} />
      <Route path='deals' element={<Deals />} />
      <Route path='about' element={<About />} />
      <Route path='user/login' element={<UserLogin />} />
      <Route path='user/signup' element={<UserSignup />} />
      <Route path='contactus' element={<ContactUs />} />
    </Route>
  )
)


function App() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  )
}

export default router
