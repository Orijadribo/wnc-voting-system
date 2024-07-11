import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Section from './sections/Section';

function App() {
  return (
    <div className='font-mulish'>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/section' element={<Section />} />
          {/* <Route path='/section_two' element={<AdminPanel />} />
        <Route path='/section_three' element={<AdminPanel />} />
        <Route path='/section_four' element={<AdminPanel />} />
        <Route path='/section_five' element={<AdminPanel />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
