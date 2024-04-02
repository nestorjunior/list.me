import { Card } from 'react-bootstrap';
import { BsFillPinAngleFill } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import Share from '../Share/Share';

import './CardProducts.scss'

const CardProducts = () => {
  return (
		<Card className="card card-products-wb mb-3 d-flex justify-content-center">
			<div className="row g-0 align-items-center">
					<div className="col-md-4 d-flex justify-content-center">
							<Card.Img src="https://picsum.photos/id/1/130/130" className="img-fluid" />
					</div>
					<div className="col-md-8">
							<Card.Body>
								<Card.Title><BsFillPinAngleFill /> Camiseta Insider</Card.Title>
								<Card.Text><MdOutlineDescription /> Preta, tamanho P, Gola V</Card.Text>
								<Card.Text><FaLink /> <a href="#">https://www.insiderstore.com.br/products/tech-t-shirt?variant=43168998293653</a></Card.Text>
								<button type="button" className="btn m-1">
									Roupas
								</button>
								<button type="button" className="btn m-1">
									2024
								</button>
								<Share />
							</Card.Body>
					</div>
					<hr />
			</div>
	</Card>

  );
};

export default CardProducts;
