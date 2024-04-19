import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export function Heart () {
	return(
		<>
			<div className="box-heart-wb">
				<FontAwesomeIcon icon={faHeart} />
			</div>
		</>
	)
}