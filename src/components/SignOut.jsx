const SignOut = ({ user: { username }, setUser }) => {
  const signOut = () => {
    setUser(null);
  };

  return (
    <div className='signed-in'>
      <p>{`Signed in as ${username}`}</p>
      <button className='animated-button' onClick={signOut}>
        <div className='circle' />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default SignOut;
