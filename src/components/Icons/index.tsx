import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

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
    <IconButton style={{padding: '2px'}}>
			<StyledIconLink icon={faLink} />
		</IconButton>
  );
}

export function IconFileLines() {
  return (
    <IconButton style={{padding: '2px'}}>
			<StyledIconFileLines icon={faFileLines} />
		</IconButton>
  );
}

export function IconCircleChevronRight() {
  return (
    <IconButton style={{padding: '2px'}}>
			<StyledIconCircleChevronRight icon={faCircleChevronRight} />
		</IconButton>
  );
}

export function IconHeart () {
	return(
		<IconButton style={{padding: '2px'}}>
			<StyledIconHeart icon={faHeart} />
		</IconButton>
	)
}

export function IconLike () {
	return(
		<IconButton style={{padding: '2px'}}>
			<StyledIconThumbsUp icon={faThumbsUp} />
		</IconButton>
	)
}

export function IconPaperPlane () {
	return(
		<IconButton aria-label="Hint">
			<StyledIconPaperPlane icon={faPaperPlane} />
		</IconButton>
	)
}

export function IconShare() {
	return(
		<IconButton style={{padding: '2px'}}>
			<StyledIconsShareNodes icon={faShareNodes} />
		</IconButton>
	)
}

export function IconStar () {
	return(
		<IconButton style={{padding: '2px'}}>
			<StyledIconStar icon={faStar} />
		</IconButton>
	)
}

export function IconThumbTack () {
	return(
		<IconButton style={{padding: '2px'}}>
			<StyledIconThumbTack icon={faThumbTack} />
		</IconButton>
	)
}

export function IconSun () {
	return(
		<IconButton style={{padding: '2px'}}>
			<StyledIconSun icon={faSun} />
		</IconButton>
	)
}

export function IconMoon () {
	return(
		<IconButton style={{padding: '2px'}}>
			<StyledIconMoon icon={faMoon} />
		</IconButton>
	)
}

export function IconChevronDown() {
  return (
		<IconButton style={{padding: '2px'}}>
    	<StyledIconChevronDown icon={faChevronDown} />
		</IconButton>
  );
}

export function IconChevronDownCircle() {
  return (
		<IconButton style={{padding: '2px'}}>
    	<StyledIconChevronDownCircle icon={faCircleChevronDown} />
		</IconButton>
  );
}


