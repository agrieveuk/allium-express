import { useParams } from 'react-router-dom';
import Articles from './Articles';

const UserProfile = () => {
  const { username } = useParams();

  return (
    <main className='user-profile'>
      <h3>{`${username}'s user hub`}</h3>
      <h4>Articles by this user</h4>
      <Articles />
    </main>
  );
};

export default UserProfile;
