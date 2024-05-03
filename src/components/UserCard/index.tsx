import { Share } from '../Share';
import { CardWrapper } from './styles'

interface UserCardProps {
	UserCardImageUrl: string;
	UserCardImageAlt?: string;
  UserCardNickname: string; 
  UserCardName: string; 
  UserCardOccupation?: string; 
	UserCardDescription?: string;
	UserCardLocation?: string;
	UserCardFollowingCount?: number;
  UserCardFollowersCount?: number;
	UserCardFollow: string;
	UserCardMessage: string;
} 

export function UserCard ({
	UserCardImageUrl,
	UserCardImageAlt,
  UserCardNickname, 
  UserCardName, 
  UserCardOccupation, 
	UserCardDescription,
	UserCardLocation,
	UserCardFollowingCount,
  UserCardFollowersCount,
	UserCardFollow,
	UserCardMessage
}: UserCardProps) {
  return (
		<>
		<CardWrapper>
			<div className="row g-0 align-items-center">
				<div className="col-sm-12 col-md-4 d-flex justify-content-center">
					<img src={UserCardImageUrl} className="img-fluid" alt={UserCardImageAlt} />
				</div>
				<div className="col-sm-12 col-md-8">
					<div className="card-body">
						<div className='wbox-header-card__main'>
							<div className='wbox-header-card__title'>
								<h5 className="card-title"> {UserCardName}</h5>
								<div className='wbox-header-card__followers'>
									<span>
										<p>{UserCardFollowingCount}</p>
										<small className="text-body-secondary">Following</small>
									</span>

									<span>
										<p>{UserCardFollowersCount}</p>
										<small className="text-body-secondary">Followers</small>
									</span>

								</div>
							</div>	
							<p className='card-text'> {UserCardNickname}</p>
							<p className='card-text'> {UserCardOccupation}</p>
							<p className="card-text"> {UserCardDescription}.</p>
							<p className="card-text"> {UserCardLocation}.</p>
						</div>
						
						<div className='wbox-header-card__footer'>
							<div className='wbox-header-card__tags'>
								<button type="button" className="btn me-1">{UserCardFollow}</button>
								<button type="button" className="btn me-1">{UserCardMessage}</button>
							</div>
							<div className='wbox-header-card__reactions'>
								<Share />
							</div>
						</div>
					</div>
				</div>
			</div>
		</CardWrapper>
	</>
  );
};
