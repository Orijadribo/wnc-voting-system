import React from 'react';
import Home from './content/home/Home';
import Users from './content/users/Users';
import Votes from './content/votes/Votes';
import Report from './content/report/Report';

const Content = ({ selectedScreen }) => {
  return (
    <div className='flex flex-col gap-3 py-6 px-5 md:px-10'>
      {selectedScreen === 'home' && <Home />}
      {selectedScreen === 'users' && <Users />}
      {selectedScreen === 'votes' && <Votes />}
      {selectedScreen === 'report' && <Report />}
    </div>
  );
};

export default Content;
