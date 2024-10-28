import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkillsPage from './Pages/SkillsPage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/recommendation" element={<Recommendations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
