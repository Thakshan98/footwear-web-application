import React from 'react'
import { BrowserRouter , Route, Routes,} from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer'
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
import AboutUsScreen from './screens/AboutUs'
import FeedbackScreen from './screens/FeedbackScreen'
import FeedbackListScreen from './screens/FeedbackListScreen'
import FeedbackDetailScreen from './screens/FeedbackDetailScreen'
import PrivacyPolicy from './screens/PrivacyPolicy'
import ShippingPolicy from './screens/ShippingPolicy'
import TermAndCondition from './screens/TermAndCondition'
import OrderPolicy from './screens/OrderPolicy'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
    <BrowserRouter>
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
            <Route path='/admin/categorylist' element={<CategoryListScreen />} />
            <Route path='//admin/category/:id/edit' element={<CategoryEditScreen />} />
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
            <Route path='/admin/category/:id/edit' element={<CategoryEditScreen />} />
            <Route path='/admin/category/create' element={<CategoryCreateScreen />} />
            <Route path='/admin/product/create' element={<ProductCreateScreen />} />
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditScreen />}
            />
            <Route path='/admin/orderlist' element={<OrderListScreen />} />
            <Route path='/search/:keyword' element={<HomeScreen />} exact />
            <Route path='/page/:pageNumber' element={<HomeScreen />} exact />
            <Route
              path='/search/:keyword/page/:pageNumber'
              element={<HomeScreen />}
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
