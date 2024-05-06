// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar navigation */}
        <div className="bg-gray-800 text-white w-96 p-4 place-content-center">
          <ul className="space-y-2">
            <li><Link to="/darkyrobin" className="block p-5 text-3xl hover:bg-gray-600 transition-colors duration-300">Home</Link></li>
            <li><Link to="/projects" className="block p-5 text-3xl hover:bg-gray-600 transition-colors duration-300">Projects</Link></li>
            <li><Link to="/about" className="block p-5 text-3xl hover:bg-gray-600 transition-colors duration-300">About Me</Link></li>
            <li><Link to="/contact" className="block p-5 text-3xl hover:bg-gray-600 transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>
        
        {/* Content area */}
        <div className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/darkyrobin" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
