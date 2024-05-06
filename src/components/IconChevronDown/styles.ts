import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledIconChevronDown = styled(FontAwesomeIcon).attrs({
	icon: faChevronDown
})`
	cursor: pointer;
  margin-top: 20px;  
  font-size: 20px;
  color: var(--gray-500);
	margin-top: 5px;
	font-size: 1.25rem;
	margin-right: 0.625rem;
	animation: ${jump} 1s ease infinite;
`;