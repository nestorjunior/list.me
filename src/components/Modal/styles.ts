import styled from 'styled-components'

export const StyledBackgroundModal = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgb(0,0,0,0.7);
	z-index: 1000;
`

export const StyledModal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	border-radius: 25px;
	border: 5px solid var(--gray-100);
	padding: 25px;
	background-color: var(--white-100);
	color: var(--gray-600);
	width: 600px;	
`
export const StyledModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
`
export const StyledModalTitle = styled.h5`
	font-size: 1.563rem;
	color: var(--blue-600);
`

export const StyledModalBody = styled.div`
	
`

export const StyledModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
`
export const StyledModalButtonClose = styled.button`
	border: 0;
	padding: 5px;
`

export const StyledModalButton = styled.button`
	background-color: var(--orange-600);
	color: #fff;
	transition: background-color 0.5s ease;
	border: 0;
	&:hover {
		background: var(--orange-600-hover);
	}
`

