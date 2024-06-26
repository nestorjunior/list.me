import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 15px 25px;
	margin-top: auto;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
	background-color: var(--gray-100)!important;
`;

export const FooterContainerLinks = styled.div`
  flex: 1;
  text-align: center;
  span {
    display: inline-block;
  }
`;
