import React from 'react';

export const MicrophoneWaveform = ({ isListening }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`p-4 rounded-full ${
          isListening 
            ? 'bg-red-500 animate-pulse' 
            : 'bg-blue-500'
        }`}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
      </button>
    </div>
  );
};