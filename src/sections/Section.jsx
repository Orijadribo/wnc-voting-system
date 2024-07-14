import React, { useState } from 'react';
import { articles } from '../constants';
import { Link } from 'react-router-dom';

const Section = ({
  startArticle,
  endArticle,
  section,
  previousSection,
  nextSection,
}) => {
  const [selectedVotes, setSelectedVotes] = useState({});
  const [reasons, setReasons] = useState({});

  // Logic to filter articles based on startArticle and endArticle
  const filteredArticles = articles.filter((article, index) => {
    return article.id >= startArticle && article.id <= endArticle;
  });

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

  // Check if all articles and sections have been voted on and if no, there has to be a reason for "No"
  const allVoted = filteredArticles.every((article) =>
    article.details.every(
      (subArticle) =>
        selectedVotes[article.id]?.[subArticle.id] === 'yes' ||
        (selectedVotes[article.id]?.[subArticle.id] === 'no' &&
          (reasons[article.id]?.[subArticle.id] || '').trim() !== '')
    )
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!allVoted) {
      alert('Please vote on all sections of all articles.');
      return;
    }
  };

  return (
    <div className='bg-green-50 border'>
      <form
        onSubmit={handleSubmit}
        className='items-center justify-between max-w-2xl m-auto my-20 rounded-lg p-6 md:p-10 shadow-lg bg-white'
      >
        <div className='text-center font-light text-[32px] capitalize'>
          Section {section}
        </div>
        <div>
          {filteredArticles.map((article) => (
            <div key={article?.id} className='my-5'>
              <div className='font-thin text-[28px] my-3'>
                {article?.article}
              </div>
              <div className='font-semibold text-lg my-3 font capitalize'>
                {article?.title}
              </div>
              {article?.details.map((section) => (
                <div key={section?.id} className='my-3'>
                  <div className='flex flex-row gap-2 font-medium mb-2 text-[20px]'>
                    <div>{section?.id}</div>
                    <div>{section?.title}</div>
                  </div>
                  <div className='font-extralight text-justify'>
                    {section?.content}
                  </div>
                  <div className='flex flex-col gap-2 py-2'>
                    <p className='font-normal text-[16px]'>Vote</p>
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
                        className='text-indigo-600 h-4 w-4 cursor-pointer'
                        required
                      />
                      <label
                        htmlFor={`yes${article?.id}${section?.id}`}
                        className='ml-2 text-sm font-extralight text-gray-700 cursor-pointer'
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
                        className='text-indigo-600 h-4 w-4 cursor-pointer'
                        required
                      />
                      <label
                        htmlFor={`no${article?.id}${section?.id}`}
                        className='ml-2 text-sm font-extralight text-gray-700 cursor-pointer'
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
                          Give a reason for voting 'No'
                        </label>
                        <textarea
                          name='reasonForNo'
                          id={`reasonForNo${article?.id}${section?.id}`}
                          placeholder='Give a reason for voting "No"... (250 characters maximum)'
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
        <div className='flex gap-5 items-center justify-between md:justify-end'>
          {section !== 'one' ? (
            <Link to={`/section_${previousSection}`}>
              <button
                type='button'
                className='py-2 px-5 rounded-lg bg-green-50'
              >
                Previous
              </button>
            </Link>
          ) : null}

          <button type='submit' className='py-2 px-5 rounded-lg bg-green-50'>
            Save
          </button>
          {allVoted ? (
            section !== 'eight' ? (
              <Link to={`/section_${nextSection}`}>
                <button
                  type='submit'
                  className=' flex gap-1 py-2 px-5 rounded-lg bg-green-50'
                >
                  <span className='hidden md:block'>Save and</span> Continue
                </button>
              </Link>
            ) : (
              <Link to={'/complete'}>
                <button className=' flex gap-1 py-2 px-5 rounded-lg bg-green-50'>
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
