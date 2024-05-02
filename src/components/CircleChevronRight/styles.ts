import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export const StyledCircleChevronRight = styled(FontAwesomeIcon).attrs({
	icon: faCircleChevronRight
})`
  cursor: pointer;
  font-size: 18px;
	margin-top: 5px;
`;	