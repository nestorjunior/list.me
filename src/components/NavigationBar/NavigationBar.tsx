import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export function NavigationBar () {
  return (
		<nav className='navbar-wb navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<div className='ms-auto navbar-nav'>
					<a href='/login' className='nav-link'>
						<FontAwesomeIcon icon={faCircleChevronRight} /> Login
					</a>
				</div>
			</div>
		</nav>
  );
};
