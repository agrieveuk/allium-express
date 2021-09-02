const SignOut = ({ user: { username }, setUser }) => {
  const signOut = () => {
    setUser(null);
  };

  return (
    <div className='signed-in'>
      <p>{`Signed in as ${username}`}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
