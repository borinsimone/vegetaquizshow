import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPlay,
  FaPause,
  FaCheck,
  FaTimes,
  FaLightbulb,
} from 'react-icons/fa';

// Lista di Pokémon per il gioco
const POKEMON_LIST = [
  {
    id: 1,
    name: 'Pikachu',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  },
  {
    id: 2,
    name: 'Charizard',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  },
  {
    id: 3,
    name: 'Bulbasaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  },
  {
    id: 4,
    name: 'Squirtle',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  },
  {
    id: 5,
    name: 'Jigglypuff',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
  },
  {
    id: 6,
    name: 'Mewtwo',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
  },
  {
    id: 7,
    name: 'Eevee',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
  },
  {
    id: 8,
    name: 'Snorlax',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
  },
  {
    id: 9,
    name: 'Gengar',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
  },
  {
    id: 10,
    name: 'Gyarados',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
  },
  {
    id: 11,
    name: 'Dragonite',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
  },
  {
    id: 12,
    name: 'Mew',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
  },
];

// Numero di pezzi del puzzle
const TOTAL_PIECES = 20;
// Punteggio iniziale
const INITIAL_SCORE = 500;
// Tempo tra la scomparsa di ogni pezzo (in millisecondi)
const PIECE_INTERVAL = 5000;

function ImageGame() {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState(null);
  const [gameCards, setGameCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [gameState, setGameState] = useState('inactive'); // inactive, active, paused, completed
  const [revealedPieces, setRevealedPieces] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentScore, setCurrentScore] = useState(INITIAL_SCORE);
  const [guessInput, setGuessInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Carica i giocatori dal localStorage
  useEffect(() => {
    const savedPlayers = localStorage.getItem('quizPlayers');
    if (savedPlayers) {
      const parsedPlayers = JSON.parse(savedPlayers);
      setPlayers(parsedPlayers);
      if (parsedPlayers.length > 0) {
        setActivePlayer(parsedPlayers[0]);
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  // Inizializza le carte del gioco
  useEffect(() => {
    // Mischia gli elementi e prendi i primi 12
    const shuffled = [...POKEMON_LIST].sort(() => 0.5 - Math.random());
    setGameCards(shuffled);
  }, []);

  // Gestisce la rivelazione dei pezzi
  useEffect(() => {
    if (gameState === 'active' && !isPaused && revealedPieces < TOTAL_PIECES) {
      timerRef.current = setTimeout(() => {
        setRevealedPieces((prev) => prev + 1);
        setCurrentScore((prev) =>
          Math.max(prev - INITIAL_SCORE / TOTAL_PIECES, 0)
        );
      }, PIECE_INTERVAL);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [gameState, isPaused, revealedPieces]);

  const handleCardSelect = (card) => {
    if (gameState !== 'inactive') return;

    setSelectedCard(card);
    setGameState('active');
    setRevealedPieces(0);
    setCurrentScore(INITIAL_SCORE);
    setIsPaused(false);
    setGuessInput('');
    setShowResult(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleGuess = () => {
    const normalizedGuess = guessInput.trim().toLowerCase();
    const normalizedAnswer = selectedCard.name.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setGameState('completed');

    if (correct && activePlayer) {
      // Aggiorna il punteggio del giocatore
      const updatedPlayers = players.map((player) =>
        player.id === activePlayer.id
          ? { ...player, score: player.score + Math.round(currentScore) }
          : player
      );

      setPlayers(updatedPlayers);
      localStorage.setItem('quizPlayers', JSON.stringify(updatedPlayers));

      // Aggiorna anche l'activePlayer
      setActivePlayer({
        ...activePlayer,
        score: activePlayer.score + Math.round(currentScore),
      });
    }
  };

  const resetGame = () => {
    setSelectedCard(null);
    setGameState('inactive');
    setRevealedPieces(0);
    setCurrentScore(INITIAL_SCORE);
    setIsPaused(false);
    setGuessInput('');
    setShowResult(false);

    // Mischia nuovamente le carte
    const shuffled = [...POKEMON_LIST].sort(() => 0.5 - Math.random());
    setGameCards(shuffled);
  };

  // Calcola la percentuale del puzzle rivelata
  const revealedPercentage = (revealedPieces / TOTAL_PIECES) * 100;

  return (
    <GameContainer>
      <BackButton to='/game'>
        <FaArrowLeft /> Torna ai giochi
      </BackButton>

      <PageTitle>Chi è quel Pokémon?</PageTitle>

      {gameState === 'inactive' ? (
        <CardGrid>
          {gameCards.map((card) => (
            <PokemonCard
              key={card.id}
              onClick={() => handleCardSelect(card)}
            >
              <CardInner>
                <CardFront>
                  <PokeBallIcon />
                  <CardNumber>{card.id}</CardNumber>
                </CardFront>
              </CardInner>
            </PokemonCard>
          ))}
        </CardGrid>
      ) : (
        <GameplayArea>
          <GameHeader>
            <ScoreDisplay>
              <ScoreLabel>Punteggio:</ScoreLabel>
              <ScoreValue>{Math.round(currentScore)}</ScoreValue>
            </ScoreDisplay>
            <GameControls>
              {gameState === 'active' && (
                <ControlButton onClick={togglePause}>
                  {isPaused ? (
                    <>
                      <FaPlay /> Riprendi
                    </>
                  ) : (
                    <>
                      <FaPause /> Pausa
                    </>
                  )}
                </ControlButton>
              )}
            </GameControls>
          </GameHeader>

          <PuzzleContainer>
            <PuzzleImage
              src={selectedCard?.image}
              alt='Pokémon da indovinare'
            />
            <PuzzleOverlay $revealedPieces={revealedPieces} />
          </PuzzleContainer>

          <ProgressBar>
            <ProgressFill $percentage={revealedPercentage} />
            <ProgressText>
              Rivelato: {Math.round(revealedPercentage)}%
            </ProgressText>
          </ProgressBar>

          {!showResult && (
            <GuessForm>
              <GuessInput
                type='text'
                value={guessInput}
                onChange={(e) => setGuessInput(e.target.value)}
                placeholder='Nome del Pokémon...'
                disabled={gameState === 'completed'}
              />
              <GuessButton
                onClick={handleGuess}
                disabled={!guessInput.trim() || gameState === 'completed'}
              >
                Indovina
              </GuessButton>
            </GuessForm>
          )}

          {showResult && (
            <ResultBox $correct={isCorrect}>
              <ResultIcon>{isCorrect ? <FaCheck /> : <FaTimes />}</ResultIcon>
              <ResultTitle>
                {isCorrect ? 'Corretto!' : 'Sbagliato!'}
              </ResultTitle>
              <ResultDetails>
                {isCorrect
                  ? `Hai guadagnato ${Math.round(currentScore)} punti!`
                  : `Era ${selectedCard.name}. Nessun punto guadagnato.`}
              </ResultDetails>
              <ResultButton onClick={resetGame}>Nuova Sfida</ResultButton>
            </ResultBox>
          )}
        </GameplayArea>
      )}

      <PlayerInfo>
        <PlayerAvatar
          src={activePlayer?.avatar}
          alt={activePlayer?.name}
        />
        <PlayerName>{activePlayer?.name}</PlayerName>
        <PlayerScore>{activePlayer?.score || 0} punti</PlayerScore>
      </PlayerInfo>

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
        <GreatBallBg className='ball3' />
        <UltraBallBg className='ball4' />
        <MasterBallBg className='ball5' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default ImageGame;

// Animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shine = keyframes`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`;

// Styled Components
const GameContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #233975;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  opacity: 0.15;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333, 0 0 0 10px white;
  }

  &.ball1 {
    top: -40px;
    right: 10%;
    animation: ${float} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`;

const GreatBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #3b4cca 50%,
    #3b4cca 100%
  );

  &.ball3 {
    top: 20%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${float} 15s ease-in-out infinite;
  }
`;

const UltraBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ffde00 50%,
    #ffde00 100%
  );

  &.ball4 {
    bottom: 5%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${float} 18s ease-in-out infinite reverse;
  }
`;

const MasterBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #9966ff 50%,
    #9966ff 100%
  );

  &.ball5 {
    top: 40%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${float} 14s ease-in-out infinite;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 30px;
  font-weight: 500;
  z-index: 10;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;

  text-align: center;
  z-index: 1;
  color: #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
    margin: 2rem 0;
    -webkit-text-stroke: 1px #3b4cca;
  }
`;

const CardGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 90%;
  height: 60vh;
  height: 60dvh;
  z-index: 1;
  margin: auto 0;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PokemonCard = styled.div`
  height: 300px;
  aspect-ratio: 1/1.4;
  border-radius: 15px;
  perspective: 1000px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 350%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transform: skewX(-20deg);
      animation: ${shine} 1s;
    }
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ee1515, #3b4cca);
  border: 3px solid #ffde00;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  }
`;

const PokeBallIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 3px #333, 0 0 0 6px white;
  }
`;

const CardNumber = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`;

const GameplayArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  z-index: 1;
  animation: ${fadeIn} 0.5s ease;
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const ScoreDisplay = styled.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`;

const ScoreLabel = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 10px;
`;

const ScoreValue = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
`;

const GameControls = styled.div`
  display: flex;
  gap: 1rem;
`;

const ControlButton = styled.button`
  background: linear-gradient(135deg, #3b4cca, #233975);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }
`;

const PuzzleContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;

const PuzzleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #233975;
`;

interface PuzzleOverlayProps {
  $revealedPieces: number;
}

const PuzzleOverlay = styled.div<PuzzleOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 0%, #000 70%);
    z-index: 2;
    opacity: 0.4;
  }

  // Create 20 puzzle pieces using grid areas
  ${({ $revealedPieces }) => {
    let styles = '';
    const pieces = [];

    // Create the grid of pieces
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 5; col++) {
        const index = row * 5 + col;
        const isRevealed = index < $revealedPieces;

        pieces.push(`
          &::after:nth-child(${index + 1}) {
            content: '';
            grid-area: ${row + 1} / ${col + 1};
            background: #000;
            opacity: ${isRevealed ? 0 : 1};
            transition: opacity 0.5s ease;
          }
        `);

        // Add the piece to the grid
        styles += `
          &::before:nth-of-type(${index + 1}) {
            content: '';
            grid-column: ${col + 1};
            grid-row: ${row + 1};
            background: #000;
            opacity: ${isRevealed ? 0 : 1};
            transition: opacity 0.5s ease;
            z-index: 1;
          }
        `;
      }
    }

    // Remove the specified number of puzzle pieces
    for (let i = 0; i < $revealedPieces; i++) {
      styles += `
        & > div:nth-child(${i + 1}) {
          opacity: 0;
        }
      `;
    }

    return css`
      ${Array.from({ length: 20 })
        .map(
          (_, i) => `
        &::before:nth-of-type(${i + 1}) {
          content: '';
          position: absolute;
          top: ${Math.floor(i / 5) * 25}%;
          left: ${(i % 5) * 20}%;
          width: 20%;
          height: 25%;
          background: #000;
          opacity: ${i < $revealedPieces ? 0 : 1};
          transition: opacity 0.5s ease;
          z-index: 1;
        }
      `
        )
        .join('')}
    `;
  }}
`;

interface ProgressBarProps {
  $percentage: number;
}

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const ProgressFill = styled.div<ProgressBarProps>`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background: linear-gradient(90deg, #ee1515, #ff9c54);
  border-radius: 8px;
  transition: width 0.5s ease;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const GuessForm = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const GuessInput = styled.input`
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffde00;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const GuessButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  background: #ee1515;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`;

interface ResultBoxProps {
  $correct: boolean;
}

const ResultBox = styled.div<ResultBoxProps>`
  width: 100%;
  background: ${(props) =>
    props.$correct ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
  border: 3px solid ${(props) => (props.$correct ? '#4CAF50' : '#F44336')};
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
`;

const ResultIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffde00;
`;

const ResultTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffde00;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`;

const ResultDetails = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ResultButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #ee1515, #3b4cca);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }
`;

const PlayerInfo = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 2rem;
  }
`;

const PlayerAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
`;

const PlayerName = styled.div`
  font-weight: 600;
  margin-right: 1rem;
`;

const PlayerScore = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffde00;
`;
