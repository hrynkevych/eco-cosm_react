//work on TypeScript implementation

import './App.scss';
import { Header } from './components/header/Header';
import { GiftsOfNature } from './components/gifts-of-nature/GiftsOfNature';

function App() {
  return (
    <div className="page__body">
      <Header />
      <main className="main">
      <GiftsOfNature />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
