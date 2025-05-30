import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';

// Updated fusion data - scalable for 2-3 Pokemon
const POKEMON_FUSIONS = [
  {
    id: 1,
    name: 'Pikachu + Charizard',
    fusionImage:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', // Placeholder
    components: [
      {
        name: 'Pikachu',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      },
      {
        name: 'Charizard',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Bulbasaur + Squirtle + Charmander',
    fusionImage:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', // Placeholder
    components: [
      {
        name: 'Bulbasaur',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      },
      {
        name: 'Squirtle',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      },
      {
        name: 'Charmander',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Eevee + Jigglypuff',
    fusionImage:
      'https://assets.pokemon.com/assets/cms2/img/pokedx/full/133.png', // Placeholder
    components: [
      {
        name: 'Eevee',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
      },
      {
        name: 'Jigglypuff',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Meowth + Psyduck + Magikarp',
    fusionImage:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png', // Placeholder
    components: [
      {
        name: 'Meowth',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
      },
      {
        name: 'Psyduck',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
      },
      {
        name: 'Magikarp',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
      },
    ],
  },
  {
    id: 5,
    name: 'Snorlax + Machamp',
    fusionImage:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png', // Placeholder
    components: [
      {
        name: 'Snorlax',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
      },
      {
        name: 'Machamp',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
      },
    ],
  },
];

function Fusion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { updatePlayerScore } = useGlobalContext();

  const [player, setPlayer] = useState(null);
  const [selectedFusion, setSelectedFusion] = useState(null);
  const [guessInputs, setGuessInputs] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [revealedComponents, setRevealedComponents] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState([]);

  // Get data from location state passed from the wheel
  useEffect(() => {
    if (location.state?.player) {
      setPlayer(location.state.player);
    } else {
      navigate('/game/wheel');
    }
  }, [location, navigate]);

  // Select a random fusion on mount and initialize guess inputs
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * POKEMON_FUSIONS.length);
    const fusion = POKEMON_FUSIONS[randomIndex];
    setSelectedFusion(fusion);
    setGuessInputs(new Array(fusion.components.length).fill(''));
  }, []);

  // Function to update a specific guess input
  const updateGuessInput = (index, value) => {
    const newInputs = [...guessInputs];
    newInputs[index] = value;
    setGuessInputs(newInputs);
  };

  // Function to check all answers
  const handleGuess = () => {
    if (!selectedFusion || guessInputs.some((input) => !input.trim())) return;

    const normalizedGuesses = guessInputs.map((guess) =>
      guess.trim().toLowerCase()
    );
    const componentNames = selectedFusion.components.map((comp) =>
      comp.name.toLowerCase()
    );

    // Check if all guesses match (order doesn't matter)
    const correct =
      normalizedGuesses.every((guess) => componentNames.includes(guess)) &&
      normalizedGuesses.length === componentNames.length;

    // Track which guesses are correct for partial scoring
    const correctAnswers = normalizedGuesses.map((guess) =>
      componentNames.includes(guess)
    );

    setCorrectGuesses(correctAnswers);
    setIsCorrect(correct);
    setShowResult(true);

    if (player) {
      // Award points based on correct answers (partial scoring possible)
      const correctCount = correctAnswers.filter(Boolean).length;
      const pointsPerCorrect = Math.floor(
        400 / selectedFusion.components.length
      );
      const pointsEarned = correctCount * pointsPerCorrect;

      if (pointsEarned > 0) {
        const newScore = player.score + pointsEarned;
        updatePlayerScore(player.id, newScore);
        setPlayer({ ...player, score: newScore });
      }
    }
  };

  // Toggle hint (show component Pokemon)
  const toggleHint = () => {
    setShowHint(!showHint);
  };

  // Reveal the component Pokemon
  const revealComponents = () => {
    setRevealedComponents(true);
  };

  // Return to wheel
  const returnToWheel = () => {
    navigate('/game/wheel');
  };

  // Handle Enter key press
  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter' && !showResult) {
      // Move to next input or submit if it's the last one
      if (index < guessInputs.length - 1) {
        const nextInput = document.querySelector(
          `input[data-index="${index + 1}"]`
        );
        nextInput?.focus();
      } else if (guessInputs.every((input) => input.trim())) {
        handleGuess();
      }
    }
  };

  return (
    <GameContainer>
      <BackButton onClick={returnToWheel}>
        <FaArrowLeft /> Torna alla ruota
      </BackButton>

      <PageTitle>Fusione Pokémon</PageTitle>
      <GameInstructions>
        {player
          ? `${player.name}, indovina i Pokémon usati per creare questa fusione!`
          : 'Indovina i componenti della fusione!'}
      </GameInstructions>

      <GameContent>
        <FusionSection>
          {selectedFusion && (
            <>
              <FusionDisplay>
                <FusionImageContainer>
                  <FusionImage
                    src={selectedFusion.fusionImage}
                    alt='Fusione Pokémon'
                  />
                  <FusionLabel>
                    Fusione di {selectedFusion.components.length} Pokémon
                  </FusionLabel>
                </FusionImageContainer>

                <HintButton onClick={toggleHint}>
                  {showHint ? <FaEyeSlash /> : <FaEye />}
                  {showHint ? ' Nascondi Aiuto' : ' Mostra Aiuto'}
                </HintButton>

                {showHint && (
                  <HintSection>
                    <HintText>Componenti della fusione (offuscati):</HintText>
                    <ComponentPokemon>
                      {selectedFusion.components.map((component, index) => (
                        <React.Fragment key={index}>
                          <PokemonComponent>
                            <BlurredImage
                              src={component.image}
                              alt={`Pokémon ${index + 1}`}
                            />
                            <ComponentName>Pokémon {index + 1}</ComponentName>
                          </PokemonComponent>
                          {index < selectedFusion.components.length - 1 && (
                            <PlusSign>+</PlusSign>
                          )}
                        </React.Fragment>
                      ))}
                    </ComponentPokemon>
                  </HintSection>
                )}
              </FusionDisplay>

              {revealedComponents ? (
                <ComponentReveal>
                  <RevealTitle>Componenti della Fusione:</RevealTitle>
                  <ComponentPokemon>
                    {selectedFusion.components.map((component, index) => (
                      <React.Fragment key={index}>
                        <PokemonComponent>
                          <ComponentImage
                            src={component.image}
                            alt={component.name}
                          />
                          <ComponentName>{component.name}</ComponentName>
                        </PokemonComponent>
                        {index < selectedFusion.components.length - 1 && (
                          <PlusSign>+</PlusSign>
                        )}
                      </React.Fragment>
                    ))}
                  </ComponentPokemon>
                </ComponentReveal>
              ) : !showResult ? (
                <GuessingArea>
                  <GuessInstructions>
                    Inserisci i nomi dei {selectedFusion.components.length}{' '}
                    Pokémon:
                  </GuessInstructions>
                  <GuessInputsContainer>
                    {guessInputs.map((input, index) => (
                      <GuessInputGroup key={index}>
                        <GuessInput
                          type='text'
                          value={input}
                          onChange={(e) =>
                            updateGuessInput(index, e.target.value)
                          }
                          onKeyPress={(e) => handleKeyPress(e, index)}
                          placeholder={`Pokémon ${index + 1}...`}
                          disabled={showResult}
                          data-index={index}
                        />
                      </GuessInputGroup>
                    ))}
                  </GuessInputsContainer>
                  <GuessButton
                    onClick={handleGuess}
                    disabled={
                      guessInputs.some((input) => !input.trim()) || showResult
                    }
                  >
                    Indovina Tutti
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
                      ? `Perfetto! Hai indovinato tutti i componenti! +400 punti!`
                      : `${correctGuesses.filter(Boolean).length}/${
                          selectedFusion.components.length
                        } corretti! +${
                          correctGuesses.filter(Boolean).length *
                          Math.floor(400 / selectedFusion.components.length)
                        } punti!`}
                  </ResultText>

                  {/* Show individual results */}
                  <AnswersList>
                    {guessInputs.map((guess, index) => (
                      <AnswerItem
                        key={index}
                        $correct={correctGuesses[index]}
                      >
                        <span>{guess || '(vuoto)'}</span>
                        {correctGuesses[index] ? <FaCheck /> : <FaTimes />}
                      </AnswerItem>
                    ))}
                  </AnswersList>

                  {!revealedComponents && !isCorrect && (
                    <ActionButton
                      $secondary
                      onClick={revealComponents}
                    >
                      Mostra Componenti
                    </ActionButton>
                  )}

                  <ActionButton onClick={returnToWheel}>
                    Torna alla Ruota
                  </ActionButton>
                </ResultBox>
              )}
            </>
          )}
        </FusionSection>
      </GameContent>

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
        <GreatBallBg className='ball3' />
        <UltraBallBg className='ball4' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default Fusion;

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

const FusionSection = styled.div`
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

const FusionDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FusionImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FusionImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  animation: ${pulse} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`;

const FusionLabel = styled.div`
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: white;
  padding: 8px 16px;
  border-radius: 15px;
  font-weight: bold;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
`;

const HintButton = styled.button`
  background: rgba(59, 76, 202, 0.8);
  color: white;
  border: 2px solid #3b4cca;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3b4cca;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(59, 76, 202, 0.3);
  }
`;

const HintSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 222, 0, 0.3);
  animation: ${fadeIn} 0.5s ease;
  width: 100%;
  max-width: 500px;
`;

const HintText = styled.p`
  color: #ffde00;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ComponentPokemon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const PokemonComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ComponentImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const ComponentName = styled.div`
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
`;

const PlusSign = styled.div`
  color: #ffde00;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0.5rem;
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
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
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
      ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.9), rgba(56, 142, 60, 0.9))'
      : 'linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(198, 40, 40, 0.9))'};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${fadeIn} 0.5s ease;
  border: 3px solid ${(props) => (props.$correct ? '#4CAF50' : '#ee1515')};
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
  font-weight: 600;
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ComponentReveal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  animation: ${fadeIn} 0.7s ease;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 222, 0, 0.3);
  width: 100%;
  max-width: 500px;
`;

const RevealTitle = styled.div`
  color: #ffde00;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const FusionName = styled.div`
  color: #4caf50;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
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

// Add new styled components
const BlurredImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: blur(8px) brightness(0.7);

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const GuessInstructions = styled.div`
  color: #ffde00;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const GuessInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const GuessInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnswersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  width: 100%;
`;

const AnswerItem = styled.div<{ $correct: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${(props) =>
    props.$correct ? 'rgba(76, 175, 80, 0.3)' : 'rgba(238, 21, 21, 0.3)'};
  color: white;
  font-weight: 500;

  svg {
    color: ${(props) => (props.$correct ? '#4CAF50' : '#ee1515')};
  }
`;
