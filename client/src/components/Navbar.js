import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar '>
            <div className='container eighty space auto'>
                <div className='container'>
                    <Link className='nav-links' to='/'>
                        Home
                    </Link>
                </div>
                <div className='container align'>
                    <Link className='nav-links' to='/add'>
                        Add Character
                    </Link>
                    <Link className='nav-links ' to='/settings'>
                        <FaCog className='icon mg-left-md mg-top-sm' />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
