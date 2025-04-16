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

// Layout orizzontale per CityGame
export const HorizontalGameLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
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

// Contenitore immagine città
export const CityImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 3px solid #ffde00;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    );
    z-index: 1;
  }
`;

export const CityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Pannello indizi migliorato
export const HintSection = styled.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 1.5rem;
  border-radius: 15px;
  width: 100%;
  border: 2px solid rgba(255, 222, 0, 0.5);
`;

export const HintTitle = styled.h3`
  color: #ffde00;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0 #3b4cca;
`;

export const HintsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 0.5rem;

  /* Scrollbar custom styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffde00;
    border-radius: 10px;
  }
`;

export const HintItem = styled.div<{ $used: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ $used }) =>
    $used ? 'rgba(59, 76, 202, 0.3)' : 'rgba(0, 0, 0, 0.2)'};
  padding: 1rem;
  border-radius: 10px;
  border-left: 3px solid
    ${({ $used }) => ($used ? '#ffde00' : 'rgba(255, 255, 255, 0.2)')};
  transition: all 0.3s;

  &:hover {
    background: ${({ $used }) =>
      $used ? 'rgba(59, 76, 202, 0.4)' : 'rgba(0, 0, 0, 0.3)'};
  }
`;

export const HintIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffde00;
  color: #3b4cca;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

export const HintInfo = styled.div`
  flex: 1;
`;

export const HintContent = styled.div`
  margin-bottom: 0.5rem;
`;

export const HintMasked = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

export const HintCost = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Form per indovinare
export const GuessForm = styled.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 1.5rem;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid rgba(255, 222, 0, 0.5);
`;

export const GuessTitle = styled.h3`
  color: #ffde00;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0 #3b4cca;
`;

export const GuessInputWrapper = styled.div`
  position: relative;
`;

export const GuessInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #ffde00, 0 5px 15px rgba(255, 222, 0, 0.4);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
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
    background: #888;
    cursor: not-allowed;
  }
`;

// Banner del player
export const PlayerBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 1.5rem;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);
  z-index: 1;
`;

// Stili per il bottone di riproduzione audio
export const SoundPlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(59, 76, 202, 0.6);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 76, 202, 0.8);
    transform: translateY(-2px);
    animation: ${pulse} 1s infinite;
  }

  svg {
    color: #ffde00;
  }
`;

// Contenitori principali
export const GameContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  background-color: #0a1428;
  color: white;
  overflow-x: hidden;
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-top: 3rem;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
`;

export const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  z-index: 1;
  max-width: 600px;
`;

export const BackButton = styled(Link)`
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

// Giocatori
export const PlayerSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 2rem 0;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  color: #ffde00;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 2px 2px 0 #3b4cca;
`;

export const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const PlayerCard = styled.div`
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

export const PlayerAvatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #ffde00;
  background-color: white;
  object-fit: cover;
`;

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlayerName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffde00;
  margin-bottom: 0.3rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

export const PlayerScore = styled.div`
  font-size: 0.9rem;
  color: white;
`;

// Contenitore dei contenuti di gioco
export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 2rem;
  z-index: 1;
`;

// Elementi aggiuntivi
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CityCounter = styled.div`
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  border: 2px solid rgba(255, 222, 0, 0.3);

  p {
    margin: 0 0 0.5rem 0;
    color: white;
  }

  strong {
    color: #ffde00;
    font-size: 1.2rem;
  }
`;

// export const ResetButton = styled.button`
//   background: rgba(238, 21, 21, 0.6);
//   color: white;
//   border: none;
//   border-radius: 15px;
//   padding: 6px 12px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(238, 21, 21, 0.8);
//     transform: translateY(-2px);
//   }
// `;
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
// Form per indovinare - componente principale
export const GuessFormContainer = styled.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 1.5rem;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid rgba(255, 222, 0, 0.5);
`;
// Componenti per la schermata dei risultati
interface ResultBoxProps {
  $correct: boolean;
}

export const ResultBox = styled.div<ResultBoxProps>`
  width: 100%;
  max-width: 500px;
  background: ${({ $correct }) =>
    $correct ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)'};
  border-radius: 15px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid
    ${({ $correct }) => ($correct ? '#ffde00' : 'rgba(255, 255, 255, 0.3)')};
  animation: ${pulse} 0.5s ease;
  z-index: 1;
`;

export const ResultIcon = styled.div`
  font-size: 3.5rem;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  animation: ${pulse} 1s infinite;
`;

export const ResultTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ResultDetails = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

export const ResultButton = styled.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
    background: white;
  }

  &:active {
    transform: translateY(1px);
  }
`;
// Aggiungi dopo gli altri stili

// Stili per il componente RemainingCities
export const CityStatsContainer = styled.div`
  background: rgba(19, 42, 87, 0.8);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid rgba(255, 222, 0, 0.5);
  z-index: 1;
`;

export const CityStatsHeader = styled.h3`
  color: #ffde00;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

export const CityStatsBadges = styled.div`
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0.5rem 0;
`;

interface CityBadgeProps {
  $guessed: boolean;
}

export const CityBadge = styled.div<CityBadgeProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $guessed }) =>
    $guessed ? 'rgba(76, 175, 80, 0.8)' : 'rgba(0, 0, 0, 0.3)'};
  border: 2px solid
    ${({ $guessed }) => ($guessed ? '#ffde00' : 'rgba(255, 255, 255, 0.2)')};
  color: ${({ $guessed }) => ($guessed ? 'white' : 'rgba(255, 255, 255, 0.6)')};
  font-size: 1.2rem;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CityStatsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 0.9rem;

  strong {
    color: #ffde00;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ResetButton = styled.button`
  background: rgba(238, 21, 21, 0.6);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 8px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-end;

  &:hover {
    background: rgba(238, 21, 21, 0.8);
    transform: translateY(-2px);
  }
`;
