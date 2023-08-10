import {
    FEEDBACK_CREATE_REQUEST,
    FEEDBACK_CREATE_SUCCESS,
    FEEDBACK_CREATE_FAIL,
    FEEDBACK_CREATE_RESET,
    FEEDBACK_DETAILS_FAIL,
    FEEDBACK_DETAILS_SUCCESS,
    FEEDBACK_DETAILS_REQUEST,
    FEEDBACK_LIST_FAIL,
    FEEDBACK_LIST_SUCCESS,
    FEEDBACK_LIST_REQUEST, 
  } from '../constants/feedbackConstants'

  export const feedbackCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case FEEDBACK_CREATE_REQUEST:
        return {
          loading: true,
        }
      case FEEDBACK_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
          order: action.payload,
        }
      case FEEDBACK_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case FEEDBACK_CREATE_RESET:
        return {}
      default:
        return state
    }
  }

  export const feedbackDetailsReducer = (
    state = { loading: true, feedbacks: [] },
    action
  ) => {
    switch (action.type) {
      case FEEDBACK_DETAILS_REQUEST:
        return { loading: true, feedbacks: [] }
      case FEEDBACK_DETAILS_SUCCESS:
        return {
          loading: false,
          feedbacks: action.payload,
        }
      case FEEDBACK_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }


  export const feedbackListReducer = (state = { feedbacks: [] }, action) => {
    switch (action.type) {
      case FEEDBACK_LIST_REQUEST:
        return {
          loading: true,
        }
      case FEEDBACK_LIST_SUCCESS:
        return {
          loading: false,
          feedbacks: action.payload,
        }
      case FEEDBACK_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }