import React, { useContext, useState, useEffect } from 'react';
import { db, auth } from '../../api/firebaseConfig';
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import SideBar from './SideBar';
import Content from './Content';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AdminPanel = ({
  currentUser,
  userDetails,
  setUserDetails,
  setUserDocId,
}) => {
  const [selectedScreen, setSelectedScreen] = useState('home');

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  // //To get the user details of the person who has logged in
  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       // Check if currentUser is not null
  //       if (!currentUser) {
  //         console.log('Current user is null');
  //         return;
  //       }

  //       // Fetch the user details associated with the login email from admin collection in Firestore
  //       const adminsRef = collection(db, 'admins');
  //       const emailQuery = query(
  //         adminsRef,
  //         where('email', '==', currentUser.email)
  //       );
  //       const emailQuerySnapshot = await getDocs(emailQuery);

  //       if (emailQuerySnapshot.empty) {
  //         console.log('User not available');
  //         return;
  //       }

  //       // If there's only one user with the given email
  //       const userData = emailQuerySnapshot.docs[0].data();

  //       setUserDetails(userData);

  //       // Set user details in the state
  //     } catch (error) {
  //       console.error('Error fetching user details:', error);
  //     }
  //   };

  //   getUserDetails();
  // }, []);

  // Function to handle log out
  const handleLogOut = async () => {
    try {
      await auth.signOut();

      //Remove the user from local storage
      dispatch({ type: 'LOGOUT' });

      // Clear userDocId from localStorage
      localStorage.removeItem('userDocId');

      // Redirect to verification page after logout
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='bg-green-50 border h-screen'>
      <div className='max-w-[1080px] m-auto '>
        <div className='flex items-center justify-between bg-white sticky top-0 left-0 py-3 px-5 my-5 mx-2 lg:mx-0 shadow-lg rounded-lg z-20'>
          <div>Admin Panel</div>
          <div className='flex items-center gap-5 capitalize'>
            {/* <div>{userDetails.firstName}</div> */}
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
            <SideBar
              selectedScreen={selectedScreen}
              setSelectedScreen={setSelectedScreen}
            />
          </div>
          <div
            className='flex-[6] md:flex-[4] bg-white shadow-lg rounded-lg'
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
