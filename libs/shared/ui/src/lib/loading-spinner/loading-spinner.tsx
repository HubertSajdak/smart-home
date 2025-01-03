import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return <ThreeDots height={80} width={80} aria-label="three-dots-loading" color={'white'} />;
};
