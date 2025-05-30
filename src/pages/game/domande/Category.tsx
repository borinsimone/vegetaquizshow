import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaEye,
  FaCheck,
  FaTimes,
  FaUserAlt,
  FaHistory,
  FaStar,
  FaCrown,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

interface Question {
  id: string; // Aggiungi questo campo

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
          question: "L'Adamo dei pokemon per gamefreak",
          answer: 'Rhydon è stato il primo pokemon disegnato',
          points: 100,
          answered: false,
        },
        {
          question:
            "Charizard può anche ottenere una variante ogni anno, ma c'è chi ne possiede 4 miliardi",
          answer: 'Possibili varianti delle macchie di Spinda',
          points: 200,
          answered: false,
        },
        {
          question: 'Se proprio devo morire che almeno diventi un pokemon',
          answer:
            'Yamask si dice che sia stato un umano divenuto pokemon dopo la morte e che la maschera sia il ricordo della vita passata',
          points: 300,
          answered: false,
        },
        {
          question: 'Roma di notte e di notte Roma, Mew di giorno e di notte…',
          answer:
            ' Smergle, fra le varie leggende legate a loro due esiste una che dice che Smergle sia Mew di notte',
          points: 400,
          answered: false,
        },
        {
          question:
            "Sebbene sia la mascotte, c'è ancora chi non sa scrivere il suo nome",
          answer: 'Errore del nome Pikachu in Pokemon Go (Pikahcu)',
          points: 500,
          answered: false,
        },
      ],
    },
    {
      name: 'Pokémon',
      color: '#3B4CCA', // Colore blu Pokémon logo
      questions: [
        {
          question: 'Impossibile andare oltre',
          answer: 'Nosepass',
          points: 100,
          answered: false,
        },
        {
          question: 'Bello Chimchar, sì, finché non ti arriva da Wish',
          answer: 'Pansear',
          points: 200,
          answered: false,
        },
        {
          question: 'Il pokemon preferito di Bud Spencer',
          answer: 'Hippowdon',
          points: 300,
          answered: false,
        },
        {
          question:
            'Dovrei essere meno emotivo, sono tentato a diventare più freddo',
          answer: 'Tentacool',
          points: 400,
          answered: false,
        },
        {
          question: 'Sono le 11:05 o le 12:55?',
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
          question: "C'è solo un capitano",
          answer: 'Marinaio',
          points: 100,
          answered: false,
        },
        {
          question: 'Conoscevo questo allenatore ma poi mi sono scordato ',
          answer: 'Chitarrista',
          points: 200,
          answered: false,
        },
        {
          question:
            'Quanto era bello fargli il culo dopo che ti prendeva un coccolone?',
          answer: 'Ninja',
          points: 300,
          answered: false,
        },
        {
          question: 'Il potere è pelato e a quanto pare anche muscoloso',
          answer: 'ZuccaPelata',
          points: 400,
          answered: false,
        },
        {
          question:
            '+10 punti se sale sul campo da battaglia con i capezzoli di fuori?',
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
          question: 'Quanti sono i tipi presenti nel GCC?',
          answer: '11',
          points: 200,
          answered: false,
        },
        {
          question:
            'Qual è il valore di ritirata più alto mai stampato su una carta?',
          answer: '5 energie',
          points: 300,
          answered: false,
        },
        {
          question: 'Quanti sono i PS massimi mai stampati su una carta?',
          answer: '340',
          points: 400,
          answered: false,
        },
        {
          question:
            'Qual è il primo set di carte e quando è stato rilasciato? (giappone/italia)',
          answer: 'Set Base nel 1996/2000',
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
          question:
            'Quale pokemon era famoso per portare sempre con se un paio di occhiali neri?',
          answer: 'Squirtle',
          points: 100,
          answered: false,
        },
        {
          question:
            'Quale Pokémon leggendario appare nel primo film? (fino a 5 gen)',
          answer: 'Misty - Brock - Spighetto - (Iris)',
          points: 200,
          answered: false,
        },
        {
          question: 'In quale anno è uscita la prima serie pokemon in Italia?',
          answer: 'Nel 2000',
          points: 300,
          answered: false,
        },
        {
          question: 'Chi sono i pokemon starter full evolved avuti da ash?',
          answer:
            'Charizard - Sceptile - Torterra - Infernape - Incineroar - Greninja -',
          points: 400,
          answered: false,
        },
        {
          question: 'Quanti sono i lungometraggi della serie pokemon?',
          answer: '22 ',
          points: 500,
          answered: false,
        },
      ],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

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

    // Recupera le categorie salvate o genera nuove categorie con ID
    const savedCategories = localStorage.getItem('quizCategories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    } else {
      // Se non ci sono categorie salvate, genera ID univoci per ogni domanda
      const categoriesWithIds = categories.map((category) => ({
        ...category,
        questions: category.questions.map((question) => ({
          ...question,
          id: `${category.name}-${question.points}-${Math.random()
            .toString(36)
            .substr(2, 9)}`,
        })),
      }));
      setCategories(categoriesWithIds);
    }
  }, []);

  const handleQuestionClick = (
    categoryName: string,
    question: Question,
    categoryColor: string
  ) => {
    if (question.answered || !activePlayer) return;

    setIsLoading(true);
    setTimeout(() => {
      setCurrentQuestion({
        category: categoryName,
        question: question,
        categoryColor: categoryColor,
      });
      setShowAnswer(false);
      setIsLoading(false);
    }, 300);
  };

  // E poi modifica la funzione markQuestionAsAnswered per usare l'ID
  const markQuestionAsAnswered = (questionToMark: Question) => {
    const updatedCategories = categories.map((category) => ({
      ...category,
      questions: category.questions.map((question) =>
        question.id === questionToMark.id
          ? { ...question, answered: true }
          : question
      ),
    }));

    setCategories(updatedCategories);
    localStorage.setItem('quizCategories', JSON.stringify(updatedCategories));
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
  // Aggiungi anche questa nuova funzione per resettare le domande (opzionale)
  const resetQuizQuestions = () => {
    const resetCategories = categories.map((category) => ({
      ...category,
      questions: category.questions.map((question) => ({
        ...question,
        answered: false,
      })),
    }));

    setCategories(resetCategories);
    localStorage.setItem('quizCategories', JSON.stringify(resetCategories));
  };
  return (
    <GameContainer>
      <TopBar>
        <BackButton to='/game'>
          <FaArrowLeft />
          <span>Torna ai giochi</span>
        </BackButton>

        <ResetButton onClick={resetQuizQuestions}>
          <FaHistory />
          <span>Reset Quiz</span>
        </ResetButton>
      </TopBar>
      <PageTitle
        as={motion.h1}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        🎮 Sfida Quiz Pokémon 🎮
      </PageTitle>
      <div
        className='container'
        style={{
          display: 'flex',
          width: '90%',
          justifyContent: 'space-evenly',
        }}
      >
        <div className='table'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <JeopardyBoard>
              <CategoryRow>
                {categories.map((category, index) => (
                  <CategoryHeader
                    key={index}
                    $color={category.color}
                    as={motion.div}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PokeBallIcon />
                    <CategoryName>{category.name}</CategoryName>
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
                          handleQuestionClick(
                            category.name,
                            question,
                            category.color
                          )
                        }
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (rowIndex * 5 + colIndex) * 0.05 }}
                        whileHover={!question.answered ? { scale: 1.05 } : {}}
                        whileTap={!question.answered ? { scale: 0.95 } : {}}
                      >
                        {question.answered ? (
                          <AnsweredMark>
                            <PokeBallCatchIcon />
                            <CompletedText>Catturato!</CompletedText>
                          </AnsweredMark>
                        ) : (
                          <PointValue>
                            <StarIcon />
                            {question.points}
                            <PointSuffix>PT</PointSuffix>
                          </PointValue>
                        )}
                      </QuestionCell>
                    );
                  })}
                </QuestionRow>
              ))}
            </JeopardyBoard>
          </motion.div>
        </div>

        <PlayerSection
          as={motion.div}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionHeader>
            <SectionTitle>
              <FaCrown /> Allenatori in Gara
            </SectionTitle>
            <InstructionText>
              {activePlayer
                ? `🎯 Turno di ${activePlayer.name} - Scegli una domanda!`
                : '👆 Seleziona un allenatore per iniziare la sfida'}
            </InstructionText>
          </SectionHeader>

          <PlayerList>
            {players.map((player, index) => (
              <PlayerCard
                key={player.id}
                $active={activePlayer?.id === player.id}
                onClick={() => setActivePlayer(player)}
                as={motion.div}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PlayerAvatar
                  src={player.avatar}
                  alt={player.name}
                />
                <PlayerInfo>
                  <PlayerName>{player.name}</PlayerName>
                  <PlayerScoreDisplay>
                    <FaStar /> {player.score} punti
                  </PlayerScoreDisplay>
                </PlayerInfo>
                {activePlayer?.id === player.id && (
                  <ActiveIndicator
                    as={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaCrown />
                  </ActiveIndicator>
                )}
              </PlayerCard>
            ))}
          </PlayerList>
        </PlayerSection>
      </div>

      <AnimatePresence>
        {isLoading && (
          <LoadingOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingSpinner />
            <LoadingText>Preparando la domanda...</LoadingText>
          </LoadingOverlay>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentQuestion && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setCurrentQuestion(null);
                setShowAnswer(false);
              }
            }}
          >
            <QuestionModal
              as={motion.div}
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              $color={currentQuestion.categoryColor}
            >
              <CloseButton
                onClick={() => {
                  setCurrentQuestion(null);
                  setShowAnswer(false);
                }}
                as={motion.button}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <MdClose size={24} />
              </CloseButton>

              <ModalHeader>
                <CategoryBadge $color={currentQuestion.categoryColor}>
                  <PokeBallIcon />
                  {currentQuestion.category}
                </CategoryBadge>
                <PointBadge>
                  <FaStar /> {currentQuestion.question.points} punti
                </PointBadge>
              </ModalHeader>

              <QuestionContent
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentQuestion.question.question}
              </QuestionContent>

              <AnswerSection>
                {showAnswer ? (
                  <AnswerReveal
                    as={motion.div}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <AnswerText>
                      💡 {currentQuestion.question.answer}
                    </AnswerText>
                    <ButtonGroup>
                      <ActionButton
                        $color='#4CAF50'
                        onClick={handleCorrectAnswer}
                        as={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaCheck /> Corretta
                      </ActionButton>
                      <ActionButton
                        $color='#EE1515'
                        onClick={handleIncorrectAnswer}
                        as={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaTimes /> Sbagliata
                      </ActionButton>
                    </ButtonGroup>
                  </AnswerReveal>
                ) : (
                  <RevealButton
                    onClick={() => setShowAnswer(true)}
                    as={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye /> Rivela la Risposta
                  </RevealButton>
                )}
              </AnswerSection>

              <PlayerIndicator>
                <PlayerAvatar
                  src={activePlayer?.avatar}
                  alt={activePlayer?.name}
                  $small
                />
                <PlayerName>{activePlayer?.name}</PlayerName>
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

// Enhanced Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const shine = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0,-4px,0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Enhanced Styled Components
const GameContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  padding-top: 100px; /* Spazio per la TopBar fissa */
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);
  color: white;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  gap: 2rem; /* Spazio tra gli elementi */

  @media (max-width: 768px) {
    padding: 80px 0.5rem 1rem 0.5rem;
    gap: 1.5rem;
  }
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(26, 35, 126, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 222, 0, 0.3);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  padding: 10px 16px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    transform: translateX(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #f44336, #d32f2f);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(244, 67, 54, 0.3);

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  &:hover {
    background: linear-gradient(135deg, #e53935, #c62828);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(244, 67, 54, 0.4);
  }
`;

const PageTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  color: #ffde00;
  background: linear-gradient(45deg, #ffde00, #ffc107, #ff9800);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  margin: 0; /* Rimosso il margin eccessivo */
  position: relative;
  z-index: 10; /* Assicura che sia visibile */

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 222, 0, 0.1),
      transparent
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${shimmer} 3s ease-in-out infinite;
  }
`;

const JeopardyBoard = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: rgba(13, 27, 62, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(255, 222, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 2px solid #ffde00;
  overflow: hidden;
  backdrop-filter: blur(10px);
  z-index: 10; /* Assicura che sia visibile */
`;

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`;

const CategoryHeader = styled.div<ColorProps>`
  background: linear-gradient(
    135deg,
    ${(props) => props.$color},
    ${(props) => props.$color}dd
  );
  color: white;
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  min-height: 100px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
    min-height: 80px;
  }
`;

const CategoryName = styled.span`
  font-size: 0.9rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const QuestionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`;

const QuestionCell = styled.div<ColorProps & AnsweredProps>`
  background: ${(props) =>
    props.$answered
      ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(56, 142, 60, 0.2))'
      : 'linear-gradient(135deg, rgba(13, 27, 62, 0.8), rgba(21, 39, 78, 0.9))'};
  color: ${(props) => (props.$answered ? '#81C784' : props.$color)};
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.$answered ? 'default' : 'pointer')};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      !props.$answered
        ? `radial-gradient(circle at center, ${props.$color}15, transparent)`
        : 'none'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${(props) =>
    !props.$answered &&
    css`
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 20px ${props.$color}40, inset 0 0 20px ${props.$color}20;
        border: 2px solid ${props.$color};
        z-index: 1;

        &::before {
          opacity: 1;
        }
      }
    `}

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const PointValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 1.8rem;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StarIcon = styled(FaStar)`
  font-size: 1rem;
  margin-bottom: 4px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const PointSuffix = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.8;
`;

const AnsweredMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  animation: ${bounce} 1s ease-out;
`;

const CompletedText = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #81c784;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const PokeBallIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #ee1515 55%
  );
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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
    box-shadow: 0 0 0 1px #333;
  }
`;

const PokeBallCatchIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #4caf50 55%
  );
  position: relative;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px #333;
  }
`;

const PlayerSection = styled.div`
  width: 20vw;
  max-width: 1200px;
  background: rgba(13, 27, 62, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(255, 222, 0, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 10; /* Assicura che sia visibile */

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 222, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const InstructionText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  background: rgba(255, 222, 0, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 222, 0, 0.4);
  backdrop-filter: blur(5px);
`;

const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlayerCard = styled.div<ActiveProps>`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$active
      ? 'linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(255, 193, 7, 0.1))'
      : 'rgba(255, 255, 255, 0.08)'};
  border-radius: 16px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid
    ${(props) => (props.$active ? '#FFDE00' : 'rgba(255, 255, 255, 0.1)')};
  cursor: pointer;
  backdrop-filter: blur(10px);

  ${(props) =>
    props.$active &&
    css`
      box-shadow: 0 0 20px rgba(255, 222, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      animation: ${pulse} 2s infinite ease-in-out;
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const PlayerAvatar = styled.img<SmallProps>`
  width: ${(props) => (props.$small ? '32px' : '50px')};
  height: ${(props) => (props.$small ? '32px' : '50px')};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const PlayerInfo = styled.div`
  flex: 1;
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
  gap: 6px;
  font-size: 0.9rem;
  color: #ffde00;
  font-weight: 600;
`;

const ActiveIndicator = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #ff9800, #f57c00);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  animation: ${shine} 2s infinite;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 222, 0, 0.3);
  border-top: 4px solid #ffde00;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const QuestionModal = styled.div<ColorProps>`
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
  border-radius: 20px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 3px rgba(255, 222, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid #ffde00;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(244, 67, 54, 0.9);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(244, 67, 54, 1);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const CategoryBadge = styled.div<ColorProps>`
  background: linear-gradient(
    135deg,
    ${(props) => props.$color},
    ${(props) => props.$color}dd
  );
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

const PointBadge = styled.div`
  background: rgba(255, 222, 0, 0.2);
  color: #ffde00;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(10px);
`;

const QuestionContent = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  padding: 3rem 2rem;
  color: white;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  position: relative;
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 2rem 1.5rem;
    min-height: 120px;
  }
`;

const AnswerSection = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const AnswerReveal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const AnswerText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: #ffde00;
  line-height: 1.5;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 1px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ActionButton = styled.button<ColorProps>`
  background: linear-gradient(
    135deg,
    ${(props) => props.$color},
    ${(props) => props.$color}dd
  );
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  min-width: 140px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
  }
`;

const RevealButton = styled.button`
  background: linear-gradient(135deg, #3b4cca, #283593);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #303f9f, #1a237e);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const PlayerIndicator = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid white;
  backdrop-filter: blur(10px);
`;

const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Messo dietro a tutto */
  overflow: hidden;
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #ee1515 55%
  );
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  opacity: 0.05; /* Ridotta opacità per non interferire */

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333;
  }

  &.ball1 {
    top: 10%;
    right: 10%;
    animation: ${float} 8s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 20%;
    left: 5%;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`;

const GreatBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #3b4cca 55%
  );

  &.ball3 {
    top: 30%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${float} 12s ease-in-out infinite;
  }
`;

const UltraBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #ffde00 55%
  );

  &.ball4 {
    bottom: 10%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${float} 15s ease-in-out infinite reverse;
  }
`;

const MasterBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #9966ff 55%
  );

  &.ball5 {
    top: 50%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${float} 14s ease-in-out infinite;
  }
`;
