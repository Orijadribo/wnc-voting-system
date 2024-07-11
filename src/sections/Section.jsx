import React, { useState } from 'react';
import { articles } from '../constants';

const Section = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (vote, article, section) => {
    setSelectedOption(vote);
    console.log(vote + ' for article ' + article + ' ' + section);
  };

  console.log(selectedOption);

  return (
    <div className='bg-green-50 border'>
      <div className='items-center justify-between max-w-2xl m-auto my-20 rounded-lg p-10 shadow-lg bg-white'>
        <div className='text-center font-extrabold text-[32px]'>
          Section One
        </div>
        <div>
          {articles.map((article) => (
            <div key={article?.id} className=' my-5'>
              <div className='font-bold text-lg my-3'>{article?.article}</div>
              <div className='font-semibold my-2'>
                {article?.title}
              </div>
              {article?.details.map((section) => (
                <div key={section?.id} className='my-1'>
                  <div className='font-normal mb-2'>{section?.id}</div>
                  <div className='font-extralight text-justify'>
                    {section?.content}
                  </div>
                  <div className='flex flex-col gap-2 pt-2'>
                    <p className='font-normal'>Vote</p>
                    <div className='flex items-center mb-1'>
                      <input
                        id={`yes${article?.id}${section?.id}`}
                        type='radio'
                        name='yes'
                        value='yes'
                        checked={selectedOption === 'yes'}
                        onChange={() =>
                          handleChange('yes', article.id, section.id)
                        }
                        className='text-indigo-600 h-4 w-4'
                      />
                      <label
                        htmlFor={`yes${article?.id}${section?.id}`}
                        className='ml-2 text-sm font-medium text-gray-700'
                      >
                        Yes
                      </label>
                    </div>
                    <div className='flex items-center mb-2'>
                      <input
                        id={`no${article?.id}${section?.id}`}
                        type='radio'
                        name='no'
                        value='no'
                        checked={selectedOption === 'no'}
                        onChange={() =>
                          handleChange('no', article.id, section.id)
                        }
                        className='text-indigo-600 h-4 w-4'
                      />
                      <label
                        htmlFor={`no${article?.id}${section?.id}`}
                        className='ml-2 text-sm font-medium text-gray-700'
                      >
                        No
                      </label>
                    </div>
                    {selectedOption === 'no' ? (
                      <div>
                        <input
                          type='text'
                          name='reasonForNo'
                          id={`reasonForNo${article?.id}${section?.id}`}
                          placeholder='Give a reason for voting No'
                          className='flex border rounded-lg w-full h-20 p-2'
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='flex gap-5 items-center justify-end'>
          <button className='border py-2 px-5 rounded-lg'>Previous</button>
          <button className='border py-2 px-5 rounded-lg'>Save</button>
          <button className='border py-2 px-5 rounded-lg'>
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
