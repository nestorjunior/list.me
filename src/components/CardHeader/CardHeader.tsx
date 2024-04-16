import { Card } from 'react-bootstrap';
import { FaMapPin } from "react-icons/fa";
import './CardHeader.scss'
import Share from '../Share/Share';
import Follow from '../Follow/Follow';
import Message from '../Message/Message';

const CardHeader = () => {
  return (
		<Card className="card card-header-wb mb-3 d-flex justify-content-center" style={{ height: '230px' }}>
			<div className="row g-0 align-items-center">
					<div className="col-md-4 d-flex justify-content-center">
							<Card.Img src="https://i.pravatar.cc/150" className="img-fluid" />
					</div>
					<div className="col-md-8">
							<Card.Body>
								<div className='card-header-wb__detailsUser'>
									<div className='card-header-wb__detailsUserName'>
										<Card.Text><small className="text-body-secondary">@mollybloom</small></Card.Text>
										<Card.Title>Molly Bloom</Card.Title>
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
								<Card.Text>Escritora</Card.Text>
								<Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
								<Card.Text><FaMapPin /> São Paulo/SP</Card.Text>
								<div className='card-header-wb__notificationUser'>
									<div className='card-header-wb-buttons'>
										<Follow />
										<Message />
									</div>
									<Share />
								</div>
								
							</Card.Body>
					</div>
			</div>
	</Card>

  );
};

export default CardHeader;
