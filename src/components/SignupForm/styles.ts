import styled from 'styled-components'

export const SignupFormContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
`
export const SignupFormStyled = styled.form`
	width: 60vw;
	max-width: 600px;
	height: 450px;
	margin-top: -50px;
	background-color: var(--white-100);
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 25px;
	border: 5px solid var(--gray-200);
	padding-left: 15px;
	padding-right: 15px;

	@media (min-width: 320px) and (max-width: 480px) {
    width: 90vw;
  }
`

export const SignupFormTitle = styled.h2`
	margin-bottom: 15px;
	font-size: 1.563rem;
	color: var(--blue-600);
`
export const StyledBoxSubmitButton = styled.div`
	display: flex;
	justify-content: flex-end;
`

export const StyledSubmitButton = styled.button`
	background-color: var(--orange-600);
	color: #fff;
	transition: background-color 0.5s ease;
	&:hover {
		background-color: var(--orange-600-hover);
		color: #fff;
	}
`
export const StyledTermsLink = styled.a`
  color: var(--black-900);
	font-size: inherit;
	text-decoration: underline;
	cursor: pointer;
`;
