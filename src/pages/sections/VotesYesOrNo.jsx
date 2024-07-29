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
import { useNavigate } from 'react-router-dom';
import { articles } from '../../constants';
import { AuthContext } from '../../context/AuthContext';

const VotesYesOrNo = ({
  userDocId,
  setUserDocId,
  firstName,
  currentUser,
  userDetails,
  setUserDetails,
}) => {
  const [votes, setVotes] = useState([]);

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve userDocId from localStorage
    const storedUserDocId = localStorage.getItem('userDocId');
    if (storedUserDocId) {
      setUserDocId(storedUserDocId);
    }
  }, []);

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       // Check if currentUser is not null
  //       if (!currentUser) {
  //         console.log('Current user is null');
  //         return;
  //       }

  //       // Fetch the user details associated with the login email from admin collection in Firestore
  //       const paidUp = collection(db, 'paidUpMembers');
  //       const emailQuery = query(
  //         paidUp,
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

  // Function to set all votes to 'yes'
  const voteYesForAllArticles = () => {
    const votes = {};
    articles.forEach((article) => {
      votes[article.id] = {
        vote: 'yes',
        reason: '',
      };
    });
    return votes;
  };

  // Function to save votes to Firebase and navigate to complete
  const handleYesSelection = async (e) => {
    e.preventDefault();

    try {
      const voteDocRef = doc(db, 'votes', userDocId);
      const newVotes = voteYesForAllArticles();
      await updateDoc(voteDocRef, { votes: newVotes });

      alert('Vote successfully saved');

      //Sign out user upon finish
      await auth.signOut();

      dispatch({ type: 'LOGOUT' });

      //Redirect to finish
      navigate('/complete');
    } catch (error) {
      console.log(error);
    }
  };

  // Function navigate user to section one incase they select no
  const handleNoSelection = async (e) => {
    e.preventDefault();

    //Navigate to section one
    navigate(`/section_one`);
  };

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
    <div className='bg-green-50 '>
      <div className='h-screen flex flex-col items-center justify-center'>
        <div className='w-full'>
          <div className='flex items-center justify-between bg-white sticky top-0 left-0 py-3 px-5 my-5 max-w-2xl m-auto shadow-lg rounded-lg z-40'>
            <div className='font-light'>
              hello,
              <span className='capitalize text-lg font-normal'>
                {' '}
                {/* {userDetails.firstName} */}
              </span>
            </div>
            <button
              onClick={handleLogOut}
              className='border font-extralight rounded-lg p-2 capitalize hover:bg-green-200 cursor-pointer'
            >
              log out
            </button>
          </div>
        </div>
        <div className='max-w-2xl m-auto rounded-lg p-6 md:p-10 shadow-lg bg-white capitalize'>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <div className='flex flex-col text-[32px] text-center'>
              Vote{' '}
              <span className=' font-bold text-[40px] text-green-500'>
                "yes"
              </span>{' '}
              on all the articles
            </div>
            <div className='italic text-sm'>
              (click 'yes' if you agree with all the articles)
            </div>
            <div className=' flex flex-col md:flex-row gap-2 wrap font-light text-[24px] w-full'>
              <button
                onClick={handleYesSelection}
                className=' flex flex-1 items-center justify-center  gap-1 py-2 px-5 rounded-lg bg-green-50 hover:bg-green-200 border  capitalize'
              >
                yes
              </button>
              <button
                onClick={handleNoSelection}
                className=' flex flex-1 items-center justify-center gap-1 py-2 px-5 rounded-lg bg-green-50 hover:bg-green-200 border  capitalize'
              >
                no
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotesYesOrNo;
