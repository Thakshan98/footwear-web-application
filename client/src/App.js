import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import CategoryListScreen from './screens/CategoryListScreen'
import CategoryEditScreen from './screens/CategoryEditScreen'
import CategoryCreateScreen from './screens/CategoryCreateScreen'
import ProductCreateScreen from './screens/ProductCreateScreen'

import OrderListScreen from './screens/OrderListScreen'
import AboutUsScreen from './screens/ContactUs'
import FeedbackScreen from './screens/FeedbackScreen'
import FeedbackListScreen from './screens/FeedbackListScreen'
import FeedbackDetailScreen from './screens/FeedbackDetailScreen'
import PrivacyPolicy from './screens/PrivacyPolicy'
import ShippingPolicy from './screens/ShippingPolicy'
import TermAndCondition from './screens/TermAndCondition'
import OrderPolicy from './screens/OrderPolicy'
import Layout from './components/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ShopScreen from './screens/ShopScreen'
import MenCollection from './screens/MenCollection'
import WomenCollection from './screens/WomenCollection'
import UnisexCollection from './screens/UnisexCollection'
import Dashboard from './screens/Dashboard'
import EmailVerificationScreen from './screens/EmailVerification'
import { DesignScreen } from './screens/DesignScreen'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/about' element={<AboutUsScreen />} />
            <Route path='/feedback' element={<FeedbackScreen />} />
            <Route path='/design' element={<DesignScreen />} />
            <Route
              path='/verify-user/:email/:token'
              element={<EmailVerificationScreen />}
            />
            <Route
              path='/admin/feedback'
              element={<FeedbackListScreen />}
              exact
            />

            <Route
              path='/admin/feedback/:id'
              element={<FeedbackDetailScreen />}
            />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/term-and-conditions' element={<TermAndCondition />} />
            <Route path='/order-policy' element={<OrderPolicy />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
            <Route path='/men-collection' element={<MenCollection />} />
            <Route path='/women-collection' element={<WomenCollection />} />
            <Route path='/unisex-collection' element={<UnisexCollection />} />
            <Route
              path='/admin/categorylist'
              element={<CategoryListScreen />}
            />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route
              path='//admin/category/:id/edit'
              element={<CategoryEditScreen />}
            />
            <Route path='/shop' element={<ShopScreen />} />
            <Route path='/shop/:pageNumber' element={<ShopScreen />} />
            <Route
              path='/admin/productlist'
              element={<ProductListScreen />}
              exact
            />
            <Route
              path='/admin/productlist/:pageNumber'
              element={<ProductListScreen />}
              exact
            />
            <Route
              path='/admin/categorylist/:pageNumber'
              element={<CategoryListScreen />}
              exact
            />

            <Route
              path='/admin/categorylist'
              element={<CategoryListScreen />}
              exact
            />
            {/* <Route path='/' element={<FeedbackScreen />} />  */}
            <Route
              path='/admin/category/:id/edit'
              element={<CategoryEditScreen />}
            />
            <Route
              path='/admin/category/create'
              element={<CategoryCreateScreen />}
            />
            <Route
              path='/admin/product/create'
              element={<ProductCreateScreen />}
            />
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditScreen />}
            />
            <Route path='/admin/orderlist' element={<OrderListScreen />} />
            <Route path='/search/:keyword' element={<ShopScreen />} exact />
            <Route path='/page/:pageNumber' element={<ShopScreen />} exact />
            <Route
              path='/search/:keyword/page/:pageNumber'
              element={<ShopScreen />}
              exact
            />
            <Route path='/' element={<HomeScreen />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
