import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


export const StyledIconLink = styled(FontAwesomeIcon).attrs({
	icon: faLink
})`
	cursor: pointer;
  color: var(--gray-500);
	margin-top: 5px;
	font-size: 1.25rem;
`;