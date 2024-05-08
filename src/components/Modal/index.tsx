import React, { Children } from 'react'

import { 
	StyledModal, 
	StyledBackgroundModal, 
	StyledCardModal, 
	StyledModalButtonClose,
	StyledModalClose 
} from './styles'

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
						<StyledCardModal className="card mb-4">
							<div className="card-header">
								<h5>Title Modal</h5>
								<StyledModalClose className='btn-close' onClick={onClose} />
							</div>
							<div className="card-body">
								{children}
							</div>
							<div className='card-footer'>
								<StyledModalButtonClose type="button" className="btn ms-auto" onClick={onClose}>Close</StyledModalButtonClose>
							</div>
						</StyledCardModal>
					</StyledModal>
				</StyledBackgroundModal>
			</>
		)	
	}

	return null
}
