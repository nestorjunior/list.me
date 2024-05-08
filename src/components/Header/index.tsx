import { ReactNode } from 'react'
import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContainer, HeaderSection } from './styles'

interface HeaderProps {
	children?: ReactNode;
	height: string;
}

export const Header: React.FC<HeaderProps> = (props) => {

	const { height } = props;
	const headerStyle = {
		height: height || '450px'
	}

	return(
		<>
			<HeaderWrapper className="container-fluid">
				<div className="row">
					<div className='col-sm-12 px-0'>
						<HeaderContainer style={headerStyle}>
							<HeaderSection className='col-sm-12 col-md-12'>
								<Logo/>
								{props.children}
							</HeaderSection>
						</HeaderContainer> 
					</div>
				</div>
			</HeaderWrapper>
		</>
	)
}

