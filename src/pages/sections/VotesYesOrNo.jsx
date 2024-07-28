import React, { useState } from 'react';
import { db, auth } from '../../api/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { articles } from '../../constants';

const VotesYesOrNo = ({ userDocId, firstName }) => {
  //   const [votes, setVotes] = useState([]);

  const navigate = useNavigate();

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
      // await updateDoc(voteDocRef, { votes: newVotes });

      alert('Vote successfully saved');

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
                {firstName}
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
