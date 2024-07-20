import React, { useState } from 'react';
import AddMemberModal from './AddMemberModal';

const UserCategory = ({ isVisible, setIsVisible, data, selection }) => {
  return (
    <div>
      <div className='relative'>
        {data &&
          data.map((user, index) => <div key={index}>{user.firstName}</div>)}
      </div>
      {isVisible && <AddMemberModal setIsVisible={setIsVisible} />}
    </div>
  );
};

export default UserCategory;
