import styled from 'styled-components';

export const StyledLink = styled.a`
  font-size: 1rem;
	color: var(--gray-500);
	text-decoration: none;
	transition: all .2s ease-in-out;

	&:first-child {
		margin-right: 15px;
	}	

	&:hover {
		color: var(--gray-500-hover);
	}
`;