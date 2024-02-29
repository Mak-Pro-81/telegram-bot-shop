import { useEffect } from 'react';

import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const toggleMainButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <>
      <h2>Telegram Bot App</h2>
      <button onClick={() => tg.close()}>Close</button>
      <button>Main Button</button>
    </>
  );
}

export default App;
