import { CircleChevron } from '../CircleChevron/CircleChevron';
import './Navbar.scss';

export function Navbar() {
  return (
    <nav className='wbox-navbar navbar'>
      <div className='container-fluid d-flex justify-content-end'>
        <a href='/login' className='nav-link'>
          <CircleChevron /> Login
        </a>
        <a href='/signup' className='nav-link ms-3'>
          <CircleChevron /> Signup
        </a>
      </div>
    </nav>
  );
}
