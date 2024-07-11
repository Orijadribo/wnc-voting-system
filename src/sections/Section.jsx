import React, { useState } from 'react';
import { articles } from '../constants';

const Section = () => {
  const [selectedVotes, setSelectedVotes] = useState({});
  const [reasons, setReasons] = useState({});

  const handleVoteChange = (vote, articleId, sectionId) => {
    setSelectedVotes((prevVotes) => ({
      ...prevVotes,
      [articleId]: {
        ...prevVotes[articleId],
        [sectionId]: vote,
      },
    }));
  };

  const handleReasonChange = (e, articleId, sectionId) => {
    const { value } = e.target;
    setReasons((prevReasons) => ({
      ...prevReasons,
      [articleId]: {
        ...prevReasons[articleId],
        [sectionId]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all articles and sections have been voted on
    const allVoted = articles.every((article) =>
      article.details.every(
        (section) =>
          selectedVotes[article.id]?.[section.id] === 'yes' ||
          selectedVotes[article.id]?.[section.id] === 'no'
      )
    );

    if (!allVoted) {
      alert('Please vote on all sections of all articles.');
      return;
    }
  };

  return (
    <div className='bg-green-50 border'>
      <form
        onSubmit={handleSubmit}
        className='items-center justify-between max-w-2xl m-auto my-20 rounded-lg p-10 shadow-lg bg-white'
      >
        <div className='text-center font-light text-[32px]'>Section One</div>
        <div>
          {articles.map((article) => (
            <div key={article?.id} className='my-5'>
              <div className='font-thin text-[28px] my-3'>
                {article?.article}
              </div>
              <div className='font-semibold text-lg my-3 font capitalize'>
                {article?.title}
              </div>
              {article?.details.map((section) => (
                <div key={section?.id} className='my-1'>
                  <div className='font-medium mb-2 text-[20px]'>
                    {section?.id}
                  </div>
                  <div className='font-extralight text-justify'>
                    {section?.content}
                  </div>
                  <div className='flex flex-col gap-2 py-2'>
                    <p className='font-normal'>Vote</p>
                    <div className='flex items-center mb-1'>
                      <input
                        id={`yes${article?.id}${section?.id}`}
                        type='radio'
                        name={`vote${article?.id}${section?.id}`}
                        value='yes'
                        checked={
                          selectedVotes[article?.id]?.[section?.id] === 'yes'
                        }
                        onChange={() =>
                          handleVoteChange('yes', article.id, section.id)
                        }
                        className='text-indigo-600 h-4 w-4'
                        required
                      />
                      <label
                        htmlFor={`yes${article?.id}${section?.id}`}
                        className='ml-2 text-sm font-extralight text-gray-700'
                      >
                        Yes
                      </label>
                    </div>
                    <div className='flex items-center mb-2'>
                      <input
                        id={`no${article?.id}${section?.id}`}
                        type='radio'
                        name={`vote${article?.id}${section?.id}`}
                        value='no'
                        checked={
                          selectedVotes[article?.id]?.[section?.id] === 'no'
                        }
                        onChange={() =>
                          handleVoteChange('no', article.id, section.id)
                        }
                        className='text-indigo-600 h-4 w-4'
                        required
                      />
                      <label
                        htmlFor={`no${article?.id}${section?.id}`}
                        className='ml-2 text-sm font-extralight text-gray-700'
                      >
                        No
                      </label>
                    </div>
                    {selectedVotes[article?.id]?.[section?.id] === 'no' && (
                      <div className='flex flex-col'>
                        <label
                          htmlFor={`reasonForNo${article?.id}${section?.id}`}
                          className='font-normal'
                        >
                          Give a reason for voting No
                        </label>
                        <textarea
                          name='reasonForNo'
                          id={`reasonForNo${article?.id}${section?.id}`}
                          placeholder='Give a reason for voting No... (250 characters maximum)'
                          maxLength='250'
                          required
                          value={reasons[article?.id]?.[section?.id] || ''}
                          onChange={(e) =>
                            handleReasonChange(e, article.id, section.id)
                          }
                          className='border rounded-lg w-full h-20 p-2 mt-1'
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='flex gap-5 items-center justify-end'>
          <button type='button' className='border py-2 px-5 rounded-lg'>
            Previous
          </button>
          <button type='submit' className='border py-2 px-5 rounded-lg'>
            Save
          </button>
          <button type='submit' className='border py-2 px-5 rounded-lg'>
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Section;
