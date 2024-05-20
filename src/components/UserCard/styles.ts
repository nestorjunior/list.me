import styled from 'styled-components'

export const CardWrapper = styled.div`
	height: 230px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 15px;
	border-radius: 25px;
	border: none;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

	@media (min-width: 481px) and (max-width: 767px) {
    height: 370px;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    height: 370px;
  }
`
export const CardContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0;
`
export const CardTitle = styled.h5`
	font-size: 1.6rem;
	color: var(--blue-700);
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
	color: var(--gray-500);
	font-size: 1rem;
	font-weight: 400;
`
export const CardBoxParagraph = styled.p`
	color: var(--gray-500);
	font-size: 1.2rem;
	font-weight: 600;
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

	@media (min-width: 481px) and (max-width: 767px) {
    margin-left: 10px;
  }

	@media (min-width: 320px) and (max-width: 480px) {
		margin-left: 10px;
	}
`

export const CardBody = styled.div`
	@media (min-width: 481px) and (max-width: 767px) {
    padding-top: 0;
  }

	@media (min-width: 320px) and (max-width: 480px) {
		padding-top: 0;
	}
`
