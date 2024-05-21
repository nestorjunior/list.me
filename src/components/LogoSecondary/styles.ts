import styled from 'styled-components'

// a {
// 	text-decoration: none;
// 	&:hover{
// 		text-decoration: none;
// 	}
// }

export const TitleContainer = styled.h1`
	font-size: 1.5rem;
	font-weight: bolder;
	color: var(--blue-900);

	@media (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
`