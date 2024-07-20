import React, { useState } from 'react';
import AddMemberModal from './AddMemberModal';

const UserCategory = ({ data, selection }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAddMember = () => {
    setIsVisible(true);
  };
  return (
    <div>
      <div className='relative'>
        {data &&
          data.map((user, index) => <div key={index}>{user.firstName}</div>)}
        {selection === 'paidUpMembers' && (
          <div className='absolute top-0 right-0'>
            <button
              onClick={handleAddMember}
              className='border p-2 md:mr-5 rounded-lg hover:bg-green-200'
            >
              Add Member
            </button>
          </div>
        )}
      </div>
      {isVisible && <AddMemberModal />}
    </div>
  );
};

export default UserCategory;
