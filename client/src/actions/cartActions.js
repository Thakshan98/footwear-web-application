import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';
import { toast } from 'react-toastify';

export const addToCart = (id,size,count) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  const selectedSizeObj = data.size.find((sizeObj) => sizeObj.size === size);

   if (!selectedSizeObj) {
     return; // Size not found, handle this as required
   }

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      size: selectedSizeObj.size,
    
      count: count,
    },
  });  

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

  toast.success('Item added to the cart', {
    position: 'top-right',
  });
};
export const addToCartCustom = (id,name,image,price,size,count) => async (dispatch, getState) => {
  
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: id,
      name: name,
      image: image,
      price: price,
      size: size,
    
      count: count,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

  toast.success('Item added to the cart', {
    position: 'top-right',
  });

// ... rest of the actions ...
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

  toast.error('Remove Item from the cart', {
    position: 'top-right',
  })
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
