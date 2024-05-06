import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

export const StyledIconThumbTack = styled(FontAwesomeIcon).attrs({
	icon: faThumbTack
})`
  cursor: pointer;
  color: var(--gray-500);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
`;	