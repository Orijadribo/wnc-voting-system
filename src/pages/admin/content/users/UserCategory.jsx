import React, { useState } from 'react';
import AddMemberModal from './AddMemberModal';

const UserCategory = ({ isVisible, setIsVisible, data, selection }) => {
  return (
    <div>
      <div className='relative'>
        {data &&
          data.map((user, index) => (
            <div key={index}>
              <div>
                {user.firstName} {user.lastName}
              </div>
            </div>
          ))}
      </div>
      {isVisible && <AddMemberModal setIsVisible={setIsVisible} />}
    </div>
  );
};

export default UserCategory;
