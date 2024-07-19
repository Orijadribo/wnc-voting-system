import React from 'react';

const Home = () => {
  return (
    <div className=''>
      <div className='mb-5 text-2xl'>Home</div>
      <div
        className='flex flex-col gap-5 overflow-y-auto rounded-lg'
        style={{ height: 'calc(100vh - 220px)' }}
      >
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer relative'>
            <div className='sticky top-0 py-2 px-5 bg-white/90'>
              Active users
            </div>
            <div className='py-2 px-5'>
              <div className=''>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
            </div>
          </div>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer relative'>
            <div className='sticky top-0 py-2 px-5 bg-white/90'>
              Previous Voters
            </div>
            <div className='py-2 px-5'>
              <div>Daniel</div>
              <div>Daniel</div>
              <div>Daniel</div>
              <div>Daniel</div>
            </div>
          </div>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer relative'>
            <div className='sticky top-0 py-2 px-5 bg-white/90'>
              Yet to vote
            </div>
            <div className='py-2 px-5'>
              <div>Orija</div>
              <div>Orija</div>
              <div>Orija</div>
              <div>Orija</div>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-green-50/80 rounded-lg shadow-sm h-40'>
            <div className='sticky top-0 py-2 px-5 bg-white/90'>
              Votes each day
            </div>
            <div className='py-2 px-5'>
              <div>Orija</div>
              <div>Orija</div>
              <div>Orija</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
