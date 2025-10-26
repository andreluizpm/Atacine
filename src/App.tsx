import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Objectives from './pages/Objectives';
import Donations from './pages/Donations';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const titles = {
      home: 'Atacine - Criança em Cena | Estúdio de Cinema Social',
      objectives: 'Objetivos e Valores | Atacine - Criança em Cena',
      donations: 'Doações | Atacine - Criança em Cena',
      contact: 'Contato | Atacine - Criança em Cena',
    };

    document.title = titles[currentPage as keyof typeof titles];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage}/>;
      case 'objectives':
        return <Objectives onNavigate={setCurrentPage}/>;
      case 'donations':
        return <Donations onNavigate={setCurrentPage}/>;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage}/>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="pt-20 flex-1">
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage}/>
    </div>
  );
}

export default App;
