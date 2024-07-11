import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Section from './sections/Section';

function App() {

  const sections = [
    { path: '/', name: 'login', element: <Login /> }, // login as index
    { path: '/section_one', name: 'section_one', element: <Section /> },
    { path: '/section_two', name: 'section_two', element: <Section /> },
    { path: '/section_three', name: 'section_three', element: <Section /> },
    { path: '/section_four', name: 'section_four', element: <Section /> },
    { path: '/section_five', name: 'section_five', element: <Section /> },
    { path: '/section_six', name: 'section_six', element: <Section /> },
    { path: '/section_seven', name: 'section_seven', element: <Section /> },
    { path: '/section_eight', name: 'section_eight', element: <Section /> },
  ];

  return (
    <div className='font-mulish'>
      <Router>
        <Routes>
          {sections.map((section, index) => (
            <Route key={index} path={section.path} element={section.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
