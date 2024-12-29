import React from 'react';
import ActionButton from './ActionButton';

export const ActionBar = ({ onStartListening }) => (
  <div className="flex justify-around items-center p-6 pb-8">
    <ActionButton 
      icon="keyboard"
      label="Use Keyboard"
      onClick={() => {}}
    />
    <ActionButton 
      icon="radio_button_checked"
      label="Voice Input"
      onClick={onStartListening}
    />
    <ActionButton 
      icon="apps"
      label="Apps"
      onClick={() => {}}
    />
  </div>
);