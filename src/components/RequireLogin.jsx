const RequireLogin = ({ user, setUser, children }) => {
  if (user) return children;
  else {
    return (
      <section>
        <h2>Welcome!</h2>
        <p>Please login to continue</p>
        <button onClick={() => setUser({ username: 'weegembump' })}>
          Continue as guest
        </button>
      </section>
    );
  }
};

export default RequireLogin;
