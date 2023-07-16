import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import Rootlayout from './Layout/RootLayout'
import Home from './Screen/Home'
import About from './Screen/About'
import Contact from './Screen/Contact'
import Product from './Screen/Product'
import SignIn from './Screen/SignIn'
import Register from './Screen/Register'
import WishList from './Screen/WishList'
import ShoppingCart from './Screen/ShoppingCart'
import Category from './Screen/Category'
import Account from './Screen/Account'
import NewArrivals from './Screen/NewArrivals'
import Men from './Screen/Men'
import Child from './Screen/Child'
import SoldOut from './Screen/SoldOut'
import Women from './Screen/Women'
import Functions from './Screen/Functions'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/product' element={<Product />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/account' element={<Account />} />
      <Route path='/wish-list' element={<WishList />} />
      <Route path='/shopping-cart' element={<ShoppingCart />} />
      <Route index element={<Category />}/>
      <Route path='/new-arrivals' element={<NewArrivals />} />
      <Route path='/men' element={<Men/>} />
      <Route path='/women' element={<Women/>} />
      <Route path='/child' element={<Child/>} />
      <Route path='/sold-out' element={<SoldOut/>} />
      <Route path='/function' element={<Functions/>} />
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
