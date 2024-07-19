import React from 'react';

const Home = () => {
  return (
    <div className=''>
      <div className='mb-5 text-2xl'>Home</div>
      <div
        className='flex flex-col gap-5 overflow-y-auto'
        style={{ height: 'calc(100vh - 220px)' }}
      >
        <div className='flex gap-5'>
          <div className='flex-[1] bg-green-50/80 rounded-lg shadow-sm h-40'>
            Active users
          </div>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm'>Previous Voters</div>
        </div>
        <div>
          <div className='bg-green-50/80 rounded-lg shadow-sm h-40'>Votes each day</div>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
