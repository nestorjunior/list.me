import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	padding: 15px 25px;
`
export const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	& > :first-child {
    margin-right: auto;
		text-decoration: none;
  }
`
