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
`
export const StyledCardModal = styled.div`
	background-color: var(--white-100);
	border-radius: 25px;
	border: 5px solid var(--gray-100);
	margin-top: -45px;

	.card-header{
		display: flex;
		justify-content: space-between;
	}

`
export const StyledModalClose = styled.button`
	border: 0;
	padding: 5px;
`
export const StyledModalButtonClose = styled.button`
		background-color: var(--orange-200);
	color: #fff;
	transition: background-color 0.5s, color 0.5s;
	border: 0;
	font-size: 1rem;
	box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
	&:hover {
		background-color: var(--orange-200-hover);
		color: #fff;
	}
	&:active {
		background-color: var(--orange-200-hover)!important;
		color: #fff!important;
		border-color: var(--orange-200-hover)!important;
	}
`

