import React, { useState, useCallback } from 'react';
import { useVoiceAssistant } from '../hooks/useVoiceAssistant';
import { sendMessage } from '../services/chatService';
import { textToSpeech } from '../services/audioService';
import { Header } from './Header';
import { ActionBar } from './ActionBar';
import GlowingOrb from './GlowingOrb';

const VoiceAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [transcription, setTranscription] = useState('');

  const handleTranscription = useCallback(async (text) => {
    setTranscription(text);
    try {
      const botResponse = await sendMessage(messages, text);
      setMessages(prev => [...prev, 
        { role: 'user', content: text },
        { role: 'assistant', content: botResponse }
      ]);
      
      const audioUrl = await textToSpeech(botResponse);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error('Error:', error);
    }
  }, [messages]);

  const { isListening, startListening } = useVoiceAssistant(handleTranscription);

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
        <div className="absolute top-6 left-6 text-emerald-500/80 text-sm font-light">
          I can search new contacts
        </div>
        
        <Header transcription={transcription} />

        <div className="mt-12">
          <GlowingOrb isListening={isListening} />
        </div>
      </div>
      
      <ActionBar onStartListening={startListening} />
    </div>
  );
};

export default VoiceAssistant;