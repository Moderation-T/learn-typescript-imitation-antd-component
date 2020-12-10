import React from 'react';
import Hello from './components/Hello'
import useMousePosition from './hooks/useMousePosition';

function App() {
  const position = useMousePosition()
  return (
    <div className="App">
      <div>
        app
        x:{position.x}
        y:{position.y}
      </div>
      <Hello message='hello everybody'></Hello>
    </div>
  );
}

export default App;
