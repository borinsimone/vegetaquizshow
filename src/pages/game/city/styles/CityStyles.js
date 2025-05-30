import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const scoreGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
`;

const progressFill = keyframes`
  from { width: 0%; }
  to { width: var(--target-width); }
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

// Enhanced Layout
export const HorizontalGameLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// Enhanced GameContainer
export const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-attachment: fixed;
  padding: 2rem;
  position: relative;
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

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

// ...existing code for other components...
