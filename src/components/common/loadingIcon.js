import React from 'react';
import { SpiralSpinner } from 'react-spinners-kit';

const LoadingIcon = () => (
  <span className="d-flex flex-column align-items-center centered">
    <SpiralSpinner size={120} frontColor="#42B5E8" loading />
    <p className="h6 font-weight-light mt-3">Loading...</p>
  </span>
);

export default LoadingIcon;
