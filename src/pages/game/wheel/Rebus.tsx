import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaLightbulb,
  FaRedo,
} from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';

// Import all rebus images
import rebus1Question from '../../../assets/REBUS/Rebus1/domanda/domanda 1.png';
import rebus1Answer from '../../../assets/REBUS/Rebus1/risposta/risposta 1.png';
import rebus2Question from '../../../assets/REBUS/Rebus2/domanda/domanda 2.png';
import rebus2Answer from '../../../assets/REBUS/Rebus2/risposta/risposta 2.png';
import rebus3Question from '../../../assets/REBUS/Rebus3/domanda/domanda 3.png';
import rebus3Answer from '../../../assets/REBUS/Rebus3/risposta/risposta 3.png';
import rebus4Question from '../../../assets/REBUS/Rebus4/domanda/domanda 4.png';
import rebus4Answer from '../../../assets/REBUS/Rebus4/risposta/risposta 4.png';
import rebus5Question from '../../../assets/REBUS/Rebus5/domanda/domanda 5.png';
import rebus5Answer from '../../../assets/REBUS/Rebus5/risposta/risposta 5.png';
import rebus6Question from '../../../assets/REBUS/Rebus6/domanda/domanda 6.png';
import rebus6Answer from '../../../assets/REBUS/Rebus6/risposta/risposta 6.png';
import rebus7Question from '../../../assets/REBUS/Rebus7/domanda/domanda 7.png';
import rebus7Answer from '../../../assets/REBUS/Rebus7/risposta/risposta 7.png';
import rebus8Question from '../../../assets/REBUS/Rebus8/domanda/domanda 8.png';
import rebus8Answer from '../../../assets/REBUS/Rebus8/risposta/risposta 8.png';
import rebus9Question from '../../../assets/REBUS/Rebus9/domanda/domanda 9.png';
import rebus9Answer from '../../../assets/REBUS/Rebus9/risposta/risposta 9.png';
import rebus10Question from '../../../assets/REBUS/Rebus10/domanda/domanda 10.png';
import rebus10Answer from '../../../assets/REBUS/Rebus10/risposta/risposta 10.png';
import rebus11Question from '../../../assets/REBUS/Rebus11/domanda/domanda 11.png';
import rebus11Answer from '../../../assets/REBUS/Rebus11/risposta/risposta 11.png';
import rebus12Question from '../../../assets/REBUS/Rebus12/domanda/domanda 12.png';
import rebus12Answer from '../../../assets/REBUS/Rebus12/risposta/risposta 12.png';

// Rebus data structure with correct paths
const REBUS_DATA = [
  {
    id: 1,
    name: 'staraptor', // You will replace with actual answer
    questionImage: rebus1Question,
    answerImage: rebus1Answer,
    points: 300,
  },
  {
    id: 2,
    name: 'audino', // You will replace with actual answer
    questionImage: rebus2Question,
    answerImage: rebus2Answer,
    points: 300,
  },
  {
    id: 3,
    name: 'darkrai', // You will replace with actual answer
    questionImage: rebus3Question,
    answerImage: rebus3Answer,
    points: 500,
  },
  {
    id: 4,
    name: 'cubone', // You will replace with actual answer
    questionImage: rebus4Question,
    answerImage: rebus4Answer,
    points: 200,
  },
  {
    id: 5,
    name: 'cranidos', // You will replace with actual answer
    questionImage: rebus5Question,
    answerImage: rebus5Answer,
    points: 300,
  },
  {
    id: 6,
    name: 'spinda', // You will replace with actual answer
    questionImage: rebus6Question,
    answerImage: rebus6Answer,
    points: 300,
  },
  {
    id: 7,
    name: 'bagon', // You will replace with actual answer
    questionImage: rebus7Question,
    answerImage: rebus7Answer,
    points: 400,
  },
  {
    id: 8,
    name: 'lucario', // You will replace with actual answer
    questionImage: rebus8Question,
    answerImage: rebus8Answer,
    points: 400,
  },
  {
    id: 9,
    name: 'armaldo', // You will replace with actual answer
    questionImage: rebus9Question,
    answerImage: rebus9Answer,
    points: 300,
  },
  {
    id: 10,
    name: 'escadrill', // You will replace with actual answer
    questionImage: rebus10Question,
    answerImage: rebus10Answer,
    points: 300,
  },
  {
    id: 11,
    name: 'vigorot', // You will replace with actual answer
    questionImage: rebus11Question,
    answerImage: rebus11Answer,
    points: 400,
  },
  {
    id: 12,
    name: 'ninetales', // You will replace with actual answer
    questionImage: rebus12Question,
    answerImage: rebus12Answer,
    points: 500,
  },
];

// LocalStorage keys
const COMPLETED_REBUS_KEY = 'vegetaquizshow_completed_rebus';

function Rebus() {
  const navigate = useNavigate();
  const location = useLocation();
  const { updatePlayerScore } = useGlobalContext();

  const [player, setPlayer] = useState(null);
  const [selectedRebus, setSelectedRebus] = useState(null);
  const [currentRebusIndex, setCurrentRebusIndex] = useState(0);
  const [availableRebus, setAvailableRebus] = useState([]);
  const [completedRebus, setCompletedRebus] = useState([]);
  const [guessInput, setGuessInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Load completed rebus from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(COMPLETED_REBUS_KEY);
    if (saved) {
      try {
        const completed = JSON.parse(saved);
        setCompletedRebus(completed);
      } catch (error) {
        console.error('Error loading completed rebus:', error);
        setCompletedRebus([]);
      }
    }
  }, []);

  // Update available rebus when completed list changes
  useEffect(() => {
    const available = REBUS_DATA.filter(
      (rebus) => !completedRebus.includes(rebus.id)
    );
    setAvailableRebus(available);

    // Reset current index if needed
    if (available.length > 0 && currentRebusIndex >= available.length) {
      setCurrentRebusIndex(0);
    }
  }, [completedRebus, currentRebusIndex]);

  // Set current rebus based on available rebus and index
  useEffect(() => {
    if (
      availableRebus.length > 0 &&
      currentRebusIndex < availableRebus.length
    ) {
      setSelectedRebus(availableRebus[currentRebusIndex]);
      // Reset states when changing rebus
      setGuessInput('');
      setShowResult(false);
      setIsCorrect(false);
      setShowPopup(false);
    } else if (availableRebus.length === 0 && completedRebus.length > 0) {
      // All rebus completed
      setSelectedRebus(null);
    }
  }, [availableRebus, currentRebusIndex]);

  // Get data from location state passed from the wheel
  useEffect(() => {
    if (location.state?.player) {
      setPlayer(location.state.player);
    } else {
      navigate('/game/wheel');
    }
  }, [location, navigate]);

  // Save completed rebus to localStorage
  const saveCompletedRebus = (rebusId) => {
    const updated = [...completedRebus, rebusId];
    setCompletedRebus(updated);
    localStorage.setItem(COMPLETED_REBUS_KEY, JSON.stringify(updated));
  };

  // Reset all completed rebus
  const resetAllProgress = () => {
    setCompletedRebus([]);
    localStorage.removeItem(COMPLETED_REBUS_KEY);
    setCurrentRebusIndex(0);
  };

  // Function to check the answer
  const handleGuess = () => {
    if (!selectedRebus || !guessInput.trim()) return;

    const normalizedGuess = guessInput.trim().toLowerCase();
    const normalizedAnswer = selectedRebus.name.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setShowPopup(true);

    if (correct && player) {
      // Update player score
      const newScore = player.score + selectedRebus.points;
      updatePlayerScore(player.id, newScore);

      // Update local player
      setPlayer({
        ...player,
        score: newScore,
      });
    }
  };

  // Close popup and return to wheel
  const handleClosePopup = () => {
    // Save as completed only when closing popup (after showing result)
    if (isCorrect && selectedRebus) {
      saveCompletedRebus(selectedRebus.id);
    }

    setShowPopup(false);
    // Always return to wheel regardless of answer correctness
    returnToWheel();
  };

  // Return to wheel
  const returnToWheel = () => {
    navigate('/game/wheel');
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !showResult && guessInput.trim()) {
      handleGuess();
    }
  };

  // If all rebus are completed
  if (availableRebus.length === 0 && completedRebus.length > 0) {
    return (
      <GameContainer>
        <BackButton onClick={returnToWheel}>
          <FaArrowLeft /> Torna alla ruota
        </BackButton>

        <PageTitle>🧩 Rebus Challenge 🧩</PageTitle>

        <CompletedSection>
          <CompletedTitle>🎉 Congratulazioni! 🎉</CompletedTitle>
          <CompletedText>
            Hai completato tutti i {REBUS_DATA.length} rebus disponibili!
          </CompletedText>
          <CompletedActions>
            <ActionButton onClick={returnToWheel}>
              Torna alla Ruota
            </ActionButton>
          </CompletedActions>
        </CompletedSection>

        <BackgroundElements>
          <PokeBallBg className='ball1' />
          <PokeBallBg className='ball2' />
          <GreatBallBg className='ball3' />
          <UltraBallBg className='ball4' />
          <PuzzlePieceBg className='puzzle1' />
          <PuzzlePieceBg className='puzzle2' />
        </BackgroundElements>
      </GameContainer>
    );
  }

  return (
    <GameContainer>
      <BackButton onClick={returnToWheel}>
        <FaArrowLeft /> Torna alla ruota
      </BackButton>

      <PageTitle>🧩 Rebus Challenge 🧩</PageTitle>

      <ProgressSection>
        <ProgressText>
          Rebus {currentRebusIndex + 1} di {availableRebus.length}
          {completedRebus.length > 0 &&
            ` (${completedRebus.length} completati)`}
        </ProgressText>
        <ProgressBar>
          <ProgressFill
            $progress={
              ((REBUS_DATA.length - availableRebus.length) /
                REBUS_DATA.length) *
              100
            }
          />
        </ProgressBar>
        {completedRebus.length > 0 && (
          <ResetButton onClick={resetAllProgress}>
            <FaRedo /> Reset Tutti i Rebus
          </ResetButton>
        )}
      </ProgressSection>

      <GameInstructions>
        {player ? `${player.name}, risolvi il rebus!` : 'Decifra il rebus!'}
      </GameInstructions>

      <GameContent>
        <RebusSection>
          {selectedRebus && (
            <>
              <RebusDisplay>
                <PointsBadge>
                  <FaLightbulb /> {selectedRebus.points} punti
                </PointsBadge>

                <RebusContainer>
                  <RebusImageContainer>
                    <RebusImage
                      src={selectedRebus.questionImage}
                      alt={`Rebus ${selectedRebus.id}`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <ImagePlaceholder style={{ display: 'none' }}>
                      🧩 Immagine Rebus {selectedRebus.id}
                    </ImagePlaceholder>
                  </RebusImageContainer>
                </RebusContainer>
              </RebusDisplay>

              <GuessingArea>
                <GuessInstructions>
                  Qual è la soluzione di questo rebus?
                </GuessInstructions>
                <GuessInput
                  type='text'
                  value={guessInput}
                  onChange={(e) => setGuessInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder='Scrivi la tua risposta...'
                  disabled={showResult}
                />
                <GuessButton
                  onClick={handleGuess}
                  disabled={!guessInput.trim() || showResult}
                >
                  Risolvi Rebus
                </GuessButton>
              </GuessingArea>
            </>
          )}
        </RebusSection>
      </GameContent>

      {/* Result Popup */}
      {showPopup && (
        <PopupOverlay onClick={handleClosePopup}>
          <PopupContainer onClick={(e) => e.stopPropagation()}>
            <PopupHeader $correct={isCorrect}>
              <PopupIcon>{isCorrect ? <FaCheck /> : <FaTimes />}</PopupIcon>
              <PopupTitle>{isCorrect ? 'Corretto!' : 'Sbagliato!'}</PopupTitle>
            </PopupHeader>

            <PopupContent>
              <PopupMessage>
                {isCorrect
                  ? `Ottimo! Hai guadagnato ${selectedRebus.points} punti!`
                  : `La risposta corretta era: ${selectedRebus.name}`}
              </PopupMessage>

              <AnswerImageContainer>
                <AnswerImage
                  src={selectedRebus.answerImage}
                  alt={`Soluzione: ${selectedRebus.name}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <AnswerText style={{ display: 'none' }}>
                  Risposta: {selectedRebus.name}
                </AnswerText>
              </AnswerImageContainer>

              <PopupActions>
                <PopupButton onClick={handleClosePopup}>
                  Torna alla Ruota
                </PopupButton>
              </PopupActions>
            </PopupContent>
          </PopupContainer>
        </PopupOverlay>
      )}

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
        <GreatBallBg className='ball3' />
        <UltraBallBg className='ball4' />
        <PuzzlePieceBg className='puzzle1' />
        <PuzzlePieceBg className='puzzle2' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default Rebus;

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

// Styled Components
const GameContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #233975 0%, #1a2a5a 100%);
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
  text-shadow: 3px 3px 0 #3b4cca, 0 0 20px rgba(255, 222, 0, 0.5);
  margin: 2rem 0 1rem;
  text-align: center;
  z-index: 1;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
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
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

const GameContent = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const RebusSection = styled.div`
  width: 100%;
  background: rgba(19, 42, 87, 0.8);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const RebusDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const PointsBadge = styled.div`
  background: linear-gradient(135deg, #ffde00, #ffc107);
  color: #3b4cca;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(255, 222, 0, 0.3);
`;

const RebusContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  border: 3px solid #ffde00;
  min-height: 300px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 250px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 200px;
  }
`;

const RebusImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RebusImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid #3b4cca;

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 250px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(59, 76, 202, 0.1);
  border: 2px dashed #3b4cca;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #3b4cca;
  font-weight: bold;

  @media (max-width: 480px) {
    height: 200px;
    font-size: 1.5rem;
  }
`;

const GuessingArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  align-items: center;
`;

const GuessInstructions = styled.div`
  color: #ffde00;
  font-weight: 600;
  text-align: center;
  font-size: 1.1rem;
`;

const GuessInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 15px;
  border: 2px solid rgba(59, 76, 202, 0.5);
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;
  text-align: center;

  &:focus {
    border-color: #3b4cca;
    box-shadow: 0 0 0 3px rgba(59, 76, 202, 0.2);
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
  padding: 12px 30px;
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
  }
`;

// New Popup Styled Components
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const PopupContainer = styled.div`
  background: rgba(19, 42, 87, 0.95);
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid rgba(255, 222, 0, 0.5);
  backdrop-filter: blur(10px);
  animation: ${pulse} 0.5s ease;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 500px;
  }
`;

const PopupHeader = styled.div<{ $correct: boolean }>`
  background: ${(props) =>
    props.$correct
      ? 'linear-gradient(135deg, #4caf50, #66bb6a)'
      : 'linear-gradient(135deg, #f44336, #ef5350)'};
  padding: 1.5rem;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const PopupIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`;

const PopupTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const PopupContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const PopupMessage = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const AnswerImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid #ffde00;
`;

const AnswerImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-height: 250px;
  }

  @media (max-width: 480px) {
    max-height: 200px;
  }
`;

const AnswerText = styled.div`
  color: #3b4cca;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const PopupActions = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;

const PopupButton = styled.button`
  background: linear-gradient(135deg, #ffde00, #ffc107);
  color: #3b4cca;
  border: none;
  border-radius: 15px;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 222, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 222, 0, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
  }
`;

// Background Elements
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

const PokeBallBg = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f0f0f0 50%, #ee1515 50%);
  opacity: 0.1;

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
    box-shadow: 0 0 0 4px #333, 0 0 0 8px white;
  }

  &.ball1 {
    top: 10%;
    right: 15%;
    animation: ${float} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 15%;
    left: 10%;
    animation: ${float} 15s ease-in-out infinite reverse;
  }
`;

const GreatBallBg = styled(PokeBallBg)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #3b4cca 50%);

  &.ball3 {
    top: 60%;
    right: 5%;
    width: 80px;
    height: 80px;
    animation: ${float} 18s ease-in-out infinite;
  }
`;

const UltraBallBg = styled(PokeBallBg)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #ffde00 50%);

  &.ball4 {
    bottom: 30%;
    right: 20%;
    width: 100px;
    height: 100px;
    animation: ${float} 14s ease-in-out infinite reverse;
  }
`;

const PuzzlePieceBg = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 222, 0, 0.1);
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 30%,
    0% 40%,
    0% 80%,
    30% 70%,
    20% 100%,
    80% 100%,
    70% 70%,
    100% 80%,
    100% 40%,
    70% 30%,
    100% 20%,
    80% 0%
  );
  opacity: 0.3;

  &.puzzle1 {
    top: 20%;
    left: 5%;
    animation: ${spin} 20s linear infinite;
  }

  &.puzzle2 {
    bottom: 20%;
    right: 10%;
    animation: ${spin} 25s linear infinite reverse;
  }
`;

const CompletedSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: rgba(19, 42, 87, 0.8);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);
  max-width: 600px;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const CompletedTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CompletedText = styled.p`
  color: white;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CompletedActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;
const ActionButton = styled.button`
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 200px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
    background: linear-gradient(135deg, #5cbf60, #4caf50);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
    min-width: auto;
  }
`;

const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  z-index: 1;
`;

const ProgressText = styled.div`
  color: #ffde00;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 222, 0, 0.3);

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const ProgressFill = styled.div<{ $progress: number }>`
  width: ${(props) => props.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #66bb6a);
  transition: width 0.5s ease;
`;

const ResetButton = styled.button`
  background: rgba(238, 21, 21, 0.8);
  color: white;
  border: 2px solid #ee1515;
  border-radius: 15px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(238, 21, 21, 0.3);

  &:hover {
    background: #ee1515;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(238, 21, 21, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
`;
