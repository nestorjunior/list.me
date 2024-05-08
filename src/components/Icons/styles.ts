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
	faCircleChevronDown
} from '@fortawesome/free-solid-svg-icons';

export const StyledIconLink = styled(FontAwesomeIcon).attrs({
	icon: faLink
})`
	cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
`;

export const StyledIconFileLines = styled(FontAwesomeIcon).attrs({
	icon: faFileLines
})`
	cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
`;

export const StyledIconCircleChevronRight = styled(FontAwesomeIcon).attrs({
	icon: faCircleChevronRight
})`
  cursor: pointer;
  color: var(--gray-200);
	font-size: 1rem;
	transition: all .1s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;	

export const StyledIconHeart = styled(FontAwesomeIcon).attrs({
	icon: faHeart
})`
  cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
	transition: all .1s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

export const StyledIconThumbsUp = styled(FontAwesomeIcon).attrs({
	icon: faThumbsUp
})`
  cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
	transition: all .1s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

export const StyledIconPaperPlane = styled(FontAwesomeIcon).attrs({
	icon: faPaperPlane
})`
  cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
	transition: all .1s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;	

export const StyledIconsShareNodes = styled(FontAwesomeIcon).attrs({
	icon: faShareNodes
})`
  cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1.40rem;
	margin-right: 0.625rem;
	transition: all .1s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

export const StyledIconStar = styled(FontAwesomeIcon).attrs({
	icon: faStar
})`
  cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
	transition: all .1s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;	

export const StyledIconThumbTack = styled(FontAwesomeIcon).attrs({
	icon: faThumbTack
})`
  cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
	margin-right: 0.625rem;
`;	

export const StyledIconSun = styled(FontAwesomeIcon).attrs({
	icon: faSun
})`
  cursor: pointer;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 1rem;
	margin-left: 0.625rem;
`;	

export const StyledIconMoon = styled(FontAwesomeIcon).attrs({
	icon: faMoon
})`
  cursor: pointer;
  color: var(--gray-200);
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
  font-size: 20px;
  color: var(--gray-200);
	margin-top: 5px;
	font-size: 2rem;
	margin-right: 0.625rem;
	animation: ${jump} 1s ease infinite;
`;

export const StyledIconChevronDownCircle = styled(FontAwesomeIcon).attrs({
	icon: faCircleChevronDown
})`
	cursor: pointer;
  margin-top: 20px;  
  font-size: 20px;
  color: var(--blue-200);
	margin-top: 5px;
	font-size: 2.3rem;
	margin-right: 0.625rem;
	animation: ${jump} 1s ease infinite;
`;
