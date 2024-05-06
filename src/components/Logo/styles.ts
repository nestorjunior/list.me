import styled from 'styled-components'

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;

	@media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
  }

`
export const TitleContainer = styled.h1`
	font-size: 2rem;
	color: var(--blue-600);
	font-weight: bolder;

	&::after {
		font-weight: lighter;
		content: " |";
	}

	@media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.6rem;
  }

`
export const DescriptionContainer = styled.span`
	font-size: 1em;
	color: var(--blue-600);
	font-weight: 100;
	vertical-align: middle;
`