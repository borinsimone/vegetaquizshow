import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaTrophy,
  FaEye,
  FaCheck,
  FaTimes,
  FaUserAlt,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

interface Question {
  question: string;
  answer: string;
  points: number;
  answered: boolean;
}

interface Category {
  name: string;
  color: string;
  questions: Question[];
}

const CategoriesGame = () => {
  // Mantengo tutto il codice della logica uguale
  const [players, setPlayers] = useState<Player[]>([]);
  const [activePlayer, setActivePlayer] = useState<Player | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<{
    category: string;
    question: Question;
    categoryColor: string;
  } | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [categories, setCategories] = useState<Category[]>([
    {
      name: 'Curiosità Pokémon',
      color: '#EE1515', // Colore rosso Pokeball
      questions: [
        {
          question: 'Qual è stato il primo Pokémon disegnato da Game Freak?',
          answer: 'Rhydon',
          points: 100,
          answered: false,
        },
        {
          question: 'Quante varianti di macchie può avere Spinda?',
          answer: '4 miliardi',
          points: 200,
          answered: false,
        },
        {
          question: 'Quale Pokémon si dice sia stato un umano in vita passata?',
          answer: 'Yamask',
          points: 300,
          answered: false,
        },
        {
          question: 'Quale Pokémon si dice possa essere Mew di notte?',
          answer: 'Smeargle',
          points: 400,
          answered: false,
        },
        {
          question:
            'Quale errore di ortografia famoso è apparso in Pokémon GO?',
          answer: 'Pikahcu (invece di Pikachu)',
          points: 500,
          answered: false,
        },
      ],
    },
    {
      name: 'Pokémon Specifici',
      color: '#3B4CCA', // Colore blu Pokémon logo
      questions: [
        {
          question: 'Quale Pokémon è noto per non poter mai guardare a nord?',
          answer: 'Nosepass',
          points: 100,
          answered: false,
        },
        {
          question:
            "Quale Pokémon è considerato la versione 'economica' di Chimchar?",
          answer: 'Pansear',
          points: 200,
          answered: false,
        },
        {
          question: 'Quale Pokémon potrebbe essere associato a Bud Spencer?',
          answer: 'Hippowdon',
          points: 300,
          answered: false,
        },
        {
          question:
            'Quale Pokémon acquatico ha un nome che suggerisce freddezza emotiva?',
          answer: 'Tentacool',
          points: 400,
          answered: false,
        },
        {
          question: 'Quale Pokémon ha le lancette di un orologio sul corpo?',
          answer: 'Hoothoot',
          points: 500,
          answered: false,
        },
      ],
    },
    {
      name: 'Allenatori',
      color: '#FFDE00', // Colore giallo Pokémon logo
      questions: [
        {
          question:
            "Quale tipo di allenatore dice spesso 'C'è solo un capitano'?",
          answer: 'Marinaio',
          points: 100,
          answered: false,
        },
        {
          question:
            'Quale tipo di allenatore è associato a strumenti musicali?',
          answer: 'Chitarrista',
          points: 200,
          answered: false,
        },
        {
          question: 'Quale tipo di allenatore usa tattiche furtive?',
          answer: 'Ninja',
          points: 300,
          answered: false,
        },
        {
          question: 'Quale tipo di allenatore è calvo e muscoloso?',
          answer: 'ZuccaPelata',
          points: 400,
          answered: false,
        },
        {
          question:
            'Quale tipo di allenatore è noto per il suo abbigliamento minimal?',
          answer: 'Fantallenatore',
          points: 500,
          answered: false,
        },
      ],
    },
    {
      name: 'GCC Pokémon',
      color: '#FF9C54', // Arancione per carte Fire
      questions: [
        {
          question:
            "Quante carte si pescano all'inizio di una partita nel GCC Pokémon?",
          answer: '7',
          points: 100,
          answered: false,
        },
        {
          question:
            'Qual è il valore di ritirata più alto mai stampato su una carta?',
          answer: '5 energie',
          points: 200,
          answered: false,
        },
        {
          question: 'In che anno è stato rilasciato il primo Set Base?',
          answer: '1996 in Giappone, 1999 nel resto del mondo',
          points: 300,
          answered: false,
        },
        {
          question:
            "C'è un limite massimo di carte in mano durante una partita ufficiale?",
          answer: "No, ma se non puoi pescare all'inizio del turno perdi",
          points: 400,
          answered: false,
        },
        {
          question: 'Come si chiama la meccanica di Reshiram & Charizard GX?',
          answer: 'Tag Team GX',
          points: 500,
          answered: false,
        },
      ],
    },
    {
      name: 'Serie Pokémon',
      color: '#78C850', // Verde dell'energia erba
      questions: [
        {
          question: 'Chi è il protagonista della prima serie animata Pokémon?',
          answer: 'Ash Ketchum',
          points: 100,
          answered: false,
        },
        {
          question: 'Quale Pokémon leggendario appare nel primo film?',
          answer: 'Mewtwo',
          points: 200,
          answered: false,
        },
        {
          question: 'Come si chiamano i nemici ricorrenti nella serie animata?',
          answer: 'Team Rocket (Jessie, James e Meowth)',
          points: 300,
          answered: false,
        },
        {
          question: 'Quante stagioni ha la serie animata originale?',
          answer: '23 stagioni (fino a Pokémon Esplorazioni)',
          points: 400,
          answered: false,
        },
        {
          question: 'Chi è il successore di Ash come protagonista?',
          answer: 'Liko e Roy',
          points: 500,
          answered: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    // Recupera i giocatori dal localStorage
    const savedPlayers = localStorage.getItem('quizPlayers');
    if (savedPlayers) {
      const parsedPlayers = JSON.parse(savedPlayers);
      setPlayers(parsedPlayers);
      if (parsedPlayers.length > 0) {
        setActivePlayer(parsedPlayers[0]);
      }
    }
  }, []);

  const handleQuestionClick = (
    categoryName: string,
    question: Question,
    categoryColor: string
  ) => {
    if (question.answered || !activePlayer) return;

    setCurrentQuestion({
      category: categoryName,
      question: question,
      categoryColor: categoryColor,
    });
    setShowAnswer(false);
  };

  const markQuestionAsAnswered = (questionToMark: Question) => {
    setCategories(
      categories.map((category) => ({
        ...category,
        questions: category.questions.map((question) =>
          question === questionToMark
            ? { ...question, answered: true }
            : question
        ),
      }))
    );
  };

  const handleCorrectAnswer = () => {
    if (!activePlayer || !currentQuestion) return;

    // Aggiorna il punteggio del giocatore attivo
    const updatedPlayers = players.map((player) =>
      player.id === activePlayer.id
        ? { ...player, score: player.score + currentQuestion.question.points }
        : player
    );

    setPlayers(updatedPlayers);
    localStorage.setItem('quizPlayers', JSON.stringify(updatedPlayers));

    // Aggiorna il giocatore attivo con il nuovo punteggio
    setActivePlayer({
      ...activePlayer,
      score: activePlayer.score + currentQuestion.question.points,
    });

    // Marca la domanda come risposta
    markQuestionAsAnswered(currentQuestion.question);

    // Chiudi la domanda
    setCurrentQuestion(null);
  };

  const handleIncorrectAnswer = () => {
    if (!currentQuestion) return;

    // Marca la domanda come risposta
    markQuestionAsAnswered(currentQuestion.question);

    // Chiudi la domanda
    setCurrentQuestion(null);
  };

  return (
    <GameContainer>
      <BackButton to='/game'>
        <FaArrowLeft /> Torna ai giochi
      </BackButton>

      <PageTitle>Sfida Quiz Pokémon</PageTitle>

      <JeopardyBoard>
        <CategoryRow>
          {categories.map((category, index) => (
            <CategoryHeader
              key={index}
              $color={category.color}
            >
              <PokeBallIcon />
              {category.name}
            </CategoryHeader>
          ))}
        </CategoryRow>

        {[0, 1, 2, 3, 4].map((rowIndex) => (
          <QuestionRow key={rowIndex}>
            {categories.map((category, colIndex) => {
              const question = category.questions[rowIndex];
              return (
                <QuestionCell
                  key={colIndex}
                  $color={category.color}
                  $answered={question.answered}
                  onClick={() =>
                    handleQuestionClick(category.name, question, category.color)
                  }
                >
                  {question.answered ? (
                    <AnsweredMark>
                      <PokeBallCatchIcon />
                    </AnsweredMark>
                  ) : (
                    <PointValue>{question.points}</PointValue>
                  )}
                </QuestionCell>
              );
            })}
          </QuestionRow>
        ))}
      </JeopardyBoard>

      <PlayerSection>
        <SectionHeader>
          <SectionTitle>Allenatori</SectionTitle>
          <InstructionText>
            {activePlayer
              ? 'Scegli una casella per sfidare la tua conoscenza'
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

      <AnimatePresence>
        {currentQuestion && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <QuestionModal
              as={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              $color={currentQuestion.categoryColor}
            >
              <ModalHeader>
                <CategoryBadge $color={currentQuestion.categoryColor}>
                  {currentQuestion.category}
                </CategoryBadge>
                <PointBadge>
                  <BadgeIcon /> {currentQuestion.question.points} punti
                </PointBadge>
              </ModalHeader>

              <QuestionContent>
                {currentQuestion.question.question}
              </QuestionContent>

              <AnswerSection>
                {showAnswer ? (
                  <AnswerReveal
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AnswerText>{currentQuestion.question.answer}</AnswerText>
                    <ButtonGroup>
                      <ActionButton
                        $color='#4CAF50'
                        onClick={handleCorrectAnswer}
                      >
                        <FaCheck /> Corretta
                      </ActionButton>
                      <ActionButton
                        $color='#EE1515'
                        onClick={handleIncorrectAnswer}
                      >
                        <FaTimes /> Sbagliata
                      </ActionButton>
                    </ButtonGroup>
                  </AnswerReveal>
                ) : (
                  <RevealButton onClick={() => setShowAnswer(true)}>
                    <FaEye /> Mostra Risposta
                  </RevealButton>
                )}
              </AnswerSection>

              <PlayerIndicator>
                <PlayerAvatar
                  src={activePlayer?.avatar}
                  alt={activePlayer?.name}
                  $small
                />
                <span>{activePlayer?.name}</span>
              </PlayerIndicator>
            </QuestionModal>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
        <GreatBallBg className='ball3' />
        <UltraBallBg className='ball4' />
        <MasterBallBg className='ball5' />
      </BackgroundElements>
    </GameContainer>
  );
};

export default CategoriesGame;

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

const shine = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.8; }
  100% { opacity: 0.3; }
`;

const pokeballWiggle = keyframes`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

// Styled Components
const GameContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  background: #233975;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: 'Pokemon Solid', 'Montserrat', sans-serif;

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
  font-size: 2.6rem;
  font-weight: 800;
  text-align: center;
  z-index: 1;
  color: #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
  letter-spacing: 2px;
  /* margin-bottom: 1.5rem; */

  @media (max-width: 768px) {
    font-size: 2rem;
    -webkit-text-stroke: 1px #3b4cca;
  }
`;

const JeopardyBoard = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: rgba(19, 42, 87, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 1;
  border: 4px solid #ffde00;
`;

// Utility interfaces
interface ColorProps {
  $color: string;
}

interface AnsweredProps {
  $answered?: boolean;
}

interface SmallProps {
  $small?: boolean;
}

interface ActiveProps {
  $active?: boolean;
}

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`;

const PokeBallIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  margin-right: 8px;
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 1px #333, 0 0 0 3px white;
  }
`;

const PokeBallCatchIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;
  animation: ${pokeballWiggle} 1s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px #333, 0 0 0 5px white;
  }
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

const CategoryHeader = styled.div<ColorProps>`
  background: ${(props) => props.$color};
  color: white;
  padding: 20px 15px;
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid white;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 15px 10px;
  }
`;

const QuestionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`;

const QuestionCell = styled.div<ColorProps & AnsweredProps>`
  background: ${(props) =>
    props.$answered ? 'rgba(19, 42, 87, 0.7)' : 'rgba(19, 42, 87, 0.95)'};
  color: ${(props) => props.$color};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.$answered ? 'default' : 'pointer')};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
  opacity: ${(props) => (props.$answered ? 0.8 : 1)};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }

  ${(props) =>
    !props.$answered &&
    css`
      &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 20px ${props.$color};
        z-index: 1;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid ${props.$color};
        }
      }
    `}

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const PointValue = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;

  &::after {
    content: 'P';
    font-size: 1rem;
    vertical-align: super;
    margin-left: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AnsweredMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const PlayerSection = styled.div`
  width: 100%;
  max-width: 1200px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  z-index: 1;
  margin-top: 2rem;
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

const PlayerAvatar = styled.img<SmallProps>`
  width: ${(props) => (props.$small ? '30px' : '45px')};
  height: ${(props) => (props.$small ? '30px' : '45px')};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
`;

const QuestionModal = styled.div<ColorProps>`
  background: radial-gradient(circle at top left, #233975 0%, #132a57 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid #ffde00;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`;

const CategoryBadge = styled.div<ColorProps>`
  background: ${(props) => props.$color || '#00ccff'};
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const PointBadge = styled.div`
  background: rgba(255, 255, 255, 0.15);
  color: #ffde00;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.3);
  display: flex;
  align-items: center;
`;

const QuestionContent = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  padding: 40px 30px;
  color: white;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '?';
    position: absolute;
    font-size: 8rem;
    opacity: 0.06;
    color: white;
    z-index: -1;
  }

  &::before {
    top: 20px;
    left: 30px;
  }

  &::after {
    bottom: 20px;
    right: 30px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 30px 20px;
    min-height: 140px;
  }
`;

const AnswerSection = styled.div`
  padding: 20px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  position: relative;
  z-index: 1;
`;

const AnswerReveal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerText = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  color: #ffde00;
  margin-bottom: 30px;
  line-height: 1.5;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 1px solid rgba(255, 222, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ActionButton = styled.button<ColorProps>`
  background: ${(props) => props.$color};
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

const RevealButton = styled.button`
  background: linear-gradient(135deg, #3b4cca, #0a1f5c);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
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

const PlayerIndicator = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;

  background: linear-gradient(to right, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  z-index: 10;
  border: 2px solid white;
`;
