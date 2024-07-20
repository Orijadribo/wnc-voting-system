import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const AddMemberModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const closeUserAddModal = () => {};
  const handleMemberAdd = () => {};
  const handleMemberAddAndAnother = () => {};
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-40'>
      <div className='bg-white p-5 md:p-10 w-[90%] lg:w-[50%] rounded-lg flex flex-col gap-5'>
        <div className='flex items-center justify-end '>
          <h2 className='flex-1 text-center font-bold text-xl'>Add Member</h2>
          <div
            className='cursor-pointer hover:bg-red-600 hover:text-white p-1 rounded-md'
            onClick={closeUserAddModal}
          >
            <IoClose />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div className='flex flex-col gap-2 md:w-[50%]'>
            <label htmlFor='firstName' className=''>
              First Name:
            </label>
            <input
              className='border p-2 rounded-md'
              name='firstName'
              id='firstName'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 md:w-[50%]'>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='border  p-2 rounded-md'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className='flex flex-row items-center justify-center gap-2'>
          <button
            className='border rounded-md p-2 w-[50%] bg-[#90EE90] hover:bg-[#90EE90]/[0.5]'
            onClick={handleMemberAdd}
          >
            Add Member
          </button>
          <button
            className='border rounded-md p-2 w-[50%] bg-[#90EE90] hover:bg-[#90EE90]/[0.5]'
            onClick={handleMemberAddAndAnother}
          >
            Add Another
          </button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddMemberModal;
