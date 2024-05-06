import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const StyledIconThumbsUp = styled(FontAwesomeIcon).attrs({
	icon: faThumbsUp
})`
  cursor: pointer;
  color: var(--gray-500);
	margin-top: 5px;
	font-size: 1.25rem;
	margin-right: 0.625rem;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;	