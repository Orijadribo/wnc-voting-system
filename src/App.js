import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Section from './pages/sections/Section';
import Finish from './pages/finish/Finish';
import Verification from './pages/login/Verification';
import AdminPanel from './pages/admin/AdminPanel';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userDocId, setUserDocId] = useState(null);
  const [user, setUser] = useState('');

  return (
    <div className='font-mulish'>
      <Router>
        <Routes>
          <Route
            index
            element={
              <Verification
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                setUser={setUser}
              />
            }
          />
          <Route
            path='/login'
            element={
              <Login
                firstName={firstName}
                lastName={lastName}
                setUserDocId={setUserDocId}
                user={user}
              />
            }
          />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route
            path='/section_one'
            element={
              <Section
                startArticle={1}
                endArticle={3}
                section={'one'}
                nextSection={'two'}
                userDocId={userDocId}
                firstName={firstName}
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
                // Change back to three
                nextSection={'eight'}
                userDocId={userDocId}
                firstName={firstName}
              />
            }
          />
          {/* <Route
            path='/section_three'
            element={
              <Section
                startArticle={7}
                endArticle={9}
                previousSection={'two'}
                section={'three'}
                nextSection={'four'}
                userDocId={userDocId}
                firstName={firstName}
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
                userDocId={userDocId}
                firstName={firstName}
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
                userDocId={userDocId}
                firstName={firstName}
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
                userDocId={userDocId}
                firstName={firstName}
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
                userDocId={userDocId}
                firstName={firstName}
              />
            }
          /> */}
          <Route
            path='/section_eight'
            element={
              <Section
                startArticle={22}
                endArticle={24}
                // change back to seven
                previousSection={'two'}
                section={'eight'}
                userDocId={userDocId}
                firstName={firstName}
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
