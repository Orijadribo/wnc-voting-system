import React, { useState } from 'react';

const SideBar = ({ setSelectedScreen }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleScreenSelection = (screen) => {
    setSelectedScreen(screen);
    // setSideBar(!sideBar);
  };

  const handleCloseSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col justify-between border h-full'>
      <div className='flex flex-col gap-3 py-5 px-2 mx-2 md:px-5 font-light'>
        <div
          className='flex gap-2 items-center cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-100 rounded-md'
          onClick={() => handleScreenSelection('home')}
        >
          <div className='w-5 h-5 border'></div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>Home</div>
        </div>
        <div
          className='flex gap-2 items-center cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-100 rounded-md'
          onClick={() => handleScreenSelection('users')}
        >
          <div className='w-5 h-5 border'></div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>Users</div>
        </div>
        <div
          className='flex gap-2 items-center cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-100 rounded-md'
          onClick={() => handleScreenSelection('votes')}
        >
          <div className='w-5 h-5 border'></div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>Votes</div>
        </div>
        <div
          className='flex gap-2 items-center cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-100 rounded-md'
          onClick={() => handleScreenSelection('report')}
        >
          <div className='w-5 h-5 border'></div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>
            Report
          </div>
        </div>
      </div>

      <div className='black md:hidden'>
        <div className='flex flex-col gap-3 py-5 px-2 mx-2 md:px-5 font-light'>
          <div
            className='flex gap-2 items-center cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-100 rounded-md'
            onClick={handleCloseSideBar}
          >
            <div className='w-5 h-5 border'></div>
            <div className={`${isOpen ? 'hidden' : 'block'}`}>Close</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
