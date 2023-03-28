import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Dietry from './components/dietry-page/Dietry';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dietry' element={<Dietry />} />
      </Routes>
    </div>
  );
}

export default App;
