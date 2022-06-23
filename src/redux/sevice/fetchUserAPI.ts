import axios from 'axios';
import IUser from '../../interfaces/User.interface'
import UserState from '../../interfaces/UserSate.interface'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const postRegisteredUser = async (registerData: IUser) => {
  const { data } = await axios.post('/users/signup', registerData);
  return data;
};

const postLoggedInUser = async (loginData: UserState)=> {
  const { data } = await axios.post('/users/login', loginData);
  return data;
};

const getCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

const postLoggedOutUser = async () => {
  await axios.post('/users/logout');
};

const userAPI = {
  postRegisteredUser,
  postLoggedInUser,
  getCurrentUser,
  postLoggedOutUser,
};

export default userAPI;
