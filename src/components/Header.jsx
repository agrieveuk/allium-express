import { Link } from 'react-router-dom';
import garlic_cloves from '../assets/garlic_cloves.png';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='logo-title'>
          <img id='logo' src={garlic_cloves} alt='Allium Logo' />
          <h2>The Allium</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;
