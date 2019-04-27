import history from './history';

const logout = () => {
  localStorage.removeItem('@meetapp:user_token');
  localStorage.removeItem('@meetapp:user_id');
  localStorage.removeItem('@meetapp:username');
  history.push('/');
};

export default logout;
