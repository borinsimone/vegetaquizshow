import React, { useState } from 'react';
import {
  GuessForm as GuessFormSection,
  GuessTitle,
  GuessInput,
  SubmitButton,
} from '../styles/CityStyles';

const GuessForm = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = () => {
    if (guess.trim()) {
      onGuess(guess);
      setGuess('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <GuessFormSection>
      <GuessTitle>Indovina la città:</GuessTitle>
      <GuessInput
        type='text'
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder='Scrivi il nome della città...'
      />
      <SubmitButton
        onClick={handleSubmit}
        disabled={!guess.trim()}
      >
        Conferma
      </SubmitButton>
    </GuessFormSection>
  );
};

export default GuessForm;
