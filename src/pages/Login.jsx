import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      Login
      <Link to='/section_one'>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Login;
