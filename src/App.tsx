import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './global.css';
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
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.DEV ? '' : '/pixle-portfolio';
  
  return (    
      <BrowserRouter basename={basename}>
        <AppContent />        
      </BrowserRouter>
  );
}

export default App;
