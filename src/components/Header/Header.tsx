import { ReactNode } from 'react'
import { Logo } from '../Logo';
import './Header.scss'

interface HeaderProps {
	children?: ReactNode;
	height: string;
}

export const Header: React.FC<HeaderProps> = (props) => {

	const { height } = props;
	const headerStyle = {
		height: height || '400px'
	}

	return(
		<>
			<div className="container-fluid pt-0">
				<div className="row">
					<div className='col-sm-12 px-0'>
						<header className='wbox-header-container' style={headerStyle}>
							<section className='wbox-header-container__section col-sm-12'>
								<Logo/>
								{props.children}
							</section>
						</header> 
					</div>
				</div>
			</div>
		</>
	)
}

