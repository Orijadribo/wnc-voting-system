import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const VerificationModal = ({
  firstName,
  lastName,
  isVerified,
  setShowModal,
}) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-5 md:p-10 w-[90%] lg:w-[50%] rounded-lg flex flex-col gap-5'>
        <div className=' flex flex-row justify-end w-full -mb-5'>
          <div
            className='cursor-pointer hover:bg-red-600 hover:text-white p-1 rounded-md border hover:border-red-600'
            onClick={handleCloseModal}
          >
            <IoClose />
          </div>
        </div>
        {isVerified ? (
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-3 items-center justify-center capitalize text-center'>
              <div className='flex flex-col text-green-600'>
                <span className='font-bold text-black text-[30px]'>
                  {firstName} {lastName}
                </span>{' '}
                you are paid up
              </div>
              <div>
                <p className=''>continue to the login page</p>
                <p className='text-sm'>
                  (please enter the credentials provided to you)
                </p>
              </div>
              <Link to='/login'>
                <button className='border py-2 px-5 mt-5 rounded-lg bg-green-50 hover:bg-green-200 text-lg'>
                  Continue
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-3 items-center justify-center capitalize text-center'>
              <div className='flex flex-col text-red-600'>
                <span className='font-bold text-black text-[30px] capitalize'>
                  {firstName} {lastName}
                </span>{' '}
                you are not paid up
              </div>
              <div className=''>please pay up your subscription to vote</div>
              <div>you can pay using the following channels</div>
              <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex-1 bg-green-50 rounded-lg p-5'>
                  <p className='font-bold pb-2'>MTN momo</p>
                  <p>154348 - Piwang Rajab</p>
                  <p>
                    The momo account is being fully managed by the treasurer -
                    Afayoa Hillary Abdelaziz
                  </p>
                </div>
                <div className='flex-1 bg-green-50 rounded-lg p-5'>
                  <p className='font-bold pb-2'>Bank Account </p>
                  <p>DFCU Bank-01981021003248</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationModal;
