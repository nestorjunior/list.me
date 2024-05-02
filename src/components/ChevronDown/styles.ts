import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const StyledChevronDown = styled(FontAwesomeIcon).attrs({
	icon: faChevronDown
})`
  margin-top: 20px;
  cursor: pointer;
  font-size: 40px;
`;