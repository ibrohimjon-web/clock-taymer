import { Link } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import { MdTimer } from 'react-icons/md';
import { FaStopwatch } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs';
import './Navbar.css';

const Navbar = ({ thema, toggleThema }) => {
  return (
    <nav className={`Navbar navbar ${thema}`}>
      <div className='navbar-wrapper'>
        <div className='nav-left'>
          <Link to='/' className='linka logo'>
            <FiClock className='nav-icon logo-icon' />
            SOAT APP
          </Link>
        </div>

        <ul className='nav-center'>
          <li>
            <Link className='linka' to='/taymer'>
              <MdTimer className='nav-icon' />
              Taymer
            </Link>
          </li>
          <li>
            <Link className='linka' to='/sekundomer'>
              <FaStopwatch className='nav-icon' />
              Sekundomer
            </Link>
          </li>
          <li>
            <Link className='linka' to='/'>
              <BsClock className='nav-icon' />
              Soat
            </Link>
          </li>
        </ul>

        <div className='nav-right'>
          <button className='thema-button' onClick={toggleThema}>
            {thema === 'light' ? <BsMoonStars /> : <BsBrightnessHigh />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
