import Link from '../Link/Link';
import { CircleChevron } from '../CircleChevron/CircleChevron';
import './Navbar.scss';

export function Navbar() {
  return (
    <nav className='wbox-navbar navbar'>
      <div className='container-fluid d-flex justify-content-end'>
				<Link to="/login"><CircleChevron /> Login</Link>
				<Link to="/signup"><CircleChevron /> Signup</Link>
      </div>
    </nav>
  );
}
