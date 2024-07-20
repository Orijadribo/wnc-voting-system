import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const AddMemberModal = ({ setIsVisible }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [labelClass, setLabelClass] = useState({
    firstName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
    lastName: 'absolute top-2 left-2 bg-white text-[#b2b2b2] cursor-text',
  });

  const closeUserAddModal = () => {setIsVisible(false)};
  const handleMemberAdd = () => {};
  const handleMemberAddAndAnother = () => {};

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
              className='border p-2 rounded-md'
              value={lastName}
              required
              onFocus={() => handleInputFocus('lastName')}
              onBlur={() => handleInputBlur('lastName', lastName)}
              onChange={(e) => setLastName(e.target.value)}
            />
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
