import React, { useState, useEffect } from 'react';
import { WNC_course, WNGC_logo } from '../../assets';
import { db } from '../../api/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import VerificationModal from './VerificationModal';

const Verification = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  setUser,
}) => {
  const [labelClass, setLabelClass] = useState({
    firstName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
    lastName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
  });
  const [showModal, setShowModal] = useState(false);
  const [paidUpMembers, setPaidUpMembers] = useState([]);
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();
  const paidUpMembersCollectionRef = collection(db, 'paidUpMembers');

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await getDocs(paidUpMembersCollectionRef);
        const userData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPaidUpMembers(userData);
      } catch (err) {
        console.error(err);
      }
    };
    getPlayers();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    //Logic to handle verification of the users (Cross check the name against that in the database)
    // Logic to handle verification of the users
    const user = paidUpMembers.find(
      (member) =>
        member.firstName.toLowerCase() === firstName.toLowerCase() &&
        member.lastName.toLowerCase() === lastName.toLowerCase()
    );

    if (user) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
    setShowModal(true);
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

  //Incase user is admin
  const handleAdmin = () => {
    setUser('admin');
    navigate('/login');
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
        <form
          onSubmit={handleLogin}
          className='flex flex-col gap-5 w-full mb-5'
        >
          <div className='flex flex-col gap-2 relative'>
            <label htmlFor='firstName' className={labelClass.firstName}>
              First Name
            </label>
            <input
              className='border p-2 rounded-md bg-white'
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
          <div className='flex flex-col gap-2 relative'>
            <label htmlFor='lastName' className={labelClass.lastName}>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='border p-2 rounded-md bg-white'
              value={lastName}
              required
              onFocus={() => handleInputFocus('lastName')}
              onBlur={() => handleInputBlur('lastName', lastName)}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='border py-2 px-5 mt-5 rounded-lg bg-green-50 hover:bg-green-200 text-lg'
          >
            Verify Subscription
          </button>
        </form>
        <div onClick={handleAdmin} className='cursor-pointer underline text-xs'>
          Admin
        </div>
      </div>
      <div className='z-40'>
        {showModal && (
          <VerificationModal
            firstName={firstName}
            lastName={lastName}
            isVerified={isVerified}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default Verification;
