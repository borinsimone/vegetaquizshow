import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

// Definisci l'interfaccia Player
export interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

// Aggiorna l'interfaccia GlobalContextState
interface GlobalContextState {
  score: number;
  setScore: (score: number) => void;
  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;
  isGameActive: boolean;
  setIsGameActive: (active: boolean) => void;
  // Aggiungi la gestione dei players
  players: Player[];
  addPlayer: (player: Omit<Player, 'id'>) => void;
  removePlayer: (id: string) => void;
  updatePlayerScore: (id: string, newScore: number) => void;
  activePlayer: Player | null;
  setActivePlayer: (player: Player | null) => void;
}

// Crea il context con un valore iniziale undefined
const GlobalContext = createContext<GlobalContextState | undefined>(undefined);

// Crea il provider component
interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  // Stati esistenti
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  // Nuovi stati per la gestione dei players
  const [players, setPlayers] = useState<Player[]>(() => {
    const savedPlayers = localStorage.getItem('quizPlayers');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  const [activePlayer, setActivePlayer] = useState<Player | null>(null);

  // Carica i giocatori dal localStorage all'avvio
  useEffect(() => {
    const savedPlayers = localStorage.getItem('quizPlayers');
    if (savedPlayers) {
      const parsedPlayers = JSON.parse(savedPlayers);
      setPlayers(parsedPlayers);
      // Imposta il primo giocatore come attivo se esiste
      if (parsedPlayers.length > 0) {
        setActivePlayer(parsedPlayers[0]);
      }
    }
  }, []);

  // Salva i giocatori nel localStorage quando cambiano
  useEffect(() => {
    localStorage.setItem('quizPlayers', JSON.stringify(players));
  }, [players]);

  // Funzioni per gestire i players
  const addPlayer = (playerData: Omit<Player, 'id'>) => {
    const newPlayer: Player = {
      ...playerData,
      id: Date.now().toString(),
    };

    setPlayers([...players, newPlayer]);

    // Se è il primo giocatore, impostalo come attivo
    if (players.length === 0) {
      setActivePlayer(newPlayer);
    }
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter((player) => player.id !== id));

    // Se il giocatore attivo viene rimosso, imposta il primo giocatore come attivo
    if (activePlayer && activePlayer.id === id) {
      const remainingPlayers = players.filter((player) => player.id !== id);
      setActivePlayer(remainingPlayers.length > 0 ? remainingPlayers[0] : null);
    }
  };

  const updatePlayerScore = (id: string, newScore: number) => {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, score: newScore } : player
      )
    );

    // Aggiorna anche il giocatore attivo se è quello modificato
    if (activePlayer && activePlayer.id === id) {
      setActivePlayer({ ...activePlayer, score: newScore });
    }
  };

  const value = {
    score,
    setScore,
    currentQuestion,
    setCurrentQuestion,
    isGameActive,
    setIsGameActive,
    // Aggiungi le nuove funzionalità
    players,
    addPlayer,
    removePlayer,
    updatePlayerScore,
    activePlayer,
    setActivePlayer,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

// Hook personalizzato per usare il context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;
