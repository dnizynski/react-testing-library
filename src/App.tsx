import React from 'react';
import './App.css';
import LoadingButton from './components/LoadingButton';

function App() {
  const onClick = () =>
    new Promise((resolve) => setTimeout(() => resolve(undefined), 1000));

  return (
    <div className="App">
      <header className="App-header">
        <LoadingButton text="Click me" onClick={onClick} />
      </header>
    </div>
  );
}

export default App;
