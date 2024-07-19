import React, { useState } from 'react';
import { db, auth } from '../../api/firebaseConfig';
import SideBar from './SideBar';
import Content from './Content';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [selectedScreen, setSelectedScreen] = useState('home');

  const navigate = useNavigate();

  // Function to handle log out
  const handleLogOut = async () => {
    try {
      await auth.signOut();
      // Redirect to verification page after logout
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='bg-green-50 border h-screen'>
      <div className='max-w-[1080px] m-auto '>
        <div className='flex items-center justify-between bg-white sticky top-0 left-0 py-3 px-5 my-5 mx-2 lg:mx-0 shadow-lg rounded-lg z-40'>
          <div>Admin Panel</div>
          <div className='flex items-center gap-5'>
            <div>daniel</div>
            <div
              onClick={handleLogOut}
              className='border font-extralight rounded-lg p-2 capitalize hover:bg-green-200 cursor-pointer'
            >
              log out
            </div>
          </div>
        </div>
        <div className='flex gap-2 mx-2 lg:mx-0'>
          <div
            className='flex-[1] bg-white shadow-lg rounded-lg'
            style={{ height: 'calc(100vh - 125px)' }}
          >
            <SideBar setSelectedScreen={setSelectedScreen} />
          </div>
          <div
            className='flex-[4] bg-white shadow-lg rounded-lg'
            style={{ height: 'calc(100vh - 125px)' }}
          >
            <Content selectedScreen={selectedScreen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
