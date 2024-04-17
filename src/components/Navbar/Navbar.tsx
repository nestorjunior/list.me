import { CircleChevron } from '../CircleChevron/CircleChevron';
import './Navbar.scss'

export function Navbar () {
  return (
		<nav className='wbox-navbar navbar'>
			<div className='container-fluid'>
				<a href='/login' className='nav-link ms-auto'>
					 <CircleChevron /> Login
				</a>
			</div>
		</nav>
  );
};
