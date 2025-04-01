import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaLightbulb,
  FaVolumeUp,
  FaMapMarkedAlt,
  FaUserAlt,
} from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';
import canalipoli from './images/Canalipoli.jpg';
// Database di immagini di città Pokémon
const POKEMON_CITIES = [
  {
    id: 1,
    name: 'Canalipoli',
    image: canalipoli,
    score: 100,
    hints: [
      {
        type: 'text',
        content: 'Una città attraversata da numerosi canali',
        cost: 30,
      },
      { type: 'text', content: 'Si trova nella regione di Johto', cost: 50 },
      {
        type: 'text',
        content: 'È famosa per i suoi ponti e le gondole',
        cost: 70,
      },
      {
        type: 'text',
        content: 'Qui vivono i leggendari Latios e Latias',
        cost: 90,
      },
      { type: 'sound', content: '/audio/altomare-theme.mp3', cost: 100 },
      {
        type: 'text',
        content:
          'La città ospita un importante museo con un antico meccanismo di difesa',
        cost: 120,
      },
      {
        type: 'text',
        content: 'Ispirata alla città di Venezia nel mondo reale',
        cost: 150,
      },
    ],
  },
];

function City() {
  const navigate = useNavigate();
  const { players, updatePlayerScore } = useGlobalContext();
  const [activePlayer, setActivePlayer] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [usedHints, setUsedHints] = useState([]);
  const [guessInput, setGuessInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPlayerSelect, setShowPlayerSelect] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const audioRef = useRef(null);
  // Aggiungi questo useEffect mancante (dopo la dichiarazione dello stato)
  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
      return;
    }

    // Questo è il blocco che mancava: carica una città quando il giocatore viene selezionato
    if (activePlayer && !currentCity) {
      // Seleziona una città casuale
      const randomCity =
        POKEMON_CITIES[Math.floor(Math.random() * POKEMON_CITIES.length)];
      setCurrentCity(randomCity);
      setGameStarted(true);
    }

    // Pulisci eventuali audio quando il componente viene smontato
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, [players, navigate, activePlayer, currentCity]);
  const selectPlayer = (player) => {
    setActivePlayer(player);
    setShowPlayerSelect(false);
    // La città verrà selezionata nell'useEffect
  };

  const handleBuyHint = (hint) => {
    if (!activePlayer || usedHints.includes(hint.content)) return;

    // Verifica se il giocatore ha abbastanza punti
    if (activePlayer.score < hint.cost) {
      alert('Non hai abbastanza punti per questo indizio!');
      return;
    }

    // Riproduci l'audio se è un indizio sonoro
    if (hint.type === 'sound') {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(hint.content);
      audioRef.current.volume = 0.6;
      audioRef.current
        .play()
        .catch((e) => console.error("Errore nel riprodurre l'audio:", e));
    }

    // Aggiorna il punteggio del giocatore
    const newScore = activePlayer.score - hint.cost;
    updatePlayerScore(activePlayer.id, newScore);

    // Aggiorna lo stato locale del giocatore
    setActivePlayer({
      ...activePlayer,
      score: newScore,
    });

    // Segna l'indizio come usato
    setUsedHints([...usedHints, hint.content]);
  };

  const handleGuess = () => {
    if (!currentCity || !guessInput.trim()) return;

    const normalizedGuess = guessInput.trim().toLowerCase();
    const normalizedAnswer = currentCity.name.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct && activePlayer) {
      // Assegna 400 punti per una risposta corretta
      const newScore = activePlayer.score + currentCity.score;
      updatePlayerScore(activePlayer.id, newScore);
      setActivePlayer({
        ...activePlayer,
        score: newScore,
      });
    }

    // Ferma la riproduzione dell'audio quando si indovina
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleReturn = () => {
    // Ferma l'audio prima di navigare via
    if (audioRef.current) {
      audioRef.current.pause();
    }
    navigate('/game');
  };

  const playAgain = () => {
    setShowPlayerSelect(true);
    setActivePlayer(null);
    setCurrentCity(null);
    setUsedHints([]);
    setGuessInput('');
    setShowResult(false);
    setIsCorrect(false);
    setGameStarted(false);
  };

  const isHintUsed = (hintContent) => {
    return usedHints.includes(hintContent);
  };

  return (
    <GameContainer>
      <BackButton to='/game'>
        <FaArrowLeft /> Torna ai giochi
      </BackButton>

      <PageTitle>Indovina la Città Pokémon</PageTitle>
      <GameInstructions>
        Guarda l'immagine e indovina di quale città Pokémon si tratta
      </GameInstructions>

      {showPlayerSelect ? (
        <PlayerSection>
          <SectionTitle>Seleziona un Allenatore</SectionTitle>
          <PlayerList>
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                onClick={() => selectPlayer(player)}
              >
                <PlayerAvatar
                  src={player.avatar}
                  alt={player.name}
                />
                <PlayerInfo>
                  <PlayerName>{player.name}</PlayerName>
                  <PlayerScore>{player.score} punti</PlayerScore>
                </PlayerInfo>
              </PlayerCard>
            ))}
          </PlayerList>
        </PlayerSection>
      ) : gameStarted ? (
        <GameContent>
          <PlayerBanner>
            <PlayerInfo>
              <PlayerName>{activePlayer.name}</PlayerName>
              <PlayerScore>{activePlayer.score} punti</PlayerScore>
            </PlayerInfo>
          </PlayerBanner>

          {!showResult ? (
            <div
              className='flex flex-col items-center'
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
              }}
            >
              <div
                className='flex'
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: '1024px',

                  gap: '1rem',
                }}
              >
                <CityImageContainer>
                  <CityImage
                    src={currentCity?.image}
                    alt={currentCity?.name}
                  />
                </CityImageContainer>

                <HintSection>
                  <HintTitle>Indizi Disponibili:</HintTitle>
                  <HintsList>
                    {currentCity.hints.map((hint, index) => (
                      <HintItem
                        key={index}
                        $used={isHintUsed(hint.content)}
                      >
                        <HintIcon>
                          {hint.type === 'text' ? (
                            <FaLightbulb />
                          ) : (
                            <FaVolumeUp />
                          )}
                        </HintIcon>
                        <HintInfo>
                          {isHintUsed(hint.content) ? (
                            <HintContent>
                              {hint.type === 'text' ? (
                                hint.content
                              ) : (
                                <SoundPlayButton
                                  onClick={() => {
                                    if (audioRef.current) {
                                      audioRef.current.play();
                                    }
                                  }}
                                >
                                  Riproduci tema musicale <FaVolumeUp />
                                </SoundPlayButton>
                              )}
                            </HintContent>
                          ) : (
                            <HintMasked>
                              {hint.type === 'text'
                                ? 'Indizio testuale'
                                : 'Tema musicale della città'}
                            </HintMasked>
                          )}
                          <HintCost>
                            {isHintUsed(hint.content) ? (
                              'Già sbloccato'
                            ) : (
                              <BuyButton
                                onClick={() => handleBuyHint(hint)}
                                disabled={activePlayer.score < hint.cost}
                              >
                                Sblocca ({hint.cost} punti)
                              </BuyButton>
                            )}
                          </HintCost>
                        </HintInfo>
                      </HintItem>
                    ))}
                  </HintsList>
                </HintSection>
              </div>

              <GuessForm>
                <GuessInput
                  type='text'
                  value={guessInput}
                  onChange={(e) => setGuessInput(e.target.value)}
                  placeholder='Nome della città...'
                />
                <SubmitButton
                  onClick={handleGuess}
                  disabled={!guessInput.trim()}
                >
                  Indovina
                </SubmitButton>
              </GuessForm>
            </div>
          ) : (
            <ResultBox $correct={isCorrect}>
              <ResultIcon>{isCorrect ? <FaCheck /> : <FaTimes />}</ResultIcon>
              <ResultTitle>
                {isCorrect ? 'Corretto!' : 'Sbagliato!'}
              </ResultTitle>
              <ResultDetails>
                {isCorrect
                  ? `Era ${currentCity.name}! Hai guadagnato 400 punti!`
                  : `Era ${currentCity.name}. Nessun punto guadagnato.`}
              </ResultDetails>
              <ButtonGroup>
                <ResultButton onClick={playAgain}>Gioca ancora</ResultButton>
                <ResultButton onClick={handleReturn}>
                  Torna ai giochi
                </ResultButton>
              </ButtonGroup>
            </ResultBox>
          )}
        </GameContent>
      ) : (
        <LoadingText>Caricamento...</LoadingText>
      )}

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default City;

// Styled components
const GameContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  background-color: #0a1428;
  color: white;
`;

const LoadingText = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-top: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
`;

const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* max-width: 800px; */
  padding: 1rem;
  z-index: 1;
  gap: 1.5rem;
  flex: 1;
`;

const PlayerBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin-bottom: 1rem;
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

const CityImageContainer = styled.div`
  border-radius: 10px;
  aspect-ratio: 1;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid #ffde00;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const CityImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HintSection = styled.div`
  flex: 1;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1rem;
  border: 2px solid rgba(255, 222, 0, 0.5);
  overflow: auto;
  position: absolute;
  right: 5vw;
`;

const HintTitle = styled.h3`
  color: #ffde00;
  margin: 0 0 1rem 0;
  text-shadow: 1px 1px 0 #3b4cca;
`;

const HintsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HintItem = styled.div<{ $used: boolean }>`
  display: flex;
  background: ${(props) =>
    props.$used ? 'rgba(59, 76, 202, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  border-radius: 8px;
  padding: 0.8rem;
  border: 1px solid ${(props) => (props.$used ? '#3b4cca' : 'transparent')};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const HintIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 222, 0, 0.2);
  border-radius: 50%;
  margin-right: 1rem;
  color: #ffde00;
  font-size: 1.2rem;
`;

const HintInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HintContent = styled.div`
  color: white;
`;

// Aggiungi questi componenti styled mancanti

const HintMasked = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

const HintCost = styled.div`
  margin-top: 0.2rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`;

const BuyButton = styled.button`
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 4px 10px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const SoundPlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(59, 76, 202, 0.6);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 6px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 76, 202, 0.8);
    transform: translateY(-1px);
  }

  svg {
    margin-left: 5px;
  }
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
  width: 100%;
  padding: 12px 20px;
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
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
const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  z-index: 1;
  max-width: 600px;
`;

const PlayerSection = styled.section`
  width: 100%;
  max-width: 1024px;
  z-index: 1;
  margin: auto;
`;

const SectionTitle = styled.h2`
  color: #ffde00;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 2px 2px 0 #3b4cca;
`;

const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const PlayerCard = styled.div`
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid rgba(255, 222, 0, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(59, 76, 202, 0.4);
    border-color: #ffde00;
  }
`;

const PlayerAvatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #ffde00;
  background-color: white;
  object-fit: cover;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

// Modifica alcuni componenti esistenti
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
