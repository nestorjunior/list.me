import styled from 'styled-components';

export const StyledLink = styled.a`
  font-size: 1rem;
	color: var(--gray-200);
	text-decoration: none;
	transition: all .1s ease-in-out;

	&:first-child {
		margin-right: 15px;
	}	

	&:hover {
		color: var(--gray-200);
	}
`;