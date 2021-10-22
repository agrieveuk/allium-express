const RequireLogin = ({ user, setUser, children }) => {
  if (user) return children;
  else {
    return (
      <section className='login-container'>
        <div className='login'>
          <h3>Welcome!</h3>
          <p>Please login to continue</p>
          <button
            className='animated-button'
            onClick={() => setUser({ username: 'weegembump' })}
          >
            <div className='circle' />
            <span>Continue as guest</span>
          </button>
        </div>
      </section>
    );
  }
};

export default RequireLogin;
