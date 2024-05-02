import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
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

interface LinkProps {
	to: string;
	children: React.ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  return (
    <StyledLink href={to}>
      {children}
    </StyledLink>
  );
};

export default Link;
