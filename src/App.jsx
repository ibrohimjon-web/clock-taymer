import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sekundomer from './pages/Sekundomer/Sekundomer';
import Soat from './pages/Soat/Soat';
import Taymer from './pages/Taymer/Taymer';
import { useEffect, useState } from 'react';

const App = () => {
  const [thema, setThema] = useState('dark');

  const toggleThema = () => {
    setThema((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = thema;
  }, [thema]);

  return (
    <>
      <header>
        <Navbar thema={thema} toggleThema={toggleThema} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Soat />} />
          <Route path='/sekundomer' element={<Sekundomer />} />
          <Route path='/taymer' element={<Taymer />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
