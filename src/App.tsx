import React from 'react';
import './App.css';

interface defaultProps {
  name?: string
}

function App(props: defaultProps) {
  return (
    <div className="App">
      <header className="App-header">
        { props.name }
      </header>
    </div>
  );
}

export default App;
