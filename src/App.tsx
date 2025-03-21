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
import { FaVolumeUp, FaVolumeMute, FaVolumeDown } from 'react-icons/fa';
import audiogamedashboard from './assets/audio/Pokemon Mystery Dungeon Red_Blue Rescue Team Full OST [6EHwdMQj3i4_00_00_00_00_05_00_part].mp3';
import audiolanding from './assets/audio/003 - Welcome to the World of Pokémon!.mp3';

// Define the audio mapping for different routes
const AUDIO_MAPPING = {
  '/': audiolanding,
  '/game': audiogamedashboard,
  // Add more route-to-audio mappings here in the future
  // '/game/wheel': wheelAudio,
  // '/game/image': imageAudio,
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
const AudioController = () => {
  const { pathname } = useLocation();
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [currentAudioPath, setCurrentAudioPath] = useState('');
  const controlsRef = useRef(null);

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
        <AudioButton
          onClick={toggleAudio}
          onMouseEnter={() => setShowVolumeSlider(true)}
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
      </AudioControls>
    </AudioContext.Provider>
  );
};

const App = () => {
  return (
    <Router>
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
          path='/game/image'
          element={<ImageGame />}
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
  align-items: center;
  z-index: 1000;
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
  position: absolute;
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
