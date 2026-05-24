import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header, Footer } from './components';
import { Landing, Contact } from './pages';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import './styles/global.css';

const HomePage = () => (
  <>
    <Landing />
    <Services />
    <Portfolio />
    <Contact />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    document.querySelector(location.hash)?.scrollIntoView();
  }, [location]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
