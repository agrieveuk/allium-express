import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useApi';
import Articles from './Articles';

const UserProfile = () => {
  const { username } = useParams();
  const { user, isLoading } = useUser(username);

  if (isLoading) return <h3>Any moment now...</h3>;
  return (
    <main className='user-profile'>
      <img
        src={user.avatar_url}
        alt='user avatar'
        className='user-profile-avatar-img'
      />
      <h3>{`${username}'s user hub`}</h3>
      <h4>Articles by {user.name}</h4>
      <Articles />
    </main>
  );
};

export default UserProfile;
