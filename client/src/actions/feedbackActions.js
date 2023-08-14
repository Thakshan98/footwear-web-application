import axios from 'axios'
import {
  FEEDBACK_CREATE_REQUEST,
  FEEDBACK_CREATE_SUCCESS,
  FEEDBACK_CREATE_FAIL,
  FEEDBACK_DETAILS_FAIL,
  FEEDBACK_DETAILS_SUCCESS,
  FEEDBACK_DETAILS_REQUEST,
  FEEDBACK_LIST_FAIL,
  FEEDBACK_LIST_SUCCESS,
  FEEDBACK_LIST_REQUEST,
} from '../constants/feedbackConstants'
import { logout } from './userActions'
import { toast } from 'react-toastify'

export const createFeedback = (feedback) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FEEDBACK_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/feedback`, feedback, config)

    dispatch({
      type: FEEDBACK_CREATE_SUCCESS,
      payload: data,
    })

    toast.success('Feedback send successfully', {
      position: 'top-right',
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: FEEDBACK_CREATE_FAIL,
      payload: message,
    })
  }
}

export const getFeedbackDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: FEEDBACK_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/feedback/${id}`)

    dispatch({
      type: FEEDBACK_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: FEEDBACK_DETAILS_FAIL,
      payload: message,
    })
  }
}

export const listFeedbacks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FEEDBACK_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/feedback`, config)

    dispatch({
      type: FEEDBACK_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: FEEDBACK_LIST_FAIL,
      payload: message,
    })
  }
}
