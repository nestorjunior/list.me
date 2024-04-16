import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './Star.scss'

export function Star () {
	return(
		<>
			<div className="box-star-wb">
				<FontAwesomeIcon icon={faStar} />
			</div>
		</>
	)
}