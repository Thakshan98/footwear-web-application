import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import Rootlayout from './Layout/RootLayout'
import Home from './Screen/Home'
import AboutUs from './Screen/AboutUs'
import ContactUs from './Screen/ContactUs'
import Product from './Screen/Product'
import SignIn from './Screen/SignIn'
import Register from './Screen/Register'
import WishList from './Screen/WishList'
import ShoppingCart from './Screen/ShoppingCart'
import Category from './Screen/Category'
import NewArrivals from './Screen/NewArrivals'
import Men from './Screen/Men'
import Child from './Screen/Child'
import SoldOut from './Screen/SoldOut'
import Women from './Screen/Women'
import Functions from './Screen/Functions'
import NotFound from './Screen/NotFound'
import Profile from './Screen/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='/not-found' element={<NotFound />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/product' element={<Product />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/wish-list' element={<WishList />} />
      <Route path='/shopping-cart' element={<ShoppingCart />} />
      <Route index element={<Category />} />
      <Route path='/new-arrivals' element={<NewArrivals />} />
      <Route path='/men' element={<Men />} />
      <Route path='/women' element={<Women />} />
      <Route path='/child' element={<Child />} />
      <Route path='/sold-out' element={<SoldOut />} />
      <Route path='/function' element={<Functions />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
