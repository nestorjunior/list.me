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

import {
  StyledIconLink,
  StyledIconFileLines,
  StyledIconCircleChevronRight,
  StyledIconHeart,
  StyledIconThumbsUp,
  StyledIconsShareNodes,
  StyledIconStar,
  StyledIconThumbTack,
  StyledIconSun,
  StyledIconMoon,
} from "./styles";

export function IconLink() {
  return <StyledIconLink icon={faLink} />;
}

export function IconFileLines() {
  return <StyledIconFileLines icon={faFileLines} />;
}

export function IconCircleChevronRight() {
  return <StyledIconCircleChevronRight icon={faCircleChevronRight} />;
}

export function IconHeart() {
  return <StyledIconHeart icon={faHeart} />;
}

export function IconLike() {
  return <StyledIconThumbsUp icon={faThumbsUp} />;
}

export function IconShare() {
  return <StyledIconsShareNodes icon={faShareNodes} />;
}

export function IconStar() {
  return <StyledIconStar icon={faStar} />;
}

export function IconThumbTack() {
  return <StyledIconThumbTack icon={faThumbTack} />;
}

export function IconSun() {
  return <StyledIconSun icon={faSun} />;
}

export function IconMoon() {
  return <StyledIconMoon icon={faMoon} />;
}