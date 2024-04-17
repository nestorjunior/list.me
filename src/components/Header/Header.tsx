import { CardHeader } from '../CardHeader/CardHeader'

import './Header.scss'

export function Header() {
	return(
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<header className='wbox-header'>
							<div className="wbox-header__container">
								<h1 className="wbox-header__title">
									wishbox® | <span className='wbox-header__description'>dream, share, connect</span>
								</h1>
								<CardHeader />
							</div>
						</header> 
					</div>
				</div>
			</div>
		</>
	)
}