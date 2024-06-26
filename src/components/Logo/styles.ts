import styled from "styled-components";

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	@media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
  }

	a {
		text-decoration: none;
		&:hover{
			text-decoration: none;
		}
	}
`;
export const TitleContainer = styled.h1`
	font-size: 2.5rem;
	font-weight: bolder;
	color: var(--blue-900);
	&::after {
		font-weight: lighter;
		content: " |";
	}

	@media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
export const DescriptionContainer = styled.span`
	font-size: 1.2em;
	margin-top: 5px;
	color: var(--blue-900);

	@media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.1em;
  }

`;
