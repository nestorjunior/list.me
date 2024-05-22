import { 
	faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import { 
	StyledContainerHintButton,
} from './styles';

export function HintButton() {
	return(
		<>
			<StyledContainerHintButton icon={faPaperPlane} />
		</>
	)
}