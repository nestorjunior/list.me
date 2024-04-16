import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


import './Like.scss'

export function Like () {
	return(
		<>
			<div className="box-like-wb">
				<FontAwesomeIcon icon={faThumbsUp} />
			</div>
		</>
	)
}