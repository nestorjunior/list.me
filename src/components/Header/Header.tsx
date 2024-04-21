

import { HeaderCard } from '../HeaderCard/HeaderCard'
import './Header.scss'

export function Header() {
	return(
		<>
			<div className="container-fluid pt-0">
				<div className="row">
					<div className='col-sm-12 px-0'>
						<header className='wbox-header-container'>
							<section className='wbox-header-container__section col-sm-12'>
								<h1 className="wbox-header-container__title">
									wishbox® | <span className='wbox-header-container__description'>dream, share, connect</span>
								</h1>
								<HeaderCard
									headerUserImageUrl='https://i.pravatar.cc/150'
									headerUserImageAlt='Nome usuário'
									headerFollowUser='Follow'
									headerMessageUser='Message'
									headerUserNickname='@mollybloom'
									headerUserName='Molly Bloom'
									headerFollowersCount={23234}
									headerFollowingCount={88488}
									headerUserDescription='Sem saber que era impossível, foi lá e fez!'
									headerUserLocation='Curitiba/PR'
									headerUserOccupation='Escritora'
								/>
							</section>
						</header> 
					</div>
				</div>
			</div>
		</>
	)
}