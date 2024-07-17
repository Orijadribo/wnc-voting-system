import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VerificationModal = ({ firstName, lastName }) => {
  const [verified, setVerified] = useState(true);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-5 md:p-10 w-[90%] lg:w-[50%] rounded-lg flex flex-col gap-5'>
        {verified ? (
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-3 items-center justify-center capitalize text-center '>
              <div className='flex flex-col text-green-600'>
                <span className='font-bold text-black'>
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
                <button className='border py-2 px-5 mt-5 rounded-lg bg-green-50 text-lg'>
                  continue
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-3 items-center justify-center capitalize text-center'>
              <div className='flex flex-col text-red-600'>
                <span className='font-bold text-black'>
                  {firstName} {lastName}
                </span>{' '}
                you are not paid up
              </div>
              <div className=''>please pay up your subscription to vote</div>
              <div>you can pay using the following channels</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationModal;
