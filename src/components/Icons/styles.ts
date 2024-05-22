import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faLink, 
	faFileLines, 
	faCircleChevronRight, 
	faHeart, 
	faThumbsUp, 
	faPaperPlane,
	faShareNodes,
	faStar,
	faThumbTack,
	faSun,
	faMoon,
	faChevronDown,
	faCircleChevronDown,
	faCirclePlus
} from '@fortawesome/free-solid-svg-icons';

export const StyledIconLink = styled(FontAwesomeIcon).attrs({
	icon: faLink
})`
	cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
`;

export const StyledIconFileLines = styled(FontAwesomeIcon).attrs({
	icon: faFileLines
})`
	cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
`;

export const StyledIconCircleChevronRight = styled(FontAwesomeIcon).attrs({
	icon: faCircleChevronRight
})`
  cursor: pointer;
  color: var(--gray-900);
	font-size: 1rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;	

export const StyledIconHeart = styled(FontAwesomeIcon).attrs({
	icon: faHeart
})`
  cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

export const StyledIconThumbsUp = styled(FontAwesomeIcon).attrs({
	icon: faThumbsUp
})`
  cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

export const StyledIconsShareNodes = styled(FontAwesomeIcon).attrs({
	icon: faShareNodes
})`
  cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1.40rem;
	margin-right: 0.625rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

export const StyledIconStar = styled(FontAwesomeIcon).attrs({
	icon: faStar
})`
  cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;	

export const StyledIconThumbTack = styled(FontAwesomeIcon).attrs({
	icon: faThumbTack
})`
  cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
`;	

export const StyledIconSun = styled(FontAwesomeIcon).attrs({
	icon: faSun
})`
  cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
	margin-left: 0.625rem;
`;	

export const StyledIconMoon = styled(FontAwesomeIcon).attrs({
	icon: faMoon
})`
  cursor: pointer;
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 1rem;
	margin-left: 0.625rem;
`;	

// Function that affects the icon: show more products.
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
  color: var(--gray-900);
	margin-top: 5px;
	font-size: 3rem;
	margin-right: 0.625rem;
	animation: ${jump} 1s ease infinite;
`;

export const StyledIconChevronDownCircle = styled(FontAwesomeIcon).attrs({
	icon: faCircleChevronDown
})`
	cursor: pointer;
  margin-top: 20px;  
  font-size: 20px;
  color: var(--orange-base);;
	margin-top: 5px;
	font-size: 2.8rem;
	margin-right: 0.625rem;
	animation: ${jump} 1s ease infinite;
`;

export const StyledIconPaperPlane = styled(FontAwesomeIcon).attrs({
  icon: faPaperPlane
})`
  position: relative;
  background-color: var(--orange-base);
  border-radius: 4em;
  font-size: 16px; 
  color: white;
  padding: 0.6em;
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
    background-color: var(--orange-500); 
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

export const StyledIconCirclePlus = styled(FontAwesomeIcon).attrs({
	icon: faCirclePlus
})`
	position: relative;
  background-color: var(--orange-base);
  border-radius: 4em;
  font-size: 25px; 
  color: white;
  padding: 0.6em;
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
    background-color: var(--orange-500); 
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