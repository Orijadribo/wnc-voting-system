import React from 'react';
import Chart from './Chart';

const Votes = () => {
  const votes = [
    {
      article: 'Article 1',
      yes: 10,
      no: 20,
    },
    {
      article: 'Article 2',
      yes: 30,
      no: 5,
    },
    {
      article: 'Article 3',
      yes: 20,
      no: 20,
    },
    {
      article: 'Article 4',
      yes: 0,
      no: 40,
    },
    {
      article: 'Article 5',
      yes: 15,
      no: 0,
    },
    {
      article: 'Article 6',
      yes: 10,
      no: 0,
    },
    {
      article: 'Article 7',
      yes: 0,
      no: 40,
    },
    {
      article: 'Article 8',
      yes: 15,
      no: 0,
    },
    {
      article: 'Article 9',
      yes: 10,
      no: 0,
    },
    {
      article: 'Article 10',
      yes: 0,
      no: 40,
    },
    {
      article: 'Article 11',
      yes: 15,
      no: 0,
    },
    {
      article: 'Article 12',
      yes: 120,
      no: 10,
    },
  ];

  return (
    <div className=''>
      <div className='mb-5 text-2xl'>Votes</div>
      <div
        className='grid grid-cols-1 md:grid-cols-3 gap-5 overflow-y-auto rounded-lg'
        style={{ height: 'calc(100vh - 220px)' }}
      >
        {votes.map((article,index) => (
          <div key={index} className='rounded-lg shadow-sm bg-green-50/80 h-[250px] pt-2 px-5'>
            <div className='text-xl font-light -mb-5'>{article.article}</div>
            <Chart yesVote={article.yes} noVote={article.no} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Votes;
