import { Card } from 'react-bootstrap';
import { FaMapPin } from "react-icons/fa";
import './CardHeader.scss'
import Share from '../Share/Share';

const CardHeader = () => {
  return (
		<Card className="card card-header-wb mb-3 d-flex justify-content-center" style={{ width: '900px', height: '230px' }}>
			<div className="row g-0 align-items-center">
					<div className="col-md-4 d-flex justify-content-center">
							<Card.Img src="https://i.pravatar.cc/150" className="img-fluid" />
					</div>
					<div className="col-md-8">
							<Card.Body>
								<Card.Text><small className="text-body-secondary">@mollybloom</small></Card.Text>
								<Card.Title>Molly Bloom</Card.Title>
								<Card.Text>Escritora</Card.Text>
								<Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
								<Card.Text><FaMapPin /> São Paulo/SP</Card.Text>
								<Share />
								
							</Card.Body>
					</div>
			</div>
	</Card>

  );
};

export default CardHeader;
