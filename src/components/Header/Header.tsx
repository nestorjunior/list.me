import { HeaderCard } from '../HeaderCard/HeaderCard'

import './Header.scss'

export function Header() {
	return(
		<>
			<div className="container-fluid pt-0">
				<div className="row">
					<div className='col-sm-12'>
						<header className='wbox-header-container'>
							<div>
								<h1 className="wbox-header-container__title">
									wishbox® | <span className='wbox-header-container__description'>dream, share, connect</span>
								</h1>
								<HeaderCard />
							</div>
						</header> 
					</div>
				</div>
			</div>
		</>
	)
}