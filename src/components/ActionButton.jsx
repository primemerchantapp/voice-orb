import React from 'react';

const ActionButton = ({ icon, onClick, label }) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 text-emerald-500/80 hover:text-emerald-400 transition-colors"
      aria-label={label}
    >
      <span className="material-icons text-2xl mb-1">{icon}</span>
      <span className="text-xs font-light opacity-80">{label}</span>
    </button>
  );
};

export default ActionButton;