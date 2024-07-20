import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MdHowToVote } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';

const SideBar = ({ selectedScreen, setSelectedScreen }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleScreenSelection = (screen) => {
    setSelectedScreen(screen);
    // setSideBar(!sideBar);
  };

  const handleCloseSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col justify-between h-full text-gray-400'>
      <div className='flex flex-col gap-3 py-5 px-2 mx-0 md:px-5 font-light'>
        <div
          className={`flex gap-2 items-center justify-start cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-50 rounded-md ${
            selectedScreen === 'home' && 'text-black bg-green-100'
          }`}
          onClick={() => handleScreenSelection('home')}
        >
          <div className='text-xl md:text-lg p-1'>
            <IoHomeOutline />
          </div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>Home</div>
        </div>
        <div
          className={`flex gap-2 items-center justify-start cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-50 rounded-md ${
            selectedScreen === 'users' && 'text-black bg-green-100'
          }`}
          onClick={() => handleScreenSelection('users')}
        >
          <div className='text-xl md:text-lg p-1'>
            <IoPersonOutline />
          </div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>Users</div>
        </div>
        <div
          className={`flex gap-2 items-center justify-start cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-50 rounded-md ${
            selectedScreen === 'votes' && 'text-black bg-green-100'
          }`}
          onClick={() => handleScreenSelection('votes')}
        >
          <div className='text-xl md:text-lg p-1'>
            <MdHowToVote />
          </div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>Votes</div>
        </div>
        <div
          className={`flex gap-2 items-center justify-start cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-50 rounded-md ${
            selectedScreen === 'report' && 'text-black bg-green-100'
          }`}
          onClick={() => handleScreenSelection('report')}
        >
          <div className='text-xl md:text-lg p-1'>
            <HiOutlineDocumentReport />
          </div>
          <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>
            Report
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <div className='flex flex-col gap-3 py-5 px-2 mx-0 md:px-5 font-light'>
          <div
            className='flex gap-2 items-center justify-start cursor-pointer px-2 md:pl-4 py-1 hover:bg-green-50 rounded-md'
            onClick={handleCloseSideBar}
          >
            <div className='text-xl md:text-lg p-1'>
              <IoReorderThreeOutline />
            </div>
            <div className={`${isOpen ? 'hidden' : 'block'}`}>Close</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
