import React from 'react';
import Home from './content/Home';
import Users from './content/Users';
import Votes from './content/Votes';
import Report from './content/Report';

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
