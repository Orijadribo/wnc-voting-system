import React, { useState } from 'react';

const SideBar = ({ setSelectedScreen }) => {
  const handleScreenSelection = (screen) => {
    setSelectedScreen(screen);
    // setSideBar(!sideBar);
  };

  return (
    <div className='flex flex-col gap-3 py-5 px-5 font-light'>
      <div
        className='cursor-pointer pl-4 py-1 hover:bg-green-100 rounded-md'
        onClick={() => handleScreenSelection('home')}
      >
        Home
      </div>
      <div
        className='cursor-pointer pl-4 py-1 hover:bg-green-100 rounded-md'
        onClick={() => handleScreenSelection('users')}
      >
        Users
      </div>
      <div
        className='cursor-pointer pl-4 py-1 hover:bg-green-100 rounded-md'
        onClick={() => handleScreenSelection('votes')}
      >
        Votes
      </div>
      <div
        className='cursor-pointer pl-4 py-1 hover:bg-green-100 rounded-md'
        onClick={() => handleScreenSelection('report')}
      >
        Report
      </div>
    </div>
  );
};

export default SideBar;
