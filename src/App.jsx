import { useEffect } from 'react';

import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <h2>Telegram Bot App</h2>
      <button onClick={() => tg.close()}>Close</button>
    </>
  );
}

export default App;
