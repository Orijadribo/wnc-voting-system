import React, { useEffect, useState, useRef } from 'react';
import { articles } from '../../constants';
import { Link } from 'react-router-dom';
import { db, auth } from '../../api/firebaseConfig';
import { collection,getDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Section = ({
  startArticle,
  endArticle,
  section,
  previousSection,
  nextSection,
  userDocId,
  firstName,
}) => {
  const [selectedVotes, setSelectedVotes] = useState({});
  const [reasons, setReasons] = useState({});
  const [votes, setVotes] = useState([]);
  const [reasonActive, setReasonActive] = useState({});
  const [reasonAvailable, setReasonAvailable] = useState({});
  const debounceTimeout = useRef(null);
  const [fetchedData, setFetchedData] = useState({});

  const navigate = useNavigate();
  const votesCollectionRef = collection(db, 'votes');

  // Logic to filter articles based on startArticle and endArticle
  const filteredArticles = articles.filter((article) => {
    return article.id >= startArticle && article.id <= endArticle;
  });

  useEffect(() => {
    // console.log(votes);
  }, [votes]);

  // Function to handle change of a vote
  const handleVoteChange = (vote, articleId) => {
    setSelectedVotes((prevVotes) => ({
      ...prevVotes,
      [articleId]: vote,
    }));

    if (vote === 'yes') {
      // Remove the reason if the vote is changed to "Yes"
      setReasons((prevReasons) => {
        const { [articleId]: removed, ...rest } = prevReasons;
        return rest;
      });
      setReasonAvailable((prevAvailable) => {
        const { [articleId]: removed, ...rest } = prevAvailable;
        return rest;
      });
    }

    // Saving the vote in the state
    setVotes((prevVotes) => ({
      ...prevVotes,
      [articleId]: {
        ...prevVotes[articleId],
        vote: vote,
        reason: vote === 'yes' ? '' : prevVotes[articleId]?.reason,
      },
    }));
  };

  // Function to handle change in a voter's reply for a "no" vote
  const handleReasonChange = (e, articleId) => {
    const { value } = e.target;

    if (value.trim() === '') {
      setReasonAvailable(false);
    } else {
      setReasonAvailable(true);
    }

    setReasonAvailable((prevAvailable) => ({
      ...prevAvailable,
      [`${articleId}`]: value.trim() !== '',
    }));

    setReasons((prevReasons) => ({
      ...prevReasons,
      [articleId]: value,
    }));

    // Clear the previous debounce timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new debounce timeout
    debounceTimeout.current = setTimeout(() => {
      // Saving the response of the voter
      setVotes((prevVotes) => ({
        ...prevVotes,
        [articleId]: {
          ...prevVotes[articleId],
          reason: value,
        },
      }));
    }, 1000);
  };

  // Check if all articles and sections have been voted on and if no, there has to be a reason for "No"
  const allVoted = filteredArticles.every(
    (article) =>
      selectedVotes[article.id] === 'yes' ||
      (selectedVotes[article.id] === 'no' &&
        (reasons[article.id] || '').trim() !== '')
  );

  // Function to save votes to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!allVoted) {
      alert('Please vote on all sections of all articles.');
      return;
    }

    if (!userDocId) {
      alert('You must be logged in to submit your votes.');
      navigate('/');
      return;
    }

    try {
      const voteDocRef = doc(db, 'votes', userDocId);
      await updateDoc(voteDocRef, { votes });
      // console.log('success');
    } catch (err) {
      alert('Error updating votes:', err);
      console.log('Error updating votes:', err);
    }
  };

  // Handle focus and blur events for reason inputs
  const handleFocus = (articleId) => {
    setReasonActive((prevActive) => ({
      ...prevActive,
      [articleId]: true,
    }));
  };

  const handleBlur = (articleId) => {
    setReasonActive((prevActive) => ({
      ...prevActive,
      [articleId]: false,
    }));
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
    <div className='bg-green-50 border'>
      <div className='flex items-center justify-between bg-white sticky top-0 left-0 py-3 px-5 my-5 max-w-2xl m-auto shadow-lg rounded-lg'>
        <div className='font-extralight'>
          hello,
          <span className='capitalize text-lg font-extrabold'>
            {' '}
            {firstName}
          </span>
        </div>
        <button
          onClick={handleLogOut}
          className='border font-extralight rounded-lg p-2 capitalize hover:bg-green-200'
        >
          log out
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className='items-center justify-between max-w-2xl m-auto my-5 rounded-lg p-6 md:p-10 shadow-lg bg-white'
      >
        <div className='text-center font-light text-[32px] capitalize'>
          Section {section}
        </div>
        <div>
          {filteredArticles.map((article) => (
            <div key={article.id} className='my-5'>
              <div className='font-thin text-[28px] my-3'>
                {article.article}
              </div>
              <div className='font-semibold text-lg my-3 font capitalize'>
                {article.title}
              </div>
              <div className='text-justify  text-[#000000]/[0.6]'>
                {article.content}
              </div>
              <div className='flex flex-col gap-2 py-2'>
                <p className='font-normal text-[16px]'>Vote</p>
                <div className='flex items-center mb-1'>
                  <input
                    id={`yes${article.id}`}
                    type='radio'
                    name={`vote${article.id}`}
                    value='yes'
                    checked={selectedVotes[article.id] === 'yes'}
                    onChange={() => handleVoteChange('yes', article.id)}
                    className='text-indigo-600 h-4 w-4 cursor-pointer'
                    required
                  />
                  <label
                    htmlFor={`yes${article.id}`}
                    className='ml-2 text-sm font-extralight text-gray-700 cursor-pointer'
                  >
                    Yes
                  </label>
                </div>
                <div className='flex items-center mb-2'>
                  <input
                    id={`no${article.id}`}
                    type='radio'
                    name={`vote${article.id}`}
                    value='no'
                    checked={selectedVotes[article.id] === 'no'}
                    onChange={() => handleVoteChange('no', article.id)}
                    className='text-indigo-600 h-4 w-4 cursor-pointer'
                    required
                  />
                  <label
                    htmlFor={`no${article.id}`}
                    className='ml-2 text-sm font-extralight text-gray-700 cursor-pointer'
                  >
                    No
                  </label>
                </div>
                {selectedVotes[article.id] === 'no' && (
                  <div className='flex flex-col relative'>
                    <label
                      htmlFor={`reasonForNo${article.id}`}
                      className={`font-normal absolute -top-2 left-2 bg-white text-[12px] py-[0.15rem] px-2 rounded-sm text-[#b2b2b2] ${
                        reasonAvailable[article.id] ? 'block' : 'hidden'
                      }`}
                    >
                      Reason for voting "No" ...
                    </label>
                    <textarea
                      name='reasonForNo'
                      id={`reasonForNo${article.id}`}
                      placeholder='Reason for voting "No"... (250 characters maximum)'
                      maxLength='250'
                      required
                      value={reasons[article.id] || ''}
                      onFocus={() => handleFocus(article.id)}
                      onBlur={() => handleBlur(article.id)}
                      onChange={(e) => handleReasonChange(e, article.id)}
                      className='border rounded-lg w-full h-20 p-2 mt-1'
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-5 items-center justify-between md:justify-end'>
          {section !== 'one' ? (
            <Link to={`/section_${previousSection}`}>
              <button
                type='button'
                className='py-2 px-5 rounded-lg bg-green-50 hover:bg-green-200 border'
              >
                Previous
              </button>
            </Link>
          ) : null}

          <button
            type='submit'
            className='py-2 px-5 rounded-lg bg-green-50 hover:bg-green-200 border'
          >
            Save
          </button>
          {allVoted ? (
            section !== 'eight' ? (
              <Link to={`/section_${nextSection}`}>
                <button
                  type='submit'
                  className=' flex gap-1 py-2 px-5 rounded-lg bg-green-50 hover:bg-green-200 border'
                >
                  <span className='hidden md:block'>Save and</span> Continue
                </button>
              </Link>
            ) : (
              <Link to={'/complete'}>
                <button
                  type='submit'
                  className=' flex gap-1 py-2 px-5 rounded-lg bg-green-50 hover:bg-green-200 border'
                >
                  Finish
                </button>
              </Link>
            )
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Section;
