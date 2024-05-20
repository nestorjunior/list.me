import { LogoContainer, TitleContainer, DescriptionContainer } from './styles'
import { Link } from 'react-router-dom';

export function Logo() {
  return(
    <LogoContainer>
			<Link to="/">
				<TitleContainer>
					wishbox
				</TitleContainer>
			</Link>
			<DescriptionContainer 
				className='ml-2'
			>
				dream, share, connect
			</DescriptionContainer>
		</LogoContainer>
  )
}