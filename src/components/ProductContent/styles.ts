import styled from 'styled-components'

export const MainContainer = styled.main`

	@media (min-width: 768px) and (max-width: 1024px) {
		padding-right: 15px;
		padding-left: 15px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		padding-right: 15px;
		padding-left: 15px;
  }

	@media (min-width: 320px) and (max-width: 480px) {
    padding-right: 15px;
		padding-left: 15px;
  }
`

export const SectionContainer = styled.section`
	width: 900px;
	background-color: var(--rose-100);
	border-radius: 25px!important;
	border: 5px solid var(--gray-100)!important;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 481px) and (max-width: 767px) {
    
  }

	@media (min-width: 320px) and (max-width: 480px) {
    
  }
`
export const ProductContainer = styled.div`
	background: var(--rose-100);
	padding-right: 15px;
	padding-left: 15px;

	&:first-child {
		padding-top: 15px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}
	&:last-child {
		padding-bottom: 15px;
		border-bottom-right-radius: 20px;
		border-bottom-left-radius: 20px;

		hr {
			display: none;
		}	
	}
`
export const ProductDivider = styled.hr`
	border: 0;
	height: 1px;
	background: #333;
	background-image: linear-gradient(to right, #ccc, #333, #ccc);
	margin: 0;
`
export const ProductShowMore = styled.div`
	margin-top: 20px;
	background-color: transparent;
`
export const ProductButtonShowMore = styled.button`
	border: 0;
	width: 150px;
	padding: 10px 25px;
	background-color: transparent;
`




