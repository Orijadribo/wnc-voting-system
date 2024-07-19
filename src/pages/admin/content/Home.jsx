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
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm h-56 cursor-pointer'>
            Active users
          </div>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer'>
            Previous Voters
          </div>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer'>
            Yet to vote
          </div>
        </div>
        <div>
          <div className='bg-green-50/80 rounded-lg shadow-sm h-40'>
            Votes each day
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
