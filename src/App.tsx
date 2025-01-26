import { Routes, Route } from 'react-router-dom';
import './global.css';
import { TvContainer } from './components/tv-container/tv-container';
import { Home } from './screens/home/home';
import { Experience } from './screens/experience/experience';
import { Learning } from './screens/learning/learning';
import { Projects } from './screens/projects/projects';
import { Contact } from './screens/contact/contact';
import { Skills } from './screens/skills/skills';
import { LearningTraining } from './screens/learning-training/learning-training';

function AppContent() {
  return (
    <div className="App scroll">
      <TvContainer>
        <button className="back-button" onClick={() => window.history.back()}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6M9 12H20" stroke="var(--dark-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <section>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/learning-training" element={<LearningTraining />} />
            <Route path="/certifications-projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </TvContainer>
    </div>
  );
}

function App() {
  return (
    <AppContent />

  );
}

export default App;
