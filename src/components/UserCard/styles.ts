import styled from 'styled-components'

export const CardWrapper = styled.div`
	height: 230px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 15px;
	/* background: var(--rose-100); */
	border-radius: 25px;
	border: 6px solid var(--white-100);

	@media (min-width: 481px) and (max-width: 767px) {
    height: 350px;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    height: 350px;
  }
`
export const CardImage = styled.img`
	object-fit: cover;
	border-radius: 50%;
	border: 5px solid var(--blue-100);

	@media (min-width: 481px) and (max-width: 767px) {
    width: 6.25rem;
  }

	@media (min-width: 320px) and (max-width: 480px) {
		width: 6.25rem;
	}
`
export const CardContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0;
`
export const CardTitle = styled.h5`
	font-size: 1.5rem;
	color: var(--blue-200);
	font-weight: 600;
`
export const CardFollowers = styled.div`
	display: flex;
	justify-content: space-between;
`
export const CardBoxFollowers = styled.span`
	text-align: center;
	&:first-child {
		margin-right: 25px;
	}
	&:last-child {
		margin-right: 0.625rem;
	}
`
export const CardParagraph = styled.p`
	color: var(--gray-200);
	font-size: 1rem;
	font-weight: 400;
`
export const CardBoxParagraph = styled.p`
	color: var(--gray-200);
	font-size: 1.125rem;
	font-weight: 800;
	margin-bottom: 0;
`
export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;

	@media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
  }

	@media (min-width: 320px) and (max-width: 480px) {
		justify-content: center;
	}

`
export const CardBoxShareUser = styled.div`
	display: flex;
	align-items: center;
`

export const CardBody = styled.div`
	@media (min-width: 481px) and (max-width: 767px) {
    padding-top: 0;
  }

	@media (min-width: 320px) and (max-width: 480px) {
		padding-top: 0;
	}
`
