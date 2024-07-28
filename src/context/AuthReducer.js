const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, currentUser: action.payload };
    case 'LOGOUT':
      return { ...state, currentUser: null };
    case 'ADMIN_LOGIN':
      return { ...state, currentUser: action.payload, isAdmin: true };
    default:
      return state;
  }
};

export default AuthReducer;
