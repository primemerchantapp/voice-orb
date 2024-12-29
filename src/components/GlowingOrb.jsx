import React from 'react';

const GlowingOrb = ({ isListening, size = 'large' }) => {
  const sizeClasses = {
    large: 'w-32 h-32',
    small: 'w-16 h-16'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${isListening ? 'animate-pulse' : ''}`}>
      <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-2xl"></div>
      <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400/80 to-emerald-600/80 rounded-full 
        ${isListening ? 'animate-spin-slow' : ''}`}></div>
      <div className="absolute inset-2 bg-black/90 rounded-full"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full"></div>
    </div>
  );
};

export default GlowingOrb;