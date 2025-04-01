import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPlay,
  FaPause,
  FaCheck,
  FaTimes,
  FaUserAlt,
} from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';

// Numero di pezzi del puzzle
const TOTAL_PIECES = 36;
// Punteggio iniziale
const INITIAL_SCORE = 500;
// Tempo tra la scomparsa di ogni pezzo (in millisecondi)
const PIECE_INTERVAL = 5000;

function GuessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { players, updatePlayerScore, markCardAsGuessed } = useGlobalContext();
  const [activePlayer, setActivePlayer] = useState(null);

  // Ottieni la carta selezionata dallo stato della location
  const selectedCard = location.state?.selectedCard;
  const totalCards = location.state?.totalCards || 12;

  const [gameState, setGameState] = useState('active'); // active, paused, completed

  const [isPaused, setIsPaused] = useState(false);
  const [currentScore, setCurrentScore] = useState(INITIAL_SCORE);
  const [guessInput, setGuessInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const timerRef = useRef(null);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const [revealSequence, setRevealSequence] = useState<number[]>([]);
  const revealedPercentage = (revealedIndices.length / TOTAL_PIECES) * 100;

  // Aggiungi questa funzione per generare un array casuale di indici
  const shuffleArray = (array: number[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Aggiungi questo useEffect per inizializzare la sequenza casuale
  useEffect(() => {
    // Crea un array di indici (0-19 per 20 pezzi) e lo mischia
    const indices = Array.from({ length: TOTAL_PIECES }, (_, i) => i);
    const shuffled = shuffleArray(indices);
    setRevealSequence(shuffled);
  }, []);

  // Modifica l'useEffect che gestisce la rivelazione dei pezzi
  useEffect(() => {
    if (
      gameState === 'active' &&
      !isPaused &&
      revealedIndices.length < TOTAL_PIECES &&
      revealSequence.length > 0
    ) {
      timerRef.current = setTimeout(() => {
        // Rivela il prossimo pezzo nella sequenza casuale
        const nextIndexToReveal = revealSequence[revealedIndices.length];
        setRevealedIndices((prev) => [...prev, nextIndexToReveal]);

        // Aggiorna il punteggio
        setCurrentScore((prev) =>
          Math.max(prev - INITIAL_SCORE / TOTAL_PIECES, 0)
        );
      }, PIECE_INTERVAL);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [gameState, isPaused, revealedIndices.length, revealSequence]);

  // Reindirizza se non c'è una carta selezionata
  useEffect(() => {
    if (!selectedCard) {
      navigate('/game/image');
      return;
    }
  }, [selectedCard, navigate]);

  // Controlla se ci sono giocatori
  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
      return;
    }
  }, [players, navigate]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleGuess = () => {
    if (!activePlayer) {
      alert('Seleziona prima un giocatore!');
      return;
    }

    const normalizedGuess = guessInput.trim().toLowerCase();
    const normalizedAnswer = selectedCard.name.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setGameState('completed');

    if (correct) {
      // Calcola il nuovo punteggio
      const newScore = activePlayer.score + Math.round(currentScore);

      // Usa updatePlayerScore dal context
      updatePlayerScore(activePlayer.id, newScore);

      // Aggiorna anche il giocatore attivo localmente
      setActivePlayer({
        ...activePlayer,
        score: newScore,
      });

      // Segna questa carta come indovinata
      markCardAsGuessed(selectedCard.id);

      // AGGIUNGI QUESTO: Rivela completamente l'immagine mostrando tutti i pezzi
      // Crea un array con tutti gli indici del puzzle per rivelare completamente l'immagine
      const allPieces = Array.from({ length: TOTAL_PIECES }, (_, i) => i);
      setRevealedIndices(allPieces);
    }
  };

  const handleNewChallenge = () => {
    navigate('/game/image');
  };

  // Calcola la percentuale del puzzle rivelata

  if (!selectedCard) return null;

  return (
    <GameContainer>
      <BackButton to='/game/image'>
        <FaArrowLeft /> Torna alla selezione
      </BackButton>

      <PageTitle>Chi è quel Pokémon?</PageTitle>
      <GameInstructions>
        Seleziona un giocatore dalla lista prima di indovinare
      </GameInstructions>

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

        {/* Nuovo layout orizzontale */}
        <GameLayoutContainer>
          {/* Barra di progressione verticale a sinistra */}
          <VerticalProgressContainer>
            <VerticalProgressBar>
              <VerticalProgressFill $percentage={revealedPercentage} />
              <VerticalProgressText>
                {Math.round(revealedPercentage)}%
              </VerticalProgressText>
            </VerticalProgressBar>
          </VerticalProgressContainer>

          {/* Immagine del puzzle al centro */}
          <PuzzleContainer>
            <PuzzleImage
              src={selectedCard?.image}
              alt='Pokémon da indovinare'
            />
            <PuzzleOverlay>
              {Array.from({ length: TOTAL_PIECES }).map((_, i) => (
                <PuzzlePiece
                  key={i}
                  $visible={!revealedIndices.includes(i)}
                />
              ))}
            </PuzzleOverlay>
          </PuzzleContainer>

          {/* Form per indovinare sulla destra */}
          <SideGuessContainer>
            {!showResult ? (
              <SideGuessForm>
                <h3>Chi è questo Pokémon?</h3>
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
              </SideGuessForm>
            ) : (
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
                <ResultButton onClick={handleNewChallenge}>
                  Nuova Sfida
                </ResultButton>
              </ResultBox>
            )}
          </SideGuessContainer>
        </GameLayoutContainer>
      </GameplayArea>

      {/* Lista giocatori */}
      <PlayerSection>
        <SectionHeader>
          <SectionTitle>Allenatori</SectionTitle>
          <InstructionText>
            {activePlayer
              ? 'Ora indovina il Pokémon'
              : 'Scegli un allenatore per iniziare'}
          </InstructionText>
        </SectionHeader>

        <PlayerList>
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              $active={activePlayer?.id === player.id}
              onClick={() => setActivePlayer(player)}
            >
              <PlayerAvatar
                src={player.avatar}
                alt={player.name}
              />
              <PlayerInfo>
                <PlayerName>{player.name}</PlayerName>
                <PlayerScoreDisplay>
                  <BadgeIcon /> {player.score} punti
                </PlayerScoreDisplay>
              </PlayerInfo>
              {activePlayer?.id === player.id && (
                <ActiveIndicator>
                  <FaUserAlt />
                </ActiveIndicator>
              )}
            </PlayerCard>
          ))}
        </PlayerList>
      </PlayerSection>

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

export default GuessPage;

// Animazioni keyframes
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 222, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0); }
`;

const shine = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Stili dei componenti
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
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

  text-align: center;
  z-index: 1;
`;

const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  z-index: 1;
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ScoreDisplay = styled.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`;

const ScoreLabel = styled.span`
  font-size: 0.9rem;
  margin-right: 8px;
  color: white;
`;

const ScoreValue = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffde00;
`;

const GameControls = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlButton = styled.button`
  background: rgba(19, 42, 87, 0.8);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  border: 2px solid #ffde00;

  &:hover {
    background: #3b4cca;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const PuzzleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: white;
`;

const PuzzleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

interface PuzzlePieceProps {
  $visible: boolean;
}

const PuzzlePiece = styled.div<PuzzlePieceProps>`
  background: black;
  border: 0.3px solid rgba(255, 255, 255, 0.1); // Bordo più sottile
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  transition: opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  /* transform: scale(${(props) => (props.$visible ? 1 : 0.8)}); */

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    opacity: ${(props) => (props.$visible ? 0 : 1)};
    transition: opacity 0.5s ease;
  }
`;

interface ProgressBarProps {
  $percentage: number;
}

const GuessInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  outline: none;
  border: 2px solid rgba(59, 76, 202, 0.5);

  &:focus {
    border-color: #3b4cca;
  }
`;

const GuessButton = styled.button`
  padding: 12px 25px;
  background: #ee1515;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

interface ResultBoxProps {
  $correct: boolean;
}

const ResultIcon = styled.div`
  font-size: 3rem;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const ResultDetails = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const ResultButton = styled.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: white;
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }
`;

const PlayerSection = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  z-index: 1;

  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`;

const InstructionText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`;

const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface ActiveProps {
  $active?: boolean;
}

const PlayerCard = styled.div<ActiveProps>`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$active
      ? 'linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(59, 76, 202, 0.2))'
      : 'rgba(255, 255, 255, 0.08)'};
  border-radius: 12px;
  padding: 0.8rem 1rem;
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid ${(props) => (props.$active ? '#FFDE00' : 'transparent')};
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      animation: ${pulse} 2s infinite ease-in-out;
      box-shadow: 0 0 15px rgba(255, 222, 0, 0.4);
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.2;
    z-index: 0;
    border-radius: 10px;
  }
`;

const PlayerAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
`;

const PlayerInfo = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const PlayerName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`;

const PlayerScoreDisplay = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ActiveIndicator = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ee1515;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: ${shine} 2s infinite;
`;

const BadgeIcon = styled.div`
  width: 18px;
  height: 18px;
  background: #ffde00;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle;
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
  /* Dark background with Pokemon pattern */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a1428;
    background-image: radial-gradient(
        circle at 30% 20%,
        rgba(59, 76, 202, 0.08) 0%,
        rgba(59, 76, 202, 0) 50%
      ),
      radial-gradient(
        circle at 70% 60%,
        rgba(238, 21, 21, 0.08) 0%,
        rgba(238, 21, 21, 0) 50%
      ),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z' fill='%233b4cca' fill-opacity='0.05'/%3E%3Cpath d='M30 60a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z' fill='%23ee1515' fill-opacity='0.05'/%3E%3C/svg%3E");
    z-index: -1;
  }

  /* Additional subtle Pokemon elements */
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm0-7a8 8 0 1 1 0-16 8 8 0 0 1 0 16z' fill='%23ffde00' fill-opacity='0.03'/%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: -1;
  }
`;

const BallBase = styled.div`
  position: absolute;
  opacity: 0.15;
  filter: blur(2px);
  z-index: 0;

  &.ball1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
    animation: ${float} 15s ease-in-out infinite;
  }

  &.ball2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: 10%;
    animation: ${float} 20s ease-in-out infinite reverse;
  }

  &.ball3 {
    width: 250px;
    height: 250px;
    top: 30%;
    left: -100px;
    animation: ${float} 17s ease-in-out infinite 5s;
  }

  &.ball4 {
    width: 280px;
    height: 280px;
    bottom: 10%;
    right: 5%;
    animation: ${float} 22s ease-in-out infinite 3s;
  }

  &.ball5 {
    width: 150px;
    height: 150px;
    top: 20%;
    right: 15%;
    animation: ${float} 18s ease-in-out infinite 8s;
  }
`;

const PokeBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(238, 21, 21, 0.7) 45.5%,
    rgba(238, 21, 21, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(238, 21, 21, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

const GreatBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(59, 76, 202, 0.7) 45.5%,
    rgba(59, 76, 202, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(59, 76, 202, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

const UltraBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(255, 222, 0, 0.7) 45.5%,
    rgba(255, 222, 0, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255, 222, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

const MasterBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(147, 58, 180, 0.7) 45.5%,
    rgba(147, 58, 180, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(147, 58, 180, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;
// Nuovo container per il layout orizzontale
const GameLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Container per la barra di progressione verticale
const VerticalProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  position: absolute;
  left: 5vw;
  @media (max-width: 900px) {
    width: 100%;
    height: 40px;
    margin-bottom: 1rem;
  }
`;

// Barra di progressione verticale
const VerticalProgressBar = styled.div`
  width: 40px;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 900px) {
    width: 100%;
    height: 20px;
  }
`;

interface ProgressBarProps {
  $percentage: number;
}

// Riempimento della barra verticale
const VerticalProgressFill = styled.div<ProgressBarProps>`
  width: 100%;
  background: linear-gradient(0deg, #3b4cca, #ee1515);
  height: ${(props) => props.$percentage}%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 0.5s ease;

  @media (max-width: 900px) {
    width: ${(props) => props.$percentage}%;
    height: 100%;
    bottom: auto;
    background: linear-gradient(90deg, #3b4cca, #ee1515);
  }
`;

// Testo della percentuale nella barra verticale
const VerticalProgressText = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.85rem;
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;
  writing-mode: vertical-lr;
  transform: rotate(270deg);
  @media (max-width: 900px) {
    writing-mode: horizontal-tb;
    transform: none;
    top: 50%;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Container per il form sulla destra
const SideGuessContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 250px; */
  width: 400px;
  position: absolute;
  right: 5vw;
  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    margin-top: 1rem;
  }
`;

// Form di indovinello verticale
const SideGuessForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(19, 42, 87, 0.7);
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 222, 0, 0.5);

  h3 {
    color: #ffde00;
    margin: 0 0 0.5rem 0;
    text-align: center;
    text-shadow: 1px 1px 0 #3b4cca;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

// Sovrascrivi lo stile di PuzzleContainer
const PuzzleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1.4;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

// Modifica gli stili responsivi
const GameplayArea = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

// Sovrascrivi ResultBox per adattarlo al nuovo layout
const ResultBox = styled.div<ResultBoxProps>`
  width: 100%;
  padding: 1.5rem;
  background: ${(props) =>
    props.$correct
      ? 'linear-gradient(135deg, rgba(120, 200, 80, 0.9), rgba(60, 130, 40, 0.9))'
      : 'linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(150, 30, 30, 0.9))'};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid ${(props) => (props.$correct ? '#78C850' : '#ee1515')};
  animation: ${fadeIn} 0.5s ease;
`;
