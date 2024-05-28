import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


export const StyledContainerHintButton = styled(FontAwesomeIcon).attrs({
  icon: faPaperPlane
})`
  position: relative;
  background-color: var(--orange-500); 
  border-radius: 4em;
  font-size: 16px; 
  color: white;
  padding: 1em;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition-duration: 0.1s;
    background-color: var(--orange-600); 
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px white;
  }

  &:active:after {
    box-shadow: 0 0 0 0 white;
    opacity: 1;
    transition: 0s;
  }

  &:active {
    top: 1px;
  }
`;