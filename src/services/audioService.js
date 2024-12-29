import { pipeline } from '@xenova/transformers';

export const transcribeAudio = async (audioBlob) => {
  try {
    const response = await fetch('https://api.deepgram.com/v1/listen?detect_language=true&model=whisper-medium', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${import.meta.env.VITE_DEEPGRAM_API_KEY}`
      },
      body: audioBlob
    });
    
    const data = await response.json();
    return data.results.channels[0].alternatives[0].transcript;
  } catch (error) {
    console.error('Transcription error:', error);
    throw error;
  }
};

export const textToSpeech = async (text) => {
  try {
    const response = await fetch('https://api.neets.ai/v1/tts', {
      method: 'POST',
      headers: {
        'X-API-Key': import.meta.env.VITE_NEETS_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        voice_id: "samuel-jackson",
        params: {
          model: "ar-diff-50k"
        }
      })
    });

    const audioBlob = await response.blob();
    return URL.createObjectURL(audioBlob);
  } catch (error) {
    console.error('Text-to-speech error:', error);
    throw error;
  }
};