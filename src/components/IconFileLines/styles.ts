import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';


export const StyledIconFileLines = styled(FontAwesomeIcon).attrs({
	icon: faFileLines
})`
	cursor: pointer;
  color: var(--gray-500);
	margin-top: 5px;
	font-size: 1.25rem;
	margin-right: 0.625rem;
`;