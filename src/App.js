import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Section from './pages/sections/Section';
import Finish from './pages/finish/Finish';
import Verification from './pages/login/Verification';

function App() {
  return (
    <div className='font-mulish'>
      <Router>
        <Routes>
          <Route index element={<Verification />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/section_one'
            element={
              <Section
                startArticle={1}
                endArticle={3}
                section={'one'}
                nextSection={'two'}
              />
            }
          />
          <Route
            path='/section_two'
            element={
              <Section
                startArticle={4}
                endArticle={6}
                previousSection={'one'}
                section={'two'}
                nextSection={'three'}
              />
            }
          />
          <Route
            path='/section_three'
            element={
              <Section
                startArticle={7}
                endArticle={9}
                previousSection={'two'}
                section={'three'}
                nextSection={'four'}
              />
            }
          />
          <Route
            path='/section_four'
            element={
              <Section
                startArticle={10}
                endArticle={12}
                previousSection={'three'}
                section={'four'}
                nextSection={'five'}
              />
            }
          />
          <Route
            path='/section_five'
            element={
              <Section
                startArticle={13}
                endArticle={15}
                previousSection={'four'}
                section={'five'}
                nextSection={'six'}
              />
            }
          />
          <Route
            path='/section_six'
            element={
              <Section
                startArticle={16}
                endArticle={18}
                previousSection={'five'}
                section={'six'}
                nextSection={'seven'}
              />
            }
          />
          <Route
            path='/section_seven'
            element={
              <Section
                startArticle={19}
                endArticle={21}
                previousSection={'six'}
                section={'seven'}
                nextSection={'eight'}
              />
            }
          />
          <Route
            path='/section_eight'
            element={
              <Section
                startArticle={22}
                endArticle={24}
                previousSection={'seven'}
                section={'eight'}
              />
            }
          />
          <Route path='/complete' element={<Finish />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
