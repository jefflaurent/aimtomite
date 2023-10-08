import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/games" element={<GamePage/>} />
        </Routes>
      </Router>
    );
}

export default App;
