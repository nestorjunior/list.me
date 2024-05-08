import styled from 'styled-components'

export const CardWrapper = styled.div`
	border: none;
	border-radius: 25px;
	padding-top: 15px;
	padding-bottom: 15px;
`
export const CardImage = styled.img`
	border-radius: 10%;
	border: 5px solid var(--gray-100);
	/* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); */
	@media (min-width: 320px) and (max-width: 480px) {
		width: 6.25rem;
	}
`
export const CardBody = styled.div`
	/* padding-right: 25px; */
`
export const CardContent = styled.div`
	margin-bottom: 5px;
`
export const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
`
export const CardBoxTitle = styled.div`
	display: flex;
	align-items: baseline;
`
export const CardTitle = styled.h5`
	color: var(--gray-200);
	font-weight: 600;
	font-size: 1.5rem;
`
export const CardDescription = styled.div`
	display: flex;
	align-items: baseline;
`
export const CardParagraphDescription = styled.p`
	color: var(--gray-200);
	font-weight: normal;
	font-size: 1rem;
`
export const CardLink = styled.div`
	a {
		color: var(--gray-200);
		transition: background-color 0.5s, color 0.5s;
		font-size: 1rem;
		&:hover {
			color: var(--gray-200);
			text-decoration: underline;
		}
	}
`
export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
`
export const CardTags = styled.div`
	a {
		color: var(--blue-300);
		transition: background-color 0.5s, color 0.5s;
		font-size: 0.875rem;
		text-decoration: none;
		margin-right: 5px;
		&:hover {
			color: var(--blue-300);
			text-decoration: underline;
		}
	}
`
export const CardReactions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-content: center;

	svg {
		cursor: pointer;
		font-size: 1.25rem;
		margin-right: 0.625rem;
		transition: all .1s ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	}
`
