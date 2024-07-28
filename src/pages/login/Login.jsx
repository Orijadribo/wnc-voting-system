import React, { useContext, useState } from 'react';
import { db, auth } from '../../api/firebaseConfig';
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { BiSolidHide } from 'react-icons/bi';
import { BiShow } from 'react-icons/bi';
import LoginModal from './LoginModal';
import { AuthContext } from '../../context/AuthContext';

const Login = ({ firstName, lastName, setUserDocId, user }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [labelClass, setLabelClass] = useState({
    username: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
    password: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
  });
  const [showModal, setShowModal] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const votesCollectionRef = collection(db, 'votes');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    //Incase user is admin
    if (user === 'admin') {
      setIsChecked(true);

      // Fetch the email associated with the username from Firestore
      const adminsRef = collection(db, 'admins');
      const q = query(adminsRef, where('userName', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Invalid username or password');
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const email = userDoc.data().email;

      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //Signed in
          const user = userCredential.user;
          dispatch({ type: 'ADMIN_LOGIN', payload: user });

          //Navigate to admin panel upon successfull login
          navigate('/adminpanel');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      try {
        // Fetch the email associated with the username from Firestore
        const paidUpMembersRef = collection(db, 'paidUpMembers');
        const q = query(
          paidUpMembersRef,
          where('userName', '==', username),
          where('firstName', '==', firstName),
          where('lastName', '==', lastName)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError('Invalid username or password');
          return;
        }

        const userDoc = querySnapshot.docs[0];
        const email = userDoc.data().email;

        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            //Signed in
            const user = userCredential.user;
            dispatch({ type: 'LOGIN', payload: user });

            //Navigate to admin panel upon successfull login
            navigate('/vote');
          })
          .catch((error) => {
            console.log(error);
          });

        // Check if a votes document already exists for the user
        const votesQuery = query(
          votesCollectionRef,
          where('firstName', '==', firstName),
          where('lastName', '==', lastName)
        );
        const votesSnapshot = await getDocs(votesQuery);

        let userDocId;

        if (votesSnapshot.empty) {
          // Create a new votes document if none exists
          const votesDoc = await addDoc(votesCollectionRef, {
            firstName: firstName,
            lastName: lastName,
            startTime: serverTimestamp(),
            endTime: '',
            votes: {},
          });
          userDocId = votesDoc.id;
        } else {
          // Use the existing document
          userDocId = votesSnapshot.docs[0].id;
        }

        setUserDocId(userDocId);

        if (isChecked) {
          // Clear form fields
          setUsername('');
          setPassword('');

          // Navigate to section one
          navigate('/vote');
        } else {
          alert('Please read and accept the terms and conditions');
        }
      } catch (err) {
        setError('Invalid username or password');
      }
    }
  };

  // Update the class name when the input is focused or blurred
  const handleInputFocus = (label) => {
    setLabelClass((prevClasses) => ({
      ...prevClasses,
      [label]:
        'absolute -top-3 left-2 bg-white text-[12px] py-[0.15rem] px-2 rounded-sm text-[#b2b2b2]',
    }));
  };

  // Revert the class name only if the input is empty
  const handleInputBlur = (label, value) => {
    if (value.trim() === '') {
      setLabelClass((prevClasses) => ({
        ...prevClasses,
        [label]: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
      }));
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  //Terms ans conditions
  const handleTerms = () => {
    setShowModal(true);
  };

  return (
    <div className='flex items-center justify-center w-screen m-auto h-screen bg-[#F4F6F9]'>
      <div className='flex flex-col items-center justify-center rounded-lg w-[350px] md:w-[400px] bg-white p-10  shadow-xl'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='py-5 font-light text-center text-[32px] w-full'>
            Login
          </h2>
        </div>
        {/* Player details */}
        <form
          onSubmit={handleLogin}
          className='flex flex-col gap-5 w-full mb-5'
        >
          <div className='flex flex-col gap-2 relative'>
            <label htmlFor='username' className={labelClass.username}>
              Username
            </label>
            <input
              className='border p-2 rounded-md'
              name='username'
              id='username'
              type='text'
              value={username}
              onFocus={() => handleInputFocus('username')}
              onBlur={() => handleInputBlur('username', username)}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete='on'
            />
          </div>
          <div className='flex flex-col gap-2 relative'>
            <label htmlFor='password' className={labelClass.password}>
              Password
            </label>
            <div
              onClick={togglePasswordVisibility}
              className='absolute flex top-3 right-3 cursor-pointer'
            >
              <div className={`${passwordVisible ? 'block' : 'hidden'}`}>
                <BiSolidHide className='text-xl' />
              </div>
              <div className={`${passwordVisible ? 'hidden' : 'block'}`}>
                <BiShow className='text-xl' />
              </div>
            </div>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name='password'
              id='password'
              className='border p-2 rounded-md'
              value={password}
              onFocus={() => handleInputFocus('password')}
              onBlur={() => handleInputBlur('password', password)}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete='current-password'
            />
          </div>{' '}
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          {/* Terms and conditions */}
          {user !== 'admin' && (
            <div
              onClick={handleTerms}
              className='text-sm capitalize cursor-pointer'
            >
              terms and conditions
            </div>
          )}
          <div className='flex gap-4 items-center justify-between w-full pb-'>
            <a className='text-[12px] underline' href=''>
              Forgot your password?
            </a>
            <div className='flex items-center justify-center'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                value='Remember me'
              />
              <label className='pl-2 text-[12px]' htmlFor='remember'>
                Remember me?
              </label>
            </div>
          </div>
          <button
            type='submit'
            className='border py-2 px-5 mt-5 rounded-lg bg-green-50 hover:bg-green-200 text-lg'
          >
            Login
          </button>
        </form>
      </div>
      <div className='z-40'>
        {showModal && (
          <LoginModal
            setShowModal={setShowModal}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
