import React, { useState, Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/aboutSection/AboutSection'));
const Skills = lazy(() => import('./components/skillsSection/Skills'));
const Projects = lazy(() => import('./components/projectsSection/Projects'));
const ContactMe = lazy(() => import('./components/contactSection/ContactMe'));
const AboutProject = lazy(() => import('./components/projectsSection/AboutProject'));

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    // Suspense will show the fallback until lazy-loaded components are rendered.
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects onProjectClick={handleOpenProject} />
        <ContactMe />
        <AboutProject project={selectedProject} onClose={handleCloseProject} />
      </main>
    </Suspense>
  );
}

export default App;
