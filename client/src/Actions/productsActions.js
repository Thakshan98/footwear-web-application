import axios from 'axios'
import {
  productsFail,
  productsRequest,
  productsSuccess,
} from '../Slice/productsSlice'

export const getProducts = async (dispatch) => {
  try {
    dispatch(productsRequest())
    const { data } = axios.get('/api/v1/products')
    dispatch(productsSuccess(data))
  } catch (error) {
    dispatch(productsFail(error.response.data.message))
  }
}
