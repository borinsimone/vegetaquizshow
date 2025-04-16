import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import {
  ResultBox,
  ResultIcon,
  ResultTitle,
  ResultDetails,
  ButtonGroup,
  ResultButton,
} from '../styles/CityStyles';

const ResultScreen = ({
  isCorrect,
  cityName,
  points,
  onPlayAgain,
  onReturn,
}) => {
  return (
    <ResultBox $correct={isCorrect}>
      <ResultIcon>{isCorrect ? <FaCheck /> : <FaTimes />}</ResultIcon>
      <ResultTitle>{isCorrect ? 'Corretto!' : 'Sbagliato!'}</ResultTitle>
      <ResultDetails>
        {isCorrect
          ? `Era ${cityName}! Hai guadagnato ${points} punti!`
          : `Era ${cityName}. Nessun punto guadagnato.`}
      </ResultDetails>
      <ButtonGroup>
        <ResultButton onClick={onPlayAgain}>Gioca ancora</ResultButton>
        <ResultButton onClick={onReturn}>Torna ai giochi</ResultButton>
      </ButtonGroup>
    </ResultBox>
  );
};

export default ResultScreen;
