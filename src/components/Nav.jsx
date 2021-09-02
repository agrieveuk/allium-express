import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='topics'>
      <NavLink to='/topics/coding'>Coding</NavLink>
      <NavLink to='/topics/football'>Football</NavLink>
      <NavLink to='/topics/cooking'>Cooking</NavLink>
    </nav>
  );
};

export default Nav;
