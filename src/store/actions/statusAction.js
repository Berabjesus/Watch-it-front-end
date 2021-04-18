import { SET_LOADING, SET_ERRORS, SET_SUCCESS } from '../types';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setSuccess = () => ({
  type: SET_SUCCESS,
});

export const setErrors = (payload) => ({
  type: SET_ERRORS,
  payload,
});
