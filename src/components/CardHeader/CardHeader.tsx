import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
import { Follow } from '../Follow/Follow';
import { Message } from '../Message/Message';

import './CardHeader.scss'

export function CardHeader () {
  return (
		<div className="card card-header-wb mb-3 d-flex justify-content-center" style={{ height: '230px' }}>
			<div className="row g-0 align-items-center">
					<div className="col-sm-12 col-md-4 d-flex justify-content-center">
							<img src="https://i.pravatar.cc/150" className="card-img img-fluid" />
					</div>
					<div className="col-sm-12 col-md-8">
							<div className='card-body'>
								<div className='card-header-wb__detailsUser'>
									<div className='card-header-wb__detailsUserName'>
										<p><small className="text-body-secondary">@mollybloom</small></p>
										<h5>Molly Bloom</h5>
									</div>
									<div className='card-header-wb__detailsUserFollow'>
										<div className='card-header-wb__detailsUserFollowBox'>
											<span>2435</span>
											<p>Following</p>
										</div>
										<div className='card-header-wb__detailsUserFollowBox'>
											<span>1432</span>
											<p>Followers</p>
										</div>
									</div>
								</div>
								<p>Escritora</p>
								<p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
								<p className='card-text'><FontAwesomeIcon icon={faMapPin} /> São Paulo/SP</p>
								<div className='card-header-wb__notificationUser'>
									<div className='card-header-wb-buttons'>
										<Follow />
										<Message />
									</div>
									<Share />
								</div>
								
							</div>
					</div>
			</div>
	</div>

  );
};
