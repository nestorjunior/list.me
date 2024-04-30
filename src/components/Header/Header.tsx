import { ReactNode } from 'react'
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
								<div className='wbox-header-container__logo'>
									<h1 className="wbox-header-container__title">wishbox</h1>
									<span className='wbox-header-container__description ml-2'>dream, share, connect</span>
								</div>
								{props.children}
							</section>
						</header> 
					</div>
				</div>
			</div>
		</>
	)
}

