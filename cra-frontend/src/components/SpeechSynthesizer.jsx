import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Select,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

const SpeechSynthesizer = () => {
  const [text, setText] = useState('');
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const updateVoices = () => {
      const updatedVoices = synth.getVoices();
      setVoices(updatedVoices);
      setSelectedVoice(updatedVoices[0]);
    };

    updateVoices();

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = updateVoices;
    }
  }, []);

  const handleSpeak = () => {
    const synth = window.speechSynthesis;

    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }

    if (text.trim() !== '') {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.voice = selectedVoice;
      utterThis.pitch = pitch;
      utterThis.rate = rate;

      synth.speak(utterThis);
    }
  };

  const handleVoiceChange = (event) => {
    const selectedOption = event.target.value;
    const selectedVoice = voices.find((voice) => `${voice.name} (${voice.lang})` === selectedOption);
    setSelectedVoice(selectedVoice);
  };

  return (
    <Box textAlign="center" p={8}>
      <Heading>Speech Synthesizer</Heading>
      <Text>
        Enter some text in the input below and press return or the "play" button to hear it. Change voices using the
        dropdown menu.
      </Text>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="txt">Enter text</label>
        <Input
          id="txt"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          mt={2}
          mb={4}
          placeholder="Enter text"
        />

        <Box>
          <label htmlFor="pitch">Pitch</label>
          <Slider
            id="pitch"
            min={0}
            max={2}
            step={0.1}
            value={pitch}
            onChange={(value) => setPitch(value)}
            mt={2}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mt={1}>{pitch.toFixed(1)}</Text>
        </Box>

        <Box>
          <label htmlFor="rate">Rate</label>
          <Slider
            id="rate"
            min={0.5}
            max={2}
            step={0.1}
            value={rate}
            onChange={(value) => setRate(value)}
            mt={2}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mt={1}>{rate.toFixed(1)}</Text>
        </Box>

        <Select
          onChange={handleVoiceChange}
          value={selectedVoice ? `${selectedVoice.name} (${selectedVoice.lang})` : ''}
          mt={4}
        >
          {voices.map((voice, index) => (
            <option key={index} value={`${voice.name} (${voice.lang})`}>
              {`${voice.name} (${voice.lang})`}
            </option>
          ))}
        </Select>

        <Button type="submit" mt={4} onClick={handleSpeak}>
          Play
        </Button>
      </form>
    </Box>
  );
};

export default SpeechSynthesizer;
