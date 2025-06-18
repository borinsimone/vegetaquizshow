import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaPlay, FaPause, FaCheck, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';
import test from '../../../assets/audio/versi/pikachu.mp3'; // Importa un suono di esempio

// Esempi di suoni Pokémon (dovresti sostituire questi con percorsi ai file audio reali)
const POKEMON_SOUNDS = [
  {
    id: 1,
    name: 'Pikachu',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  },
  {
    id: 2,
    name: 'Charizard',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  },
  {
    id: 3,
    name: 'Bulbasaur',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  },
  {
    id: 4,
    name: 'Jigglypuff',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
  },
  {
    id: 5,
    name: 'Meowth',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
  },
  {
    id: 6,
    name: 'Snorlax',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
  },
  {
    id: 7,
    name: 'Eevee',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
  },
  {
    id: 8,
    name: 'Gyarados',
    audio: test,
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
  },
];

function Sound() {
  const navigate = useNavigate();
  const location = useLocation();
  const { updatePlayerScore } = useGlobalContext();

  const [player, setPlayer] = useState(null);
  const [selectedSound, setSelectedSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guessInput, setGuessInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [revealedPokemon, setRevealedPokemon] = useState(false);

  const audioRef = useRef(null);

  // Prendi i dati dal location state passati dalla ruota della fortuna
  useEffect(() => {
    if (location.state?.player) {
      setPlayer(location.state.player);
    } else {
      navigate('/game/wheel');
    }
  }, [location, navigate]);

  // Seleziona un suono casuale all'avvio
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * POKEMON_SOUNDS.length);
    setSelectedSound(POKEMON_SOUNDS[randomIndex]);
  }, []);

  // Controlla la riproduzione dell'audio
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, selectedSound]);

  // Funzione per riprodurre/mettere in pausa il suono
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Funzione per verificare la risposta
  const handleGuess = () => {
    if (!selectedSound || !guessInput.trim()) return;

    const normalizedGuess = guessInput.trim().toLowerCase();
    const normalizedAnswer = selectedSound.name.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setIsPlaying(false);

    if (correct && player) {
      // Aggiorna il punteggio del giocatore
      const newScore = player.score + 500;
      updatePlayerScore(player.id, newScore);

      // Aggiorna il player locale
      setPlayer({
        ...player,
        score: newScore,
      });
    }
  };

  // Rivela il Pokémon
  const revealPokemon = () => {
    setRevealedPokemon(true);
  };

  // Torna alla ruota della fortuna
  const returnToWheel = () => {
    navigate('/game/wheel');
  };

  return (
    <GameContainer>
      <BackButton onClick={returnToWheel}>
        <FaArrowLeft /> Torna alla ruota
      </BackButton>

      <PageTitle>Chi è questo Pokémon?</PageTitle>
      <GameInstructions>
        {player
          ? `${player.name}, ascolta e indovina il verso di quale Pokémon stai sentendo!`
          : 'Ascolta e indovina!'}
      </GameInstructions>

      <GameContent>
        <SoundSection>
          {selectedSound && (
            <>
              <audio
                ref={audioRef}
                src={selectedSound.audio}
                onEnded={() => setIsPlaying(false)}
              />

              <AudioPlayer>
                <AudioButton
                  onClick={togglePlayPause}
                  disabled={showResult}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                  {isPlaying ? ' Pausa' : ' Ascolta'}
                </AudioButton>

                <SoundWaveAnimation $playing={isPlaying && !showResult}>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                </SoundWaveAnimation>
              </AudioPlayer>

              {revealedPokemon ? (
                <PokemonReveal>
                  <PokemonImage
                    src={selectedSound.image}
                    alt={selectedSound.name}
                  />
                  <PokemonName>{selectedSound.name}</PokemonName>
                </PokemonReveal>
              ) : !showResult ? (
                <GuessingArea>
                  <GuessInput
                    type='text'
                    value={guessInput}
                    onChange={(e) => setGuessInput(e.target.value)}
                    placeholder='Nome del Pokémon...'
                    disabled={showResult}
                  />
                  <GuessButton
                    onClick={handleGuess}
                    disabled={!guessInput.trim() || showResult}
                  >
                    Indovina
                  </GuessButton>
                </GuessingArea>
              ) : null}

              {showResult && (
                <ResultBox $correct={isCorrect}>
                  <ResultIcon>
                    {isCorrect ? <FaCheck /> : <FaTimes />}
                  </ResultIcon>
                  <ResultText>
                    {isCorrect
                      ? `Corretto! Hai guadagnato 500 punti!`
                      : `Sbagliato! Era ${selectedSound.name}.`}
                  </ResultText>

                  {!revealedPokemon && !isCorrect && (
                    <ActionButton
                      $secondary
                      onClick={revealPokemon}
                    >
                      Mostra Pokémon
                    </ActionButton>
                  )}

                  <ActionButton onClick={returnToWheel}>
                    Torna alla Ruota
                  </ActionButton>
                </ResultBox>
              )}
            </>
          )}
        </SoundSection>
      </GameContent>

      <BackgroundElements>
        {/* Elementi di sfondo simili agli altri giochi */}
        <PokeBallBg className='ball1' />
        <NoteBg className='note1' />
        <NoteBg className='note2' />
        <NoteBg className='note3' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default Sound;

// Animazione dell'onda sonora
const soundWave = keyframes`
  0% { height: 5px; }
  50% { height: 30px; }
  100% { height: 5px; }
`;

// Animazione di fade-in
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Stili dei componenti
const GameContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: #0a1428;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(19, 42, 87, 0.8);
  color: #ffde00;
  padding: 8px 15px;
  border-radius: 20px;
  border: 2px solid #ffde00;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    top: 10px;
    left: 10px;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin: 2rem 0 1rem;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-shadow: 2px 2px 0 #3b4cca;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-top: 4rem;
  }
`;

const GameInstructions = styled.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

const GameContent = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const SoundSection = styled.div`
  width: 100%;
  background: rgba(19, 42, 87, 0.8);
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const AudioPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
    margin: 0.5rem 0 1.5rem;
  }
`;

const AudioButton = styled.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`;

const SoundWaveAnimation = styled.div<{ $playing: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;

  .bar {
    width: 7px;
    height: 5px;
    background: #ffde00;
    border-radius: 3px;
    animation: ${soundWave} ${(props) => (props.$playing ? '0.5s' : '0s')}
      ease-in-out infinite;
    animation-play-state: ${(props) => (props.$playing ? 'running' : 'paused')};
    transform-origin: bottom center;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
    &:nth-child(6) {
      animation-delay: 0.4s;
    }
    &:nth-child(7) {
      animation-delay: 0.3s;
    }
  }
`;

const GuessingArea = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const GuessInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid rgba(59, 76, 202, 0.5);
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #3b4cca;
  }

  &:disabled {
    background: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
`;

const GuessButton = styled.button`
  padding: 12px 25px;
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ResultBox = styled.div<{ $correct: boolean }>`
  width: 100%;
  background: ${(props) =>
    props.$correct
      ? 'linear-gradient(135deg, rgba(120, 200, 80, 0.9), rgba(60, 130, 40, 0.9))'
      : 'linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(150, 30, 30, 0.9))'};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${fadeIn} 0.5s ease;
  border: 3px solid ${(props) => (props.$correct ? '#78C850' : '#ee1515')};
`;

const ResultIcon = styled.div`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`;

const ResultText = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ActionButton = styled.button<{ $secondary?: boolean }>`
  background: ${(props) => (props.$secondary ? '#3b4cca' : '#ffde00')};
  color: ${(props) => (props.$secondary ? 'white' : '#3b4cca')};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const PokemonReveal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  animation: ${fadeIn} 0.7s ease;
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
`;

const PokemonName = styled.div`
  font-size: 1.5rem;
  color: #ffde00;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`;

// Elementi di sfondo
const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a1428;
    z-index: -1;
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: radial-gradient(
    circle at 50% 50%,
    #ffffff 0%,
    #ffffff 35%,
    #000000 35%,
    #000000 37%,
    #ee1515 37%,
    #ee1515 50%,
    #ffffff 50%
  );
  border-radius: 50%;
  opacity: 0.1;

  &.ball1 {
    top: 10%;
    left: 5%;
    animation: ${spin} 20s linear infinite;
  }
`;

const NoteBg = styled.div`
  position: absolute;
`;
