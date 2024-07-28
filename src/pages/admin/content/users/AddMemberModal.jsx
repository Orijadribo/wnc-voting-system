import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../../api/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AddMemberModal = ({ setIsVisible }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [labelClass, setLabelClass] = useState({
    firstName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
    lastName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
    userName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
    password: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
  });

  //Code to create username and email based on the first and last name
  useEffect(() => {
    if (firstName || lastName) {
      const newEmail = `${firstName}.${lastName}@wnc.com`.toLowerCase();
      const newUsername = `${firstName}.${lastName}`.toLowerCase();

      handleInputFocus('userName');
      handleInputBlur('userName', userName);

      handleInputFocus('email');
      handleInputBlur('email', email);

      setEmail(newEmail);
      setUserName(newUsername);
    } else {
      setEmail('');
      setUserName('');
    }
  }, [firstName, lastName]);

  const closeUserAddModal = () => {
    setIsVisible(false);
  };

  //Function to handle one member add
  const handleMemberAdd = async (e) => {
    e.preventDefault();

    try {
      //Add member to the firestore
      await setDoc(doc(db, 'paidUpMembers', userName), {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
      });

      //Create a user / signing up a user using the email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error);
        });

      setFirstName('');
      setLastName('');
      setUserName('');
      setEmail('');
    } catch (err) {
      console.log(err);
    }

    setIsVisible(false);
  };

  //Function to handle multiple member add
  const handleMemberAddAndAnother = async (e) => {
    e.preventDefault();

    try {
      //Add member to the firestore
      await setDoc(doc(db, 'paidUpMembers', userName), {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
      });

      //Create a user / signing up a user using the email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error);
        });

      setFirstName('');
      setLastName('');
      setUserName('');
      setEmail('');
    } catch (err) {
      console.log(err);
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

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-40'>
      <div className='bg-white p-5 md:p-10 w-[90%] lg:w-[50%] rounded-lg flex flex-col gap-5'>
        <div className='flex items-center justify-end '>
          <h2 className='flex-1 text-center font-bold text-xl'>Add Member</h2>
          <div
            className='cursor-pointer hover:bg-red-600 hover:text-white p-1 rounded-md border'
            onClick={closeUserAddModal}
          >
            <IoClose />
          </div>
        </div>
        {/* Player details */}
        <form
          //   onSubmit={handleLogin}
          className='flex flex-col gap-5 w-full'
        >
          <div className='flex flex-col md:flex-row gap-3 justify-between'>
            <div className='flex flex-col flex-1 gap-2 relative'>
              <label htmlFor='firstName' className={labelClass.firstName}>
                First Name
              </label>
              <input
                className='border p-2 rounded-md'
                name='firstName'
                id='firstName'
                type='text'
                value={firstName}
                required
                onFocus={() => handleInputFocus('firstName')}
                onBlur={() => handleInputBlur('firstName', firstName)}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='flex flex-col flex-1 gap-2 relative'>
              <label htmlFor='lastName' className={labelClass.lastName}>
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                className='border p-2 rounded-md'
                value={lastName}
                required
                onFocus={() => handleInputFocus('lastName')}
                onBlur={() => handleInputBlur('lastName', lastName)}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3 justify-between'>
            <div className='flex flex-col flex-1 gap-2 relative'>
              <label htmlFor='userName' className={labelClass.userName}>
                Username
              </label>
              <input
                type='text'
                name='userName'
                id='userName'
                className='border p-2 rounded-md bg-white'
                value={userName}
                required
                onFocus={() => handleInputFocus('userName')}
                onBlur={() => handleInputBlur('userName', userName)}
                // onChange={(e) => setUserName(e.target.value)}
                readOnly
                disabled
              />
            </div>
            <div className='flex flex-col flex-1 gap-2 relative'>
              <label htmlFor='password' className={labelClass.password}>
                Password
              </label>
              <input
                type='text'
                name='password'
                id='password'
                className='border p-2 rounded-md bg-white'
                value={password}
                required
                onFocus={() => handleInputFocus('password')}
                onBlur={() => handleInputBlur('password', password)}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='flex flex-row items-center justify-center gap-2'>
            <button
              className='border rounded-md p-2 w-[50%] hover:bg-[#90EE90] bg-[#90EE90]/[0.5]'
              onClick={handleMemberAdd}
            >
              Add Member
            </button>
            <button
              className='border rounded-md p-2 w-[50%] hover:bg-[#90EE90] bg-[#90EE90]/[0.5]'
              onClick={handleMemberAddAndAnother}
            >
              Add Another
            </button>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddMemberModal;
