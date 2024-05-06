import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export const StyledIconCircleChevronRight = styled(FontAwesomeIcon).attrs({
	icon: faCircleChevronRight
})`
  cursor: pointer;
  color: var(--gray-500);
	font-size: 1.25rem;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;	