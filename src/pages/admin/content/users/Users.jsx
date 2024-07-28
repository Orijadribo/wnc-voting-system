import React, { useEffect, useState } from 'react';
import UserCategory from './UserCategory';

const Users = ({ paidUpMembers, yetToVote, voters }) => {
  const [selection, setSelection] = useState('paidUpMembers');
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  //Selection of the data to display
  useEffect(() => {
    if (selection === 'paidUpMembers') {
      setData(paidUpMembers);
    } else if (selection === 'yetToVote') {
      setData(yetToVote);
    } else {
      setData(voters);
    }
  }, [selection]);

  //Set the selction of the users to show
  const handleSeclection = (selection) => {
    setSelection(selection);
  };

  //When add member is clicked, open the add member modal
  const handleAddMember = () => {
    setIsVisible(true);
  };

  return (
    <div className=''>
      <div className='flex items-center justify-between mb-5 '>
        <div className='text-2xl p-2 pl-0'>Users</div>
        {selection === 'paidUpMembers' && (
          <div className=''>
            <button
              onClick={handleAddMember}
              className='border p-2 rounded-lg hover:bg-green-200'
            >
              Add Member
            </button>
          </div>
        )}
      </div>
      <div className='flex items-center justify-between max-w-lg m-auto bg-green-50 px-2 md:px-5 py-2 rounded-lg'>
        <div
          onClick={() => handleSeclection('paidUpMembers')}
          className='flex flex-1 flex-col gap-1 rounded-xl items-center justify-center cursor-pointer'
        >
          <p
            className={`${
              selection === 'paidUpMembers' && 'font-bold'
            } text-center`}
          >
            Paid Up
          </p>
          {selection === 'paidUpMembers' && (
            <div className='w-[80%] h-1 bg-green-300 rounded-xl'></div>
          )}
        </div>
        <div
          onClick={() => handleSeclection('yetToVote')}
          className='flex flex-1 flex-col gap-1 rounded-xl items-center justify-center cursor-pointer'
        >
          <p
            className={`${
              selection === 'yetToVote' && 'font-bold'
            } text-center`}
          >
            Not Voted
          </p>
          {selection === 'yetToVote' && (
            <div className='w-[80%] h-1 bg-green-300 rounded-xl'></div>
          )}
        </div>
        <div
          onClick={() => handleSeclection('voted')}
          className='flex flex-1 flex-col gap-1 rounded-xl items-center justify-center cursor-pointer'
        >
          <p className={`${selection === 'voted' && 'font-bold'} text-center`}>
            Voted
          </p>
          {selection === 'voted' && (
            <div className='w-[80%] h-1 bg-green-300 rounded-xl'></div>
          )}
        </div>
      </div>
      <div
        className='flex flex-col gap-5 overflow-y-auto overflow-x-auto rounded-lg mt-5 w-full'
        style={{ height: 'calc(100vh - 310px)' }}
      >
        <UserCategory
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          data={data}
          selection={selection}
        />
      </div>
    </div>
  );
};

export default Users;
