import React, { useState, Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/Home'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contacme = lazy(() => import('./components/Contacme'));
const AboutProject = lazy(() => import('./components/AboutProject'));

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    document.getElementById('about-project').style.display = 'flex';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.getElementById('about-project').style.display = 'none';
  };

  return (
    // Suspense will show the fallback until lazy-loaded components are rendered.
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Home />
      <Skills />
      <Projects onProjectClick={handleOpenProject} />
      <Contacme />
      <AboutProject project={selectedProject} onClose={handleCloseProject} />
    </Suspense>
  );
}

export default App;
