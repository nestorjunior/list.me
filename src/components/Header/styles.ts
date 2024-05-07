import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding-top: 0;
	
	@media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 25px;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
	background: var(--blue-100);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const HeaderSection = styled.section`
  border-radius: 25px !important;
	max-width: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 10px 25px 10px;
  }

	@media (min-width: 481px) and (max-width: 767px) {
    padding: 0 10px 25px 10px;
		width: 100%;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    padding: 0 10px 25px 10px;
  }

`;

