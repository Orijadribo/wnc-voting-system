import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Section from './pages/sections/Section';
import Finish from './pages/finish/Finish';
import Verification from './pages/login/Verification';
import AdminPanel from './pages/admin/AdminPanel';
import VotesYesOrNo from './pages/sections/VotesYesOrNo';
import { AuthContext } from './context/AuthContext';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userDocId, setUserDocId] = useState(null);
  const [user, setUser] = useState('');

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />;
  };

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
          <Route
            path='/adminpanel'
            element={
              <RequireAuth>
                <AdminPanel />
              </RequireAuth>
            }
          />
          <Route
            path='/vote'
            element={
              <RequireAuth>
                <VotesYesOrNo userDocId={userDocId} firstName={firstName} />
              </RequireAuth>
            }
          />
          <Route
            path='/section_one'
            element={
              <RequireAuth>
                <Section
                  startArticle={1}
                  endArticle={3}
                  section={'one'}
                  nextSection={'two'}
                  userDocId={userDocId}
                  firstName={firstName}
                />
              </RequireAuth>
            }
          />
          <Route
            path='/section_two'
            element={
              <RequireAuth>
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
              </RequireAuth>
            }
          />
          {/* <Route
            path='/section_three'
            element={
            <RequireAuth>                
            <Section
              startArticle={7}
              endArticle={9}
              previousSection={'two'}
              section={'three'}
              nextSection={'four'}
              userDocId={userDocId}
              firstName={firstName}
            />
              </RequireAuth>
            }
          />
          <Route
            path='/section_four'
            element={
            <RequireAuth>                
            <Section
              startArticle={10}
              endArticle={12}
              previousSection={'three'}
              section={'four'}
              nextSection={'five'}
              userDocId={userDocId}
              firstName={firstName}
            />
              </RequireAuth>
            }
          />
          <Route
            path='/section_five'
            element={
            <RequireAuth>
                                <Section
                  startArticle={13}
                  endArticle={15}
                  previousSection={'four'}
                  section={'five'}
                  nextSection={'six'}
                  userDocId={userDocId}
                  firstName={firstName}
                />
              </RequireAuth>
            }
          />
          <Route
            path='/section_six'
            element={
            <RequireAuth>
            <Section
              startArticle={16}
              endArticle={18}
              previousSection={'five'}
              section={'six'}
              nextSection={'seven'}
              userDocId={userDocId}
              firstName={firstName}
            />
              </RequireAuth>
            }
          />
          <Route
            path='/section_seven'
            element={
            <RequireAuth>
            <Section
              startArticle={19}
              endArticle={21}
              previousSection={'six'}
              section={'seven'}
              nextSection={'eight'}
              userDocId={userDocId}
              firstName={firstName}
            />
              </RequireAuth>
            }
          /> */}
          <Route
            path='/section_eight'
            element={
              <RequireAuth>
                <Section
                  startArticle={22}
                  endArticle={24}
                  // change back to seven
                  previousSection={'two'}
                  section={'eight'}
                  userDocId={userDocId}
                  firstName={firstName}
                />
              </RequireAuth>
            }
          />
          <Route path='/complete' element={<Finish />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
