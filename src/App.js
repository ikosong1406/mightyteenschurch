import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../src/components/layout/layout';
import Home from '../src/pages/home/home';
import About from '../src/pages/about/about';
import Events from '../src/pages/events/events';
import Contact from '../src/pages/contact/contact';
import Resources from '../src/pages/resources/resources';
import Partnership from '../src/pages/partnership/partnership';
import Dashboard from '../src/components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
