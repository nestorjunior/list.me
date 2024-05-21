import { TitleContainer } from './styles';
import { Link } from 'react-router-dom';

export function LogoSecondary() {
  return(
    <>
			<Link to="/">
				<TitleContainer>
					wishbox
				</TitleContainer>
			</Link>
		</>
  )
}