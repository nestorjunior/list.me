import styled from 'styled-components'

export const ButtonStyled = styled.button`
	/* --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem; */
	padding: 0.375rem 0.75rem;
	transition: background-color 0.5s, color 0.5s;
	border: 0;
	border-radius: 5px;
	font-size: 0.875rem;
	box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
`

export const PrimaryButton = styled(ButtonStyled)`
	background-color: var(--orange-200);
	color: #fff;
	&:hover {
		background-color: var(--orange-200-hover);
		color: #fff;
	}
`

export const SecondaryButton = styled(ButtonStyled)`
	background-color: var(--blue-200);
	color: #fff;
	&:hover {
		background-color: var(--blue-200-hover);
		color: #fff;
	}
`