import { ReactNode } from 'react'
import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContainer, HeaderSection } from './styles'
import { AddNewItemButton } from '../AddNewItemButton';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
	return(
		<>
			<HeaderWrapper className="container-fluid">
				<div className="row">
					<div className='col-sm-12 px-0'>
						<HeaderContainer style={{ height: '450px' }}>
							<HeaderSection className='col-sm-12 col-md-12'>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Logo/>
									<AddNewItemButton />
								</div>
								{children}
							</HeaderSection>
						</HeaderContainer> 
					</div>
				</div>
			</HeaderWrapper>
		</>
	)
}

