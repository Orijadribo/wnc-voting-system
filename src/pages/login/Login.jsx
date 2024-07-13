import React from 'react';
import { Link } from 'react-router-dom';
import { WNC_course, WNGC_logo } from '../../assets';

const Login = () => {
  return (
    <div
      className='flex items-center justify-center w-screen m-auto h-screen bg-[#F4F6F9]'
      style={{
        backgroundImage: `url(${WNC_course})`,
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-col items-center justify-center rounded-lg w-[350px] md:w-[400px] bg-[#FFFFFF]/[0.8] p-10 md:p-14 shadow-xl'>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-32' src={WNGC_logo} alt='WNGC_logo' />
          {/* <img className='w-32' src={course} alt='WNGC Logo' /> */}
          <h1 className='py-5 font-light text-center text-[32px] w-full'>
            WNC Constitution Voter's Login
          </h1>
        </div>

        <div className='flex gap-4 items-center justify-between w-full pb-5'>
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
          <button className=' border py-2 px-5 mt-5 rounded-lg bg-green-50 text-lg'>
            Verify Subscription
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
