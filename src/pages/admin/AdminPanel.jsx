import React from 'react';
import SideBar from './SideBar';
import Content from './Content';

const AdminPanel = () => {
  return (
    <div className='bg-green-50 border h-screen'>
      <div className='max-w-[1080px] m-auto '>
        <div className='flex items-center justify-between bg-white sticky top-0 left-0 py-3 px-5 my-5 mx-2 md:mx-0 shadow-lg rounded-lg z-40'>
          <div>Admin Panel</div>
          <div className='flex gap-2'>
            <div>daniel</div>
            <div>log out</div>
          </div>
        </div>
        <div className='flex gap-2'>
          <div
            className='flex-[1] bg-white shadow-lg rounded-lg'
            style={{ height: 'calc(100vh - 115px)' }}
          >
            <SideBar />
          </div>
          <div
            className='flex-[4] bg-white shadow-lg rounded-lg'
            style={{ height: 'calc(100vh - 115px)' }}
          >
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
