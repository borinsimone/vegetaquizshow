import React from 'react';
import {
  GuessFormContainer,
  GuessInput,
  SubmitButton,
} from '../styles/CityStyles';

const GuessForm = ({ value, onChange, onSubmit, disabled }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled) {
      onSubmit();
    }
  };

  return (
    <GuessFormContainer>
      <GuessInput
        type='text'
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder='Nome della città...'
      />
      <SubmitButton
        onClick={onSubmit}
        disabled={disabled}
      >
        Indovina
      </SubmitButton>
    </GuessFormContainer>
  );
};

export default GuessForm;
