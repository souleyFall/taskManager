import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './assets/main.css';

function App(){
  // Composant racine de l'application
  return (
    <Router>
      <div className="app">
        <main className="container">
          {/* 🧭 Définition des routes de l'app */}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;