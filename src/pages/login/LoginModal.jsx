import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const LoginModal = ({setShowModal}) => {
  const [terms, setTerms] = useState('');

  const handleCloseModal=()=>{setShowModal(false)}

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-5 w-[90%] lg:w-[50%] rounded-lg flex flex-col gap-5'>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col gap-2 items-center justify-center capitalize text-center'>
            <div className=' flex flex-row justify-between w-full'>
              <div className='flex flex-1 flex-col font-semibold'>
                terms and conditions
              </div>
              <div
                className='cursor-pointer hover:bg-red-600 hover:text-white p-1 rounded-md'
                onClick={handleCloseModal}
              >
                <IoClose />
              </div>
            </div>
            <div className='flex flex-col gap-2 max-h-[30rem] overflow-y-auto rounded-lg pb-2'>
              <div className='bg-gray-100 p-2 rounded-lg text-justify'>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
                <p>
                  'At the Annual General Meeting of West Nile Club held on …………
                  2024, this Revised Constitution was adopted by resolution of
                  the members of West Nile Club.',
                </p>
              </div>
              <div className='flex gap-1 md:gap-2 items-center py-2'>
                <input type='checkbox' name='terms' id='terms' />
                <label htmlFor='terms' className='text-xs'>
                  i have read and understood the terms and conditions
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
