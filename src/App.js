import { useEffect, useMemo, useState } from 'react';
import './App.css';
import alarm from './alarm.mp3';

function App() {

  const [playing, setPlaying] = useState(false);
  const audio = useMemo(() => new Audio(alarm), []);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  })

  return (
    <div className="App">
      <button onClick={() => setPlaying(!playing)}>Play/Pause</button>
    </div>
  );
}

export default App;
