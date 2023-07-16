import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
  },
  reducers: {
    productsRequest(state, action) {
      return {
        loading: true,
      }
    },
    productsSuccess(state, action) {
      return {
        products: action.payload.products,
      }
    },
    productsFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      }
    },
  },
})

const { actions, reducer } = cartSlice

export const { productsRequest, productsSuccess, productsFail } = actions

export default reducer
