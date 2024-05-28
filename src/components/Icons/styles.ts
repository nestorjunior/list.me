import styled, { css } from "styled-components";
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
  faCirclePlus,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const baseIconStyle = css`
  cursor: pointer;
  color: var(--gray-900);
  font-size: 1.2rem;
  transition: all 0.5s ease-in-out;
	
  &:hover {
    transform: scale(1.2);
  }
`;

const createStyledIcon = (
  icon: IconDefinition,
  additionalStyles = css``
) => styled(FontAwesomeIcon).attrs({
  icon,
})`
  ${baseIconStyle}
  ${additionalStyles}
`;

export const StyledIconLink = createStyledIcon(faLink);
export const StyledIconFileLines = createStyledIcon(faFileLines);
export const StyledIconCircleChevronRight = createStyledIcon(faCircleChevronRight);
export const StyledIconHeart = createStyledIcon(faHeart);
export const StyledIconThumbsUp = createStyledIcon(faThumbsUp);
export const StyledIconsShareNodes = createStyledIcon(faShareNodes);
export const StyledIconStar = createStyledIcon(faStar);
export const StyledIconThumbTack = createStyledIcon(faThumbTack);
export const StyledIconSun = createStyledIcon(faSun);
export const StyledIconMoon = createStyledIcon(faMoon);
export const StyledIconCirclePlus = createStyledIcon(faCirclePlus);
