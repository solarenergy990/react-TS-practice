import IUser from './User.interface';

export default interface UserSate {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isLoading?: boolean;
}
