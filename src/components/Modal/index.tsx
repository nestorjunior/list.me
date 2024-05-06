import React, { Children } from 'react'

import { StyledModal, StyledBackgroundModal, StyledModalButton, StyledModalButtonClose, StyledModalHeader, StyledModalTitle, StyledModalBody, StyledModalFooter } from './styles'

interface ComponentProps {
	isOpen: boolean;
	children: any;
	onClose: ()=> void;
}

export const Modal: React.FC<ComponentProps> = ({isOpen, children, onClose}) => {
	if (isOpen) {
		return (
			<>
				<StyledBackgroundModal>
					<StyledModal>
						<StyledModalHeader>
							<StyledModalTitle>Title Modal</StyledModalTitle>
							<StyledModalButtonClose className='btn-close' onClick={onClose} />
						</StyledModalHeader>
						
						<StyledModalBody>
							{children}
						</StyledModalBody>
						
						<StyledModalFooter>
							<StyledModalButton className='btn btn-secondary' onClick={onClose}>
								Close
							</StyledModalButton>
						</StyledModalFooter>
					</StyledModal>
				</StyledBackgroundModal>
			</>
		)	
	}

	return null
}
