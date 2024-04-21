import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
// import { Follow } from '../Follow/Follow';
// import { Message } from '../Message/Message';

import './HeaderCard.scss'

interface HeaderCardProps {
	headerUserImageUrl: string;
	headerUserImageAlt?: string;
  headerUserNickname: string; 
  headerUserName: string; 
  headerUserOccupation?: string; 
	headerUserDescription?: string;
	headerUserLocation?: string;
	headerFollowingCount?: number;
  headerFollowersCount?: number;
	headerFollowUser: string;
	headerMessageUser: string;
} 

export function HeaderCard ({
	headerUserImageUrl,
	headerUserImageAlt,
  headerUserNickname, 
  headerUserName, 
  headerUserOccupation, 
	headerUserDescription,
	headerUserLocation,
	headerFollowingCount,
  headerFollowersCount,
	headerFollowUser,
	headerMessageUser
}: HeaderCardProps) {
  return (
		<>
		<div className="wbox-header-card card mb-3 w-100" style={{ height: '230px', width: '100%' }}>
			<div className="row g-0 align-items-center">
				<div className="col-sm-12 col-md-4 d-flex justify-content-center">
					<img src={headerUserImageUrl} className="img-fluid" alt={headerUserImageAlt} />
				</div>
				<div className="col-sm-12 col-md-8">
					<div className="card-body">
						<div className='wbox-header-card__main'>
							<div className='wbox-header-card__title'>
								<h5 className="card-title"> {headerUserName}</h5>
								<div className='wbox-header-card__followers'>
									<span>
										<p>{headerFollowingCount}</p>
										<small className="text-body-secondary">Following</small>
									</span>

									<span>
										<p>{headerFollowersCount}</p>
										<small className="text-body-secondary">Followers</small>
									</span>

								</div>
							</div>	
							<p className='card-text'> {headerUserNickname}</p>
							<p className='card-text'> {headerUserOccupation}</p>
							<p className="card-text"> {headerUserDescription}.</p>
							<p className="card-text"> {headerUserLocation}.</p>
						</div>
						
						<div className='wbox-header-card__footer'>
							<div className='wbox-header-card__tags'>
								<button type="button" className="btn me-1">{headerFollowUser}</button>
								<button type="button" className="btn me-1">{headerMessageUser}</button>
							</div>
							<div className='wbox-header-card__reactions'>
								<Share />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
  );
};
