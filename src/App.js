import { useState } from 'react';
import './index.scss';

function App() {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    const plus = counter + 1;
    setCounter(plus);
  }

  const handleMinus = () => {
    const minus = counter - 1;
    setCounter(minus);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button className="minus" onClick={handleMinus}>- Минус</button>
        <button className="plus" onClick={handlePlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
