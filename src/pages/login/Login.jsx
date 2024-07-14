import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WNC_course, WNGC_logo } from '../../assets';
import db from '../../api/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const Login = () => {
  const [labelClass, setLabelClass] = useState({
    firstName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
    lastName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const trialCollectionRef = collection(db, 'trial');

  const getTrial = async () => {
    try {
      await addDoc(trialCollectionRef, {
        firstName: firstName,
        lastName: lastName,
      });
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
    <div
      className='flex items-center justify-center w-screen m-auto h-screen bg-[#F4F6F9]'
      style={{
        backgroundImage: `url(${WNC_course})`,
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-col items-center justify-center rounded-lg w-[350px] md:w-[400px] bg-white p-10  shadow-xl'>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-32' src={WNGC_logo} alt='WNGC_logo' />
          <h1 className='py-5 font-light text-center text-[32px] w-full'>
            WNC Constitution Voter's Login
          </h1>
        </div>

        {/* Player details */}
        <div className='flex flex-col gap-5 w-full mb-5'>
          <div className='flex flex-col gap-2 relative'>
            <label htmlFor='firstName' className={labelClass.firstName}>
              First Name
            </label>
            <input
              className='border p-2 rounded-md'
              name='firstName'
              id='firstName'
              type='text'
              value={firstName}
              onFocus={() => handleInputFocus('firstName')}
              onBlur={() => handleInputBlur('firstName',firstName)}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 relative'>
            <label htmlFor='lastName' className={labelClass.lastName}>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='border p-2 rounded-md'
              value={lastName}
              onFocus={() => handleInputFocus('lastName')}
              onBlur={() => handleInputBlur('lastName',lastName)}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

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

        <Link to='/section_one'>
          <button
            onClick={getTrial}
            className='border py-2 px-5 mt-5 rounded-lg bg-green-50 text-lg'
          >
            Verify Subscription
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
