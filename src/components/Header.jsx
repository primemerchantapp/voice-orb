import React from 'react';

export const Header = ({ transcription }) => (
  <div className="space-y-8 text-center">
    <h1 className="text-emerald-500 text-4xl font-light">
      What Can I Do for<br />You Today?
    </h1>
    {transcription && (
      <p className="text-emerald-400/80 text-sm">{transcription}</p>
    )}
  </div>
);