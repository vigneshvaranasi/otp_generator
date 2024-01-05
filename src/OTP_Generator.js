import React, { useState } from 'react';
import './OTP_Generator.css';

const OtpGenerator = () => {
  const [otp, setOtp] = useState('');

  const generateOtp = () => {
    // Generate a random 6-digit OTP
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
  };

  return (
    <div className='box'>
      <h1>OTP Generator</h1>
      <button className='btn' onClick={generateOtp}>Generate OTP</button>
      {otp && (
        <div>
          <h2>Your OTP:</h2>
          <p className='otp'>{otp}</p>
        </div>
      )}
    </div>
  );
};

export default OtpGenerator;
