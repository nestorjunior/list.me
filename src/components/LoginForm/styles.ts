import styled from 'styled-components'

export const LoginFormContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
`
export const LoginFormStyled = styled.form`
	width: 60vw;
	max-width: 600px;
	height: 350px;
	margin-top: -50px;
	background-color: var(--white-100);
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 25px;
	border: 5px solid var(--gray-100);
	padding-left: 15px;
	padding-right: 15px;

	@media (min-width: 320px) and (max-width: 480px) {
    width: 90vw;
  }
`
export const LoginFormTitle = styled.h2`
	margin-bottom: 15px;
	font-size: 1.5rem;
	color: var(--blue-200);
	font-weight: 600;
`
export const LoginBoxSubmitButton = styled.div`
	display: flex;
	justify-content: flex-end;
`

export const StyledSubmitButton = styled.button`
	background-color: var(--orange-200);
	color: #fff;
	transition: background-color 0.3s, color 0.3s;
	border: 0;
	font-size: 0.875rem;
	&:hover {
		background-color: var(--orange-200);
		color: #fff;
	}
`