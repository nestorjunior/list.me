import styled from 'styled-components'

export const FooterContainer = styled.footer`
	margin-top: auto;
  color: var(--gray-200);
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-end; 
  padding: 16px; 
  position: relative;

	a {
		font-family: Roboto Condensed, sans-serif;
		font-weight: 500;
		font-size: 0.875rem;
		color: #212529bf;
		line-height: 1.75;
		text-transform: uppercase;
		padding: 6px 8px;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}

	h5 {
		font-family: Roboto Condensed, sans-serif;
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 1.75;
		text-transform: uppercase;
		padding: 6px 8px;
	}

`