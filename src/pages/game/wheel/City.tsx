import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';

// Database di città Pokémon con immagini di dettagli
const POKEMON_CITIES = [
  {
    id: 1,
    name: 'Biancavilla',
    image: '/images/cities/pallet-town.jpg',
    hint: 'La città natale di Ash Ketchum',
  },
  {
    id: 2,
    name: 'Smeraldopoli',
    image: '/images/cities/celadon-city.jpg',
    hint: 'Famosa per il centro commerciale e la palestra di tipo Erba',
  },
  {
    id: 3,
    name: 'Celestopoli',
    image: '/images/cities/saffron-city.jpg',
    hint: 'Sede della Silph Co. e della palestra di tipo Psico',
  },
  {
    id: 4,
    name: 'Aranciopoli',
    image: '/images/cities/vermilion-city.jpg',
    hint: 'Una città portuale con una palestra di tipo Elettro',
  },
  {
    id: 5,
    name: 'Azzurropoli',
    image: '/images/cities/cerulean-city.jpg',
    hint: 'Città con una palestra di tipo Acqua gestita dalle sorelle di Misty',
  },
  // Aggiungi altre città secondo necessità
];

function City() {
  const navigate = useNavigate();
  const location = useLocation();
  const { activePlayer, updatePlayerScore } = useGlobalContext();

  const [currentCity, setCurrentCity] = useState(null);
  const [guessInput, setGuessInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Ottieni il giocatore e il segmento dalla location state
  useEffect(() => {
    if (activePlayer) {
      console.log('Giocatore attivo:', activePlayer);
    } else {
      navigate('/game/wheel');
      return;
    }

    // Seleziona una città casuale all'avvio
    const randomCity =
      POKEMON_CITIES[Math.floor(Math.random() * POKEMON_CITIES.length)];
    setCurrentCity(randomCity);
  }, [location.state, navigate]);

  const handleGuess = () => {
    if (!currentCity || !guessInput.trim()) return;

    const normalizedGuess = guessInput.trim().toLowerCase();
    const normalizedAnswer = currentCity.name.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct && activePlayer) {
      // Assegna 400 punti per una risposta corretta
      const newScore = activePlayer.score + 400;
      updatePlayerScore(activePlayer.id, newScore);
      setActivePlayer({
        ...activePlayer,
        score: newScore,
      });
    }
  };

  const handleReturn = () => {
    navigate('/game/wheel');
  };

  return (
    <GameContainer>
      <BackButton onClick={handleReturn}>
        <FaArrowLeft /> Torna alla Ruota
      </BackButton>

      <PageTitle>Indovina la Città Pokémon</PageTitle>

      <PlayerBanner>
        <PlayerInfo>
          <PlayerName>{activePlayer?.name || 'Giocatore'}</PlayerName>
          <PlayerScore>{activePlayer?.score || 0} punti</PlayerScore>
        </PlayerInfo>
      </PlayerBanner>

      <GameContent>
        {!showResult ? (
          <>
            <CityImageContainer>
              {currentCity && (
                <CityImage
                  src={currentCity.image}
                  alt='Dettaglio città Pokémon'
                />
              )}
            </CityImageContainer>

            {showHint && currentCity && (
              <HintBox>
                <HintText>{currentCity.hint}</HintText>
              </HintBox>
            )}

            <GuessForm>
              <GuessInput
                type='text'
                value={guessInput}
                onChange={(e) => setGuessInput(e.target.value)}
                placeholder='Nome della città...'
              />
              <ButtonGroup>
                <SubmitButton
                  onClick={handleGuess}
                  disabled={!guessInput.trim()}
                >
                  Indovina
                </SubmitButton>
                <HintButton
                  onClick={() => setShowHint(true)}
                  disabled={showHint}
                >
                  Suggerimento
                </HintButton>
              </ButtonGroup>
            </GuessForm>
          </>
        ) : (
          <ResultBox $correct={isCorrect}>
            <ResultIcon>{isCorrect ? <FaCheck /> : <FaTimes />}</ResultIcon>
            <ResultTitle>{isCorrect ? 'Corretto!' : 'Sbagliato!'}</ResultTitle>
            <ResultDetails>
              {isCorrect
                ? `La città era ${currentCity.name}! Hai guadagnato 400 punti!`
                : `La città era ${currentCity.name}. Nessun punto guadagnato.`}
            </ResultDetails>
            <ResultButton onClick={handleReturn}>Torna alla Ruota</ResultButton>
          </ResultBox>
        )}
      </GameContent>

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default City;

// Styled components
// ... Gli stessi stili base di Sound.tsx ...

const CityImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  border: 3px solid #ffde00;
`;

const CityImage = styled.img`
  width: 100%;
  display: block;
`;

const HintBox = styled.div`
  background: rgba(59, 76, 202, 0.7);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #ffde00;
  max-width: 500px;
  width: 100%;
`;

const HintText = styled.p`
  margin: 0;
  font-style: italic;
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const HintButton = styled.button`
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const GameContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  background-color: #0a1428;
  color: white;
`;

// ... Altri stili già definiti in altri file ...

const SoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const SoundIconContainer = styled.div`
  width: 120px;
  height: 120px;
  background: #3b4cca;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const WaveAnimation = styled.div<{ $playing: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$playing ? 1 : 0)};
  transition: opacity 0.3s;
`;

const waveKeyframes = keyframes`
  0% { transform: scaleY(1); opacity: 0.8; }
  50% { transform: scaleY(0.5); opacity: 0.5; }
  100% { transform: scaleY(1); opacity: 0.8; }
`;

const Wave = styled.div<{ delay?: number }>`
  width: 4px;
  height: 30px;
  background: white;
  margin: 0 3px;
  border-radius: 2px;
  animation: ${waveKeyframes} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
`;

const SoundInstructions = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 1rem;
`;
const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1rem;
  text-align: center;
  z-index: 1;
`;
// Aggiungi questi styled components mancanti alla fine del file City.tsx

const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  z-index: 1;
`;

const PlayerBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffde00;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

const PlayerScore = styled.div`
  font-size: 0.9rem;
  color: white;
`;

const GuessForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

const GuessInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: 2px solid #ffde00;
  }
`;

const SubmitButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;

interface ResultBoxProps {
  $correct: boolean;
}

const ResultBox = styled.div<ResultBoxProps>`
  width: 100%;
  background: ${(props) =>
    props.$correct ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)'};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;

const ResultIcon = styled.div`
  font-size: 3rem;
  color: white;
`;

const ResultTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
`;

const ResultDetails = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ResultButton = styled.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const pokeBallSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #ee1515 0%,
    #ee1515 50%,
    white 50%,
    white 100%
  );
  opacity: 0.05;
  z-index: -1;
  animation: ${pokeBallSpin} 60s linear infinite;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
    background: white;
    border-radius: 50%;
    border: 30px solid #222;
  }

  &.ball1 {
    top: 10%;
    left: 10%;
  }

  &.ball2 {
    bottom: 10%;
    right: 10%;
  }
`;
