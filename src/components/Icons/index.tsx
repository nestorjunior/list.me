import IconButton from '@mui/material/IconButton';

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

import { 
	StyledIconLink, 
	StyledIconFileLines, 
	StyledIconCircleChevronRight, 
	StyledIconHeart, 
	StyledIconThumbsUp, 
	StyledIconPaperPlane, 
	StyledIconsShareNodes,
	StyledIconStar,
	StyledIconThumbTack,
	StyledIconSun,
	StyledIconMoon,
	StyledIconChevronDown,
	StyledIconChevronDownCircle 
} from './styles';

export function IconLink() {
  return (
    <StyledIconLink icon={faLink} />
  );
}

export function IconFileLines() {
  return (
    <StyledIconFileLines icon={faFileLines} />
  );
}

export function IconCircleChevronRight() {
  return (
    <StyledIconCircleChevronRight icon={faCircleChevronRight} />
  );
}

export function IconHeart () {
	return(
		<StyledIconHeart icon={faHeart} />
	)
}

export function IconLike () {
	return(
		<StyledIconThumbsUp icon={faThumbsUp} />
	)
}

export function IconPaperPlane () {
	return(
		<StyledIconPaperPlane icon={faPaperPlane} />
	)
}

export function IconShare() {
	return(
		<StyledIconsShareNodes icon={faShareNodes} />
	)
}

export function IconStar () {
	return(
		<StyledIconStar icon={faStar} />
	)
}

export function IconThumbTack () {
	return(
		<StyledIconThumbTack icon={faThumbTack} />
	)
}

export function IconSun () {
	return(
		<StyledIconSun icon={faSun} />
	)
}

export function IconMoon () {
	return(
		<StyledIconMoon icon={faMoon} />
	)
}

export function IconChevronDown() {
  return (
		<StyledIconChevronDown icon={faChevronDown} />
  );
}

export function IconChevronDownCircle() {
  return (
		<StyledIconChevronDownCircle icon={faCircleChevronDown} />
  );
}


