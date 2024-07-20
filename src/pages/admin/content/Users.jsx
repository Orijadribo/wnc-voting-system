import React, { useEffect, useState } from 'react';
import UserCategory from '../../../components/UserCategory';

const Users = () => {
  const [selection, setSelection] = useState('paidUpMembers');
  const [data, setData] = useState('');

  const paidUpMembers = [
    'daniel',
    'daniel',
    'daniel',
    'daniel',
    'daniel',
    'daniel',
    'daniel',
  ];
  const yetToVote = [
    'peti',
    'peti',
    'peti',
    'peti',
    'peti',
    'peti',
    'peti',
    'peti',
  ];
  const voted = ['orija', 'orija', 'orija', 'orija'];

 

  useEffect(() => {
    if (selection === 'paidUpMembers') {
      setData(paidUpMembers);
    } else if (selection === 'yetToVote') {
      setData(yetToVote);
    } else {
      setData(voted);
    }
  }, [selection])
  
  const handleSeclection = (selection) => {
    setSelection(selection);
  };

  return (
    <div className=''>
      <div className='mb-5 text-2xl'>Users</div>
      <div className='flex items-center justify-between max-w-lg m-auto bg-green-50 px-2 md:px-5 py-2 rounded-lg'>
        <div
          onClick={() => handleSeclection('paidUpMembers')}
          className='flex flex-1 flex-col gap-1 rounded-xl items-center justify-center cursor-pointer'
        >
          <p className=''>Paid Up</p>
          {selection === 'paidUpMembers' && (
            <div className='w-[80%] h-1 bg-green-300'></div>
          )}
        </div>
        <div
          onClick={() => handleSeclection('yetToVote')}
          className='flex flex-1 flex-col gap-1 rounded-xl items-center justify-center cursor-pointer'
        >
          <p>Not Voted</p>
          {selection === 'yetToVote' && (
            <div className='w-[80%] h-1 bg-green-300'></div>
          )}
        </div>
        <div
          onClick={() => handleSeclection('voted')}
          className='flex flex-1 flex-col gap-1 rounded-xl items-center justify-center cursor-pointer'
        >
          <p>Voted</p>
          {selection === 'voted' && (
            <div className='w-[80%] h-1 bg-green-300'></div>
          )}
        </div>
      </div>
      <div
        className='flex flex-col gap-5 overflow-y-auto rounded-lg mt-5'
        style={{ height: 'calc(100vh - 290px)' }}
      >
        <UserCategory data={data} />
      </div>
    </div>
  );
};

export default Users;
