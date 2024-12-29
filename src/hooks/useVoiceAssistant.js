import { useState, useEffect } from 'react';
import { createVADModule } from '@ricky0123/vad-web';
import { transcribeAudio } from '../services/audioService';

export const useVoiceAssistant = (onTranscription) => {
  const [isListening, setIsListening] = useState(false);
  const [vad, setVad] = useState(null);

  useEffect(() => {
    const initVAD = async () => {
      try {
        const vadModule = await createVADModule({
          onSpeechStart: () => setIsListening(true),
          onSpeechEnd: async (audio) => {
            setIsListening(false);
            try {
              const transcript = await transcribeAudio(audio);
              onTranscription(transcript);
            } catch (error) {
              console.error('Error processing audio:', error);
            }
          },
          onVADMisfire: () => setIsListening(false)
        });
        setVad(vadModule);
      } catch (error) {
        console.error('Error initializing VAD:', error);
      }
    };

    initVAD();

    return () => {
      vad?.destroy();
    };
  }, [onTranscription]);

  return {
    isListening,
    startListening: () => vad?.start(),
    stopListening: () => vad?.stop()
  };
};