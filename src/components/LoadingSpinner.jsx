import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Amination/Loading.json';

const LoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      width: '100%'
    }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default LoadingSpinner;