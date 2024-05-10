import styled from 'styled-components'

export const SignupFormContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
`

export const SignupFormStyled = styled.div`
	background-color: var(--white-100);
	border-radius: 25px;
	border: 5px solid var(--gray-100);
	margin-top: -45px;

	.card-header {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
    margin-top: -70px;
  }

	@media (min-width: 320px) and (max-width: 480px) {
		margin-top: -70px;
	}
`
export const StyledTermsLink = styled.a`
  color: var(--black-900);
	font-size: inherit;
	text-decoration: underline;
	cursor: pointer;
`;
