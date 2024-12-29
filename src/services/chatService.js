const SYSTEM_PROMPT = "You are a helpful voice assistant.";

export const sendMessage = async (messages, text) => {
  const newMessage = { role: 'user', content: text };
  
  const response = await fetch('https://api.together.xyz/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "meta-llama/Llama-Vision-Free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
        newMessage
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
};