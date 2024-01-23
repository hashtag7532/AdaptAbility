import React, { useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Box } from '@chakra-ui/react';
const TextToSpeechComponent = () => {
  const [inputText, setInputText] = useState('');
  const [audioDataUrl, setAudioDataUrl] = useState(null);

  const handleTextToSpeech = async () => {
    try {
      const hf = new HfInference('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');
      const result = await hf.textToSpeech({
        model: 'espnet/kan-bayashi_ljspeech_vits',
        inputs: inputText,
      });

      // Convert the Blob to a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setAudioDataUrl(reader.result);
      };
      reader.readAsDataURL(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleResetAudio = () => {
    setAudioDataUrl(null);
  };

  return (
    <div>
      <h1 >Text to Speech</h1>
      <Box p={4}>
        <label htmlFor="inputText">Enter Text:</label>
        <textarea
          id="inputText"
          rows="4"
          cols="50"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </Box>
      <button onClick={handleTextToSpeech}>Generate Audio</button>
      <button onClick={handleResetAudio}>Reset Audio</button>

      {audioDataUrl && (
        <div>
          <h2>Audio Output:</h2>
          <audio controls>
            <source src={audioDataUrl} type="audio/flac" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeechComponent;