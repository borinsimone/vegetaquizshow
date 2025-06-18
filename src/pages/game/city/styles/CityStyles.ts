import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Animazioni
export const pokeBallSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Additional animations from JS file
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

export const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const scoreGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
`;

// Enhanced GameContainer with modern gradient
export const GameContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-attachment: fixed;
  color: white;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>')
      repeat;
    animation: ${slideIn} 20s linear infinite;
    pointer-events: none;
  }
`;

// Enhanced PlayerBanner
export const PlayerBanner = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.6s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

export const PlayerAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

export const PlayerName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const PlayerLevel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  display: inline-block;
  margin: 0.2rem 0;
`;

export const PlayerScore = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &.score-changed {
    animation: ${scoreGlow} 1s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const ScoreAnimation = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: ${slideIn} 1s ease-in-out;
`;

export const GameProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  min-width: 200px;

  span {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 0.8rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #44a08d);
  border-radius: 4px;
  transition: width 0.5s ease-in-out;
  box-shadow: 0 0 10px rgba(78, 205, 196, 0.5);
`;

// Enhanced Layout
export const HorizontalGameLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Colonna sinistra per l'immagine
export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Colonna destra per indizi e form
export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

// Enhanced CityImageContainer
export const CityImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 1rem;
  }
`;

export const CityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  filter: brightness(1.05) contrast(1.1);

  &:hover {
    filter: brightness(1.1) contrast(1.15);
  }
`;

export const ImageLoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 2;

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e3e3e3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }

  span {
    color: #6c757d;
    font-weight: 500;
  }
`;

// Enhanced Hint Panel Components
export const HintSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.6s ease-out 0.4s both;
  width: 100%;
`;

export const HintTitle = styled.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;

export const HintsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 10px;
  }
`;

export const HintItem = styled.div<{ $used: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ $used }) =>
    $used ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  padding: 1rem;
  border-radius: 15px;
  border-left: 4px solid
    ${({ $used }) => ($used ? '#4caf50' : 'rgba(0, 0, 0, 0.2)')};
  transition: all 0.3s ease;
  cursor: ${({ $used }) => ($used ? 'default' : 'pointer')};

  &:hover {
    background: ${({ $used }) =>
      $used ? 'rgba(76, 175, 80, 0.15)' : 'rgba(0, 0, 0, 0.1)'};
    transform: translateX(5px);
  }
`;

export const HintIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const HintInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HintContent = styled.div`
  color: #333;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 500;
`;

export const HintMasked = styled.div`
  color: #666;
  font-style: italic;
  font-size: 0.95rem;
`;

export const HintCost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #666;
`;

export const SoundPlayButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    animation: ${bounce} 1s infinite;
  }

  svg {
    font-size: 1rem;
  }
`;

// Enhanced Form Components
export const GuessForm = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.6s ease-out 0.6s both;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GuessFormContainer = styled(GuessForm)``;

export const GuessTitle = styled.h3`
  color: #333;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;

export const GuessInputWrapper = styled.div`
  position: relative;
`;

export const GuessInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

// Enhanced Result Components
export const ResultBox = styled.div<{ $correct: boolean }>`
  width: 100%;
  max-width: 500px;
  background: ${({ $correct }) =>
    $correct
      ? 'linear-gradient(135deg, #4caf50, #66bb6a)'
      : 'linear-gradient(135deg, #f44336, #ef5350)'};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.5s ease, ${bounce} 0.5s ease 0.2s;
  color: white;
  text-align: center;
  z-index: 1;
`;

export const ResultIcon = styled.div`
  font-size: 4rem;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${bounce} 1s infinite;
`;

export const ResultTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ResultDetails = styled.p`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.4;
  opacity: 0.95;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ResultButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

// Enhanced City Stats Components
export const CityStatsContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 0.6s ease-out;
  z-index: 1;
`;

export const CityStatsHeader = styled.h3`
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const CityStatsBadges = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1rem 0;
`;

export const CityBadge = styled.div<{ $guessed: boolean }>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $guessed }) =>
    $guessed
      ? 'linear-gradient(45deg, #4caf50, #66bb6a)'
      : 'linear-gradient(45deg, #e0e0e0, #bdbdbd)'};
  border: 2px solid
    ${({ $guessed }) => ($guessed ? '#2e7d32' : 'rgba(0, 0, 0, 0.1)')};
  color: ${({ $guessed }) => ($guessed ? 'white' : '#666')};
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const CityStatsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;

  strong {
    color: #667eea;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

// Enhanced Titles
export const PageTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-out;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.2s both;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

// Enhanced BackButton
export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

// Elementi di sfondo
export const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const PokeBallBg = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  opacity: 0.1;
  animation: ${spin} 60s linear infinite;

  &.ball1 {
    top: 10%;
    left: 10%;
  }

  &.ball2 {
    bottom: 10%;
    right: 10%;
  }
`;

// Giocatori
export const PlayerSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 2rem 0;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const PlayerCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 1.5rem;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  animation: ${fadeIn} 0.8s ease-out;
  z-index: 1;
`;

export const CityCounter = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  p {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-weight: 500;
  }

  strong {
    color: #667eea;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const BuyButton = styled.button`
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 12px;
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

export const ResetButton = styled.button`
  background: linear-gradient(45deg, #f44336, #ef5350);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-end;
  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(244, 67, 54, 0.4);
  }
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-top: 3rem;
  text-align: center;
`;
