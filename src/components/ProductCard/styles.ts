import styled from 'styled-components'

export const CardWrapper = styled.div`
	border: none;
	border-radius: 25px;
	padding-top: 15px;
	padding-bottom: 15px;
`
export const CardImage = styled.img`
	border-radius: 10%;
	border: 5px solid var(--gray-100)!important;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 6.25rem;
	}
`
export const CardBody = styled.div`
	
`
export const CardContent = styled.div`
	margin-bottom: 5px;
`
export const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
`
export const CardTitle = styled.div`
	display: flex;
	align-items: baseline;
	color: var(--gray-600);
`
export const CardDescription = styled.div`
	display: flex;
	align-items: baseline;
`
export const CardLink = styled.div`
	a {
		color: var(--gray-600);
		transition: background-color 0.3s, color 0.3s;
		font-size: 0.875rem;
		text-decoration: none;
		&:hover {
			color: var(--gray-600);
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
		color: var(--blue-bold);
		transition: background-color 0.3s, color 0.3s;
		font-size: 0.875rem;
		text-decoration: none;
		margin-right: 5px;
		&:hover {
			color: var(--blue-bold);
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
		transition: all .2s ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	}
`