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
  height: 100vh;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  gap: 0.5rem;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(19, 42, 87, 0.9);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 0.9rem;

  &:hover {
    background: #3b4cca;
    transform: translateX(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  text-align: center;
  z-index: 1;
  margin: 0;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
`;

const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  margin: 0;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ScoreDisplay = styled.div`
  background: rgba(19, 42, 87, 0.9);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`;

const ScoreLabel = styled.span`
  font-size: 0.8rem;
  margin-right: 6px;
  color: white;
`;

const ScoreValue = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffde00;
`;

const GameControls = styled.div`
  display: flex;
  gap: 8px;
`;

const ControlButton = styled.button`
  background: rgba(19, 42, 87, 0.9);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  border: 2px solid #ffde00;
  font-size: 0.8rem;

  &:hover {
    background: #3b4cca;
  }

  &:active {
    transform: translateY(1px);
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
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  outline: none;
  border: 2px solid rgba(59, 76, 202, 0.5);

  &:focus {
    border-color: #3b4cca;
    box-shadow: 0 0 0 3px rgba(59, 76, 202, 0.2);
  }
`;

const GuessButton = styled.button`
  padding: 0.8rem 1.2rem;
  background: #ee1515;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`;

interface ResultBoxProps {
  $correct: boolean;
}

const ResultIcon = styled.div`
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
`;

const ResultDetails = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
`;

const ResultButton = styled.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

// Nuovo container per il layout orizzontale
const GameLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

// Container per la barra di progressione verticale
const VerticalProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;

  @media (max-width: 900px) {
    width: 100%;
    height: 30px;
    order: 1;
  }
`;

// Barra di progressione verticale
const VerticalProgressBar = styled.div`
  width: 35px;
  height: 250px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 900px) {
    width: 100%;
    height: 18px;
  }
`;

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
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.7rem;
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
    font-size: 0.8rem;
  }
`;

// Sovrascrivi lo stile di PuzzleContainer
const PuzzleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1.4;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 900px) {
    max-width: 280px;
    order: 2;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

// Container per il form sulla destra
const SideGuessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  max-height: 350px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    order: 3;
    max-height: none;
  }
`;

// Form di indovinello verticale
const SideGuessForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: rgba(19, 42, 87, 0.8);
  padding: 1.2rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 222, 0, 0.6);
  backdrop-filter: blur(10px);

  h3 {
    color: #ffde00;
    margin: 0 0 0.3rem 0;
    text-align: center;
    text-shadow: 1px 1px 0 #3b4cca;
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    padding: 1rem;
  }
`;

const GameplayArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  min-height: 0;
`;

const ResultBox = styled.div<ResultBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: ${(props) =>
    props.$correct ? 'rgba(34, 197, 94, 0.9)' : 'rgba(239, 68, 68, 0.9)'};
  padding: 1.5rem;
  border-radius: 15px;
  color: white;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;

const PlayerSection = styled.div`
  background: rgba(19, 42, 87, 0.8);
  border-radius: 15px;
  padding: 1rem;
  border: 2px solid rgba(255, 222, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.3rem;
    align-items: flex-start;
  }
`;

const SectionTitle = styled.h3`
  color: #ffde00;
  margin: 0;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0 #3b4cca;
`;

const InstructionText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  font-style: italic;
`;

const PlayerList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

interface PlayerCardProps {
  $active: boolean;
}

const PlayerCard = styled.div<PlayerCardProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: ${(props) =>
    props.$active ? 'rgba(255, 222, 0, 0.9)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${(props) => (props.$active ? '#ffde00' : 'transparent')};
  position: relative;
  min-width: 180px;

  &:hover {
    background: ${(props) =>
      props.$active ? 'rgba(255, 222, 0, 1)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  ${(props) =>
    props.$active &&
    css`
      animation: ${pulse} 2s infinite;
    `}

  @media (max-width: 600px) {
    min-width: auto;
    width: 100%;
  }
`;

const PlayerAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
`;

const PlayerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const PlayerName = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${(props) => (props.theme?.active ? '#3b4cca' : 'white')};
`;

const PlayerScoreDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: ${(props) =>
    props.theme?.active ? '#3b4cca' : 'rgba(255, 255, 255, 0.8)'};
  font-weight: 500;
`;

const BadgeIcon = styled.div`
  width: 12px;
  height: 12px;
  background: #ee1515;
  border-radius: 50%;
  border: 1px solid white;
`;

const ActiveIndicator = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #22c55e;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  border: 2px solid white;
  animation: ${shine} 2s infinite;
`;

const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ff6b6b, #ee1515);
  opacity: 0.1;
  animation: ${float} 6s ease-in-out infinite;

  &.ball1 {
    top: 10%;
    left: 15%;
    animation-delay: 0s;
  }
  &.ball2 {
    top: 60%;
    right: 20%;
    animation-delay: 2s;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const GreatBallBg = styled(PokeBallBg)`
  background: radial-gradient(circle at 30% 30%, #4dabf7, #3b4cca);

  &.ball3 {
    bottom: 20%;
    left: 10%;
    animation-delay: 4s;
  }
`;

const UltraBallBg = styled(PokeBallBg)`
  background: radial-gradient(circle at 30% 30%, #ffd43b, #ffde00);

  &.ball4 {
    top: 30%;
    right: 10%;
    animation-delay: 1s;
  }
`;

const MasterBallBg = styled(PokeBallBg)`
  background: radial-gradient(circle at 30% 30%, #b197fc, #9775fa);

  &.ball5 {
    bottom: 40%;
    right: 15%;
    animation-delay: 3s;
  }
`;
