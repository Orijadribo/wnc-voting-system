import React, { useState } from 'react';

const VerificationModal = ({ firstName, lastName }) => {
  const [verified, setVerified] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-5 md:p-10 w-[90%] lg:w-[50%] rounded-lg flex flex-col gap-5'>
        {verified ? (
          <div>user is verified</div>
        ) : (
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-5 items-center justify-center capitalize text-center'>
              <div>
                <span className='font-bold'>
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
