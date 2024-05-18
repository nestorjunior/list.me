import styled from 'styled-components'

export const ProfileFormContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	max-width: 900px;
`

export const ProfileFormImageStyled = styled.div`
	background-color: var(--white-100);
	border-radius: 25px;
	border: 5px solid var(--gray-100);
	margin-top: -70px;

`

export const ProfileFormAccountStyled = styled.div`
	background-color: var(--white-100);
	border-radius: 25px;
	border: 5px solid var(--gray-100);
	margin-top: -70px;

	@media (min-width: 481px) and (max-width: 767px) {
    margin-top: auto;
  }

	@media (min-width: 320px) and (max-width: 480px) {
		margin-top: auto;
	}
`

export const ProfileCardImage = styled.img`
	object-fit: cover;
	border-radius: 50%;
	border: 5px solid var(--blue-100);
`

