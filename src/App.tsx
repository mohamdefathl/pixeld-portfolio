import { Routes, Route } from 'react-router-dom';
import './App.css';
import { TypingAnimation } from './components/typing-text/typing-text';
import { TvContainer } from './components/tv-container/tv-container';
import { Home } from './screens/home/home';
import { Experience } from './screens/experience/experience';
import { Learning } from './screens/learning/learning';
import { Projects } from './screens/projects/projects';
import { Contact } from './screens/contact/contact';

function AppContent() {        
  return (
    <div className="App">
      <TvContainer>
        <section>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/learning-training" element={<Learning />} />
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
