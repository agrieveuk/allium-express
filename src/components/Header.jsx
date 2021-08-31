import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='logo-title'>
          <img
            src='https://mk0mydrtest3eri40dsq.kinstacdn.com/wp-content/uploads/2019/04/garlic_cloves_750.jpg'
            alt='Allium Logo'
          />
          <h2>Allium Express</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;
