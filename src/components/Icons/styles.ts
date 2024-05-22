import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faFileLines,
  faCircleChevronRight,
  faHeart,
  faThumbsUp,
  faShareNodes,
  faStar,
  faThumbTack,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export const StyledIconLink = styled(FontAwesomeIcon).attrs({
  icon: faLink,
})`
  cursor: pointer;
  color: var(--gray-900);
  margin-top: 5px;
  font-size: 1rem;
`;

export const StyledIconFileLines = styled(FontAwesomeIcon).attrs({
  icon: faFileLines,
})`
  cursor: pointer;
  color: var(--gray-900);
  margin-top: 5px;
  font-size: 1rem;
  margin-right: 0.625rem;
`;

export const StyledIconCircleChevronRight = styled(FontAwesomeIcon).attrs({
  icon: faCircleChevronRight,
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
  icon: faHeart,
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
  icon: faThumbsUp,
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
  icon: faShareNodes,
})`
  cursor: pointer;
  color: var(--gray-900);
  margin-top: 5px;
  font-size: 1.4rem;
  margin-right: 0.625rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledIconStar = styled(FontAwesomeIcon).attrs({
  icon: faStar,
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
  icon: faThumbTack,
})`
  cursor: pointer;
  color: var(--gray-900);
  margin-top: 5px;
  font-size: 1rem;
  margin-right: 0.625rem;
`;

export const StyledIconSun = styled(FontAwesomeIcon).attrs({
  icon: faSun,
})`
  cursor: pointer;
  color: var(--gray-900);
  margin-top: 5px;
  font-size: 1rem;
  margin-left: 0.625rem;
`;

export const StyledIconMoon = styled(FontAwesomeIcon).attrs({
  icon: faMoon,
})`
  cursor: pointer;
  color: var(--gray-900);
  margin-top: 5px;
  font-size: 1rem;
  margin-left: 0.625rem;
`;
