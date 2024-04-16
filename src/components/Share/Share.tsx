import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

import './Share.scss'

export function Share() {
	return(
		<>
			<div className="box-share-wb">
				<FontAwesomeIcon icon={faShareNodes} />
			</div>
		</>
	)
}