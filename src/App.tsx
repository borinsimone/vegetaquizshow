import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Game from './pages/game/Game';
import Category from './pages/game/domande/Category';
import Wheel from './pages/game/wheel/Wheel';
import ImageGame from './pages/game/image/ImageGame';
import { useEffect, useState, createContext, useContext, useRef } from 'react';
import styled from 'styled-components';
import {
  FaVolumeUp,
  FaVolumeMute,
  FaVolumeDown,
  FaMousePointer,
} from 'react-icons/fa';
import GuessPage from './pages/game/image/GuessPage';

import Sound from './pages/game/wheel/Sound';
import Fusion from './pages/game/wheel/Fusion';
import City from './pages/game/city/City';
// import audiogamedashboard from './assets/audio/Pokemon Mystery Dungeon Red_Blue Rescue Team Full OST [6EHwdMQj3i4_00_00_00_00_05_00_part].mp3';
// import audiolanding from './assets/audio/003 - Welcome to the World of Pokémon!.mp3';
const audiogamedashboard = new URL(
  './assets/audio/Pokemon Mystery Dungeon Red_Blue Rescue Team Full OST [6EHwdMQj3i4_00_00_00_00_05_00_part].mp3',
  import.meta.url
).href;
const audiolanding = new URL(
  './assets/audio/welcome-pokemon.mp3',
  import.meta.url
).href;
const imageGameAudio = new URL('./assets/audio/Contest.mp3', import.meta.url)
  .href;
const imageGuessAudio = new URL(
  './assets/audio/image_guess.mp3',
  import.meta.url
).href;
const clickSound = new URL('./assets/audio/abtn.mp3', import.meta.url).href;

// Define the audio mapping for different routes
const AUDIO_MAPPING = {
  '/': audiolanding,
  '/game': audiogamedashboard,

  // Add more route-to-audio mappings here in the future
  // '/game/wheel': wheelAudio,
  '/game/image': imageGameAudio,
  '/game/image/guess': imageGuessAudio,
  // etc.
};

// Create an audio context for the entire app
const AudioContext = createContext({
  isPlaying: false,
  volume: 0.5,
  toggleAudio: () => {},
  changeVolume: (value: number) => {},
  currentAudioPath: '',
});

// Hook to use the audio context
export const useAudio = () => useContext(AudioContext);

// Create a separate component for audio handling
/**
 * A component that manages audio playback and volume control throughout the application.
 *
 * @component
 * @returns {JSX.Element} Audio controller component with volume slider and play/pause button
 *
 * @example
 * ```tsx
 * <AudioController />
 * ```
 *
 * @description
 * This component handles:
 * - Audio playback control (play/pause)
 * - Volume adjustment with a slider
 * - Route-based audio source switching
 * - Persistent audio preferences using localStorage
 * - Volume icon display based on current volume level
 *
 * @state
 * - audio: Audio instance for playing sounds
 * - isPlaying: Boolean indicating if audio is currently playing
 * - volume: Number between 0 and 1 representing audio volume
 * - showVolumeSlider: Boolean controlling volume slider visibility
 * - currentAudioPath: String storing the current audio file path
 *
 * @context
 * Provides AudioContext with:
 * - isPlaying: Current playback state
 * - volume: Current volume level
 * - toggleAudio: Function to toggle audio playback
 * - changeVolume: Function to adjust volume
 * - currentAudioPath: Current audio source path
 */
const AudioController = () => {
  const { pathname } = useLocation();
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [currentAudioPath, setCurrentAudioPath] = useState('');
  const controlsRef = useRef(null);

  // Nuovo stato per il controllo del click sound
  const [isClickSoundEnabled, setIsClickSoundEnabled] = useState(true);
  const clickAudioRef = useRef(new Audio(clickSound));

  // Configura un volume fisso per il suono di click
  useEffect(() => {
    clickAudioRef.current.volume = 0.2; // Volume fisso per il click sound

    // Carica la preferenza dell'utente per il click sound
    const clickSoundEnabled = localStorage.getItem(
      'pokemonQuizClickSoundEnabled'
    );
    if (clickSoundEnabled !== null) {
      setIsClickSoundEnabled(clickSoundEnabled === 'true');
    }
  }, []);

  // Funzione per attivare/disattivare il suono di click
  const toggleClickSound = () => {
    const newValue = !isClickSoundEnabled;
    setIsClickSoundEnabled(newValue);
    localStorage.setItem('pokemonQuizClickSoundEnabled', String(newValue));
  };

  // Funzione per riprodurre il suono di click
  const playClickSound = () => {
    // Utilizziamo la clonazione dell'audio per permettere click rapidi multipli
    if (isClickSoundEnabled) {
      const clickAudio = clickAudioRef.current.cloneNode() as HTMLAudioElement;
      clickAudio.volume = 0.1; // Volume fisso indipendente
      clickAudio.play().catch((err) => console.log('Click sound error:', err));
    }
  };

  // Aggiungi event listener per il click
  useEffect(() => {
    const handleClick = () => playClickSound();
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isClickSoundEnabled]); // Dipende solo da isClickSoundEnabled, non più da isPlaying e volume

  // Function to toggle audio playback
  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem('pokemonQuizAudioEnabled', 'false');
    } else {
      audio.volume = volume;
      audio.loop = true;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem('pokemonQuizAudioEnabled', 'true');
        })
        .catch((err) => console.log('Audio playback error:', err));
    }
  };

  // Function to change volume
  const changeVolume = (value: number) => {
    const newVolume = parseFloat(value.toFixed(2));
    setVolume(newVolume);
    audio.volume = newVolume;
    localStorage.setItem('pokemonQuizAudioVolume', newVolume.toString());
  };

  // Function to get the appropriate audio source for the current route
  const getAudioSourceForRoute = (path) => {
    // First try exact match
    if (AUDIO_MAPPING[path]) {
      return AUDIO_MAPPING[path];
    }

    // If no exact match, try matching with a prefix
    // For routes like '/game/categories', '/game/wheel', use the parent route's audio
    for (const route in AUDIO_MAPPING) {
      if (path.startsWith(route) && route !== '/') {
        return AUDIO_MAPPING[route];
      }
    }

    // Default to landing audio if no matching route is found
    return AUDIO_MAPPING['/'];
  };

  // Check user preference from localStorage on mount
  useEffect(() => {
    const audioEnabled =
      localStorage.getItem('pokemonQuizAudioEnabled') === 'true';
    const savedVolume = localStorage.getItem('pokemonQuizAudioVolume');

    if (savedVolume) {
      const parsedVolume = parseFloat(savedVolume);
      setVolume(parsedVolume);
      audio.volume = parsedVolume;
    } else {
      audio.volume = volume;
    }

    if (audioEnabled) {
      setIsPlaying(true);
    }
  }, [audio]);

  // Handle route changes and audio switching
  useEffect(() => {
    const newAudioSource = getAudioSourceForRoute(pathname);

    // Only change the audio source if it's different from the current one
    if (newAudioSource !== currentAudioPath) {
      const wasPlaying = !audio.paused;

      // Save the current position of the audio
      const currentTime = audio.currentTime;

      // Set the new audio source
      audio.src = newAudioSource;
      setCurrentAudioPath(newAudioSource);

      // If it was playing before, start playing the new audio
      if (wasPlaying && isPlaying) {
        audio.play().catch((err) => console.log('Audio playback error:', err));
      }
    } else if (isPlaying) {
      // If same audio source but should be playing, ensure it's playing
      if (audio.paused) {
        audio.play().catch((err) => console.log('Audio playback error:', err));
      }
    }
  }, [pathname, audio, isPlaying, currentAudioPath]);

  // Handle clicks outside of the volume controls to hide the slider
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setShowVolumeSlider(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determine the volume icon based on the current volume level
  const getVolumeIcon = () => {
    if (volume === 0 || !isPlaying) return <FaVolumeMute />;
    if (volume < 0.5) return <FaVolumeDown />;
    return <FaVolumeUp />;
  };

  return (
    <AudioContext.Provider
      value={{ isPlaying, volume, toggleAudio, changeVolume, currentAudioPath }}
    >
      <AudioControls ref={controlsRef}>
        <div className='container'>
          <AudioButton
            onClick={toggleAudio}
            onMouseEnter={() => setShowVolumeSlider(true)}
            title={isPlaying ? 'Disattiva musica' : 'Attiva musica'}
          >
            {getVolumeIcon()}
          </AudioButton>

          <VolumeSliderContainer $visible={showVolumeSlider}>
            <VolumeSlider
              type='range'
              min='0'
              max='0.3'
              step='0.01'
              value={volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
            />
          </VolumeSliderContainer>
        </div>

        {/* Nuovo pulsante per attivare/disattivare il click sound */}
        <ClickSoundButton
          onClick={toggleClickSound}
          $active={isClickSoundEnabled}
          title={
            isClickSoundEnabled ? 'Disattiva suono click' : 'Attiva suono click'
          }
        >
          <FaMousePointer />
        </ClickSoundButton>
      </AudioControls>
    </AudioContext.Provider>
  );
};

const App = () => {
  return (
    <Router basename='/vegetaquizshow'>
      <AudioController />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/game'
          element={<Game />}
        />
        <Route
          path='/game/categories'
          element={<Category />}
        />
        <Route
          path='/game/wheel'
          element={<Wheel />}
        />
        <Route
          path='/game/wheel/fusion'
          element={<Fusion />}
        />
        <Route
          path='/game/wheel/sound'
          element={<Sound />}
        />
        <Route
          path='/game/image'
          element={<ImageGame />}
        />
        <Route
          path='/game/image/guess'
          element={<GuessPage />}
        />
        <Route
          path='/game/city'
          element={<City />}
        />
      </Routes>
    </Router>
  );
};

export default App;

// Styled Components (unchanged)
const AudioControls = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  z-index: 1000;
  .container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const AudioButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(19, 42, 87, 0.8);
  color: #ffde00;
  border: 2px solid #ffde00;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface VolumeSliderProps {
  $visible: boolean;
}

const VolumeSliderContainer = styled.div<VolumeSliderProps>`
  left: 45px;
  width: 100px;
  height: 30px;
  background: rgba(19, 42, 87, 0.9);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.$visible ? 'translateX(0)' : 'translateX(-20px)'};
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid rgba(19, 42, 87, 0.9);
  }
`;

const VolumeSlider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffde00;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffde00;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    border: none;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }
`;

// Aggiungi questo nuovo styled component per il pulsante del click sound
interface ClickSoundButtonProps {
  $active: boolean;
}

const ClickSoundButton = styled.button<ClickSoundButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? 'rgba(19, 42, 87, 0.8)' : 'rgba(70, 70, 70, 0.8)'};
  color: ${(props) => (props.$active ? '#ffde00' : '#999')};
  border: 2px solid ${(props) => (props.$active ? '#ffde00' : '#999')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;
