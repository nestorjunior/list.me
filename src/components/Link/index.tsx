import React from 'react';
import  { StyledLink } from './styles'

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
