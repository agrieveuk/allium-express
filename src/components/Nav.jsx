import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='topics'>
      <NavLink activeClassName='active-topic' to='/topics/coding'>
        Coding
      </NavLink>
      <NavLink activeClassName='active-topic' to='/topics/football'>
        Football
      </NavLink>
      <NavLink activeClassName='active-topic' to='/topics/cooking'>
        Cooking
      </NavLink>
    </nav>
  );
};

export default Nav;
