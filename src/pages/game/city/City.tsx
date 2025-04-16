import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';

// Importa dati e stili
import { POKEMON_CITIES } from './data/CityData';
import {
  GameContainer,
  BackButton,
  PageTitle,
  GameInstructions,
  LoadingText,
  BackgroundElements,
  PokeBallBg,
} from './styles/CityStyles';
// Importa componenti
import PlayerSelection from './components/PlayerSelection';
import CityGame from './components/CityGame';
import ResultScreen from './components/ResultScreen';
import RemainingCities from './components/RemainingCities'; // Importa il nuovo componente

function City() {
  const navigate = useNavigate();
  const { players, updatePlayerScore } = useGlobalContext();
  const [activePlayer, setActivePlayer] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [usedHints, setUsedHints] = useState([]);
  const [guessInput, setGuessInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPlayerSelect, setShowPlayerSelect] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
      return;
    }

    if (activePlayer && !currentCity) {
      const randomCity =
        POKEMON_CITIES[Math.floor(Math.random() * POKEMON_CITIES.length)];
      setCurrentCity(randomCity);
      setGameStarted(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, [players, navigate, activePlayer, currentCity]);

  const selectPlayer = (player) => {
    setActivePlayer(player);
    setShowPlayerSelect(false);
  };

  const handleBuyHint = (hint) => {
    if (!activePlayer || usedHints.includes(hint.content)) return;

    if (activePlayer.score < hint.cost) {
      alert('Non hai abbastanza punti per questo indizio!');
      return;
    }

    if (hint.type === 'sound') {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(hint.content);
      audioRef.current.volume = 0.6;
      audioRef.current
        .play()
        .catch((e) => console.error("Errore nel riprodurre l'audio:", e));
    }

    const newScore = activePlayer.score - hint.cost;
    updatePlayerScore(activePlayer.id, newScore);
    setActivePlayer({
      ...activePlayer,
      score: newScore,
    });

    setUsedHints([...usedHints, hint.content]);
  };

  // const handleGuess = (guess) => {
  //   if (!currentCity || !guess.trim()) return;

  //   const normalizedGuess = guess.trim().toLowerCase();
  //   const normalizedAnswer = currentCity.name.toLowerCase();

  //   const correct = normalizedGuess === normalizedAnswer;
  //   setIsCorrect(correct);
  //   setShowResult(true);

  //   if (correct && activePlayer) {
  //     const newScore = activePlayer.score + currentCity.score;
  //     updatePlayerScore(activePlayer.id, newScore);
  //     setActivePlayer({
  //       ...activePlayer,
  //       score: newScore,
  //     });
  //   }

  //   if (audioRef.current) {
  //     audioRef.current.pause();
  //   }
  // };

  const handleReturn = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    navigate('/game');
  };

  const playAgain = () => {
    setShowPlayerSelect(true);
    setActivePlayer(null);
    setCurrentCity(null);
    setUsedHints([]);
    setGuessInput('');
    setShowResult(false);
    setIsCorrect(false);
    setGameStarted(false);
  };

  const isHintUsed = (hintContent) => {
    return usedHints.includes(hintContent);
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const [guessedCities, setGuessedCities] = useState(() => {
    const saved = localStorage.getItem('cityGameGuessedCities');
    return saved ? JSON.parse(saved) : [];
  });

  // Aggiungi questo effetto per salvare le città indovinate nel localStorage
  useEffect(() => {
    localStorage.setItem(
      'cityGameGuessedCities',
      JSON.stringify(guessedCities)
    );
  }, [guessedCities]);

  // Modifica la funzione handleGuess per aggiungere la città agli indovinati
  const handleGuess = (guess) => {
    if (!currentCity || !guess.trim()) return;

    const normalizedGuess = guess.trim().toLowerCase();
    const normalizedAnswer = currentCity.name.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct && activePlayer) {
      // Aggiungi la città agli indovinati se non c'è già
      if (!guessedCities.includes(currentCity.id)) {
        setGuessedCities([...guessedCities, currentCity.id]);
      }

      const newScore = activePlayer.score + currentCity.score;
      updatePlayerScore(activePlayer.id, newScore);
      setActivePlayer({
        ...activePlayer,
        score: newScore,
      });
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  // Aggiungi una funzione per resettare le città indovinate
  const resetGuessedCities = () => {
    setGuessedCities([]);
    localStorage.removeItem('cityGameGuessedCities');
  };

  // Modifica la selezione della città per evitare di scegliere città già indovinate
  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
      return;
    }

    if (activePlayer && !currentCity) {
      // Filtra solo le città non indovinate
      const remainingCities = POKEMON_CITIES.filter(
        (city) => !guessedCities.includes(city.id)
      );

      if (remainingCities.length === 0) {
        // Se tutte le città sono state indovinate, scegli una città casuale
        const randomCity =
          POKEMON_CITIES[Math.floor(Math.random() * POKEMON_CITIES.length)];
        setCurrentCity(randomCity);
      } else {
        // Altrimenti scegli una città casuale tra quelle non indovinate
        const randomCity =
          remainingCities[Math.floor(Math.random() * remainingCities.length)];
        setCurrentCity(randomCity);
      }
      setGameStarted(true);
    }

    // ... resto del codice ...
  }, [players, navigate, activePlayer, currentCity, guessedCities]);

  return (
    <GameContainer>
      <BackButton to='/game'>
        <FaArrowLeft /> Torna ai giochi
      </BackButton>

      <PageTitle>Indovina la Città Pokémon</PageTitle>
      <GameInstructions>
        Guarda l'immagine e indovina di quale città Pokémon si tratta
      </GameInstructions>
      {showPlayerSelect && (
        <RemainingCities
          guessedCities={guessedCities}
          onReset={resetGuessedCities}
        />
      )}
      {showPlayerSelect ? (
        <PlayerSelection
          players={players}
          onSelectPlayer={selectPlayer}
        />
      ) : gameStarted ? (
        showResult ? (
          <ResultScreen
            isCorrect={isCorrect}
            cityName={currentCity.name}
            points={currentCity.score}
            onPlayAgain={playAgain}
            onReturn={handleReturn}
          />
        ) : (
          <CityGame
            activePlayer={activePlayer}
            currentCity={currentCity}
            usedHints={usedHints}
            isHintUsed={isHintUsed}
            onBuyHint={handleBuyHint}
            onGuess={handleGuess}
            onPlaySound={playSound}
          />
        )
      ) : (
        <LoadingText>Caricamento...</LoadingText>
      )}

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default City;
