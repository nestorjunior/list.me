import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
import { Star } from '../Star/Star'
import { Heart } from '../Heart/Heart'
import { Like } from '../Like/Like'

import './CardProducts.scss'

export function CardProducts () {
  return (
		<div className="card card-products-wb mb-3 d-flex justify-content-center">
			<div className="row g-0 align-items-center">
					<div className="col-md-4 d-flex justify-content-center">
							<img src="https://picsum.photos/id/1/130/130" className="img-fluid" />
					</div>
					<div className="col-md-8">
							<div className='card-body'>
								<div className='card-title h5'><FontAwesomeIcon icon={faThumbTack} /> Camiseta Insider</div>
								<p className='card-text'><FontAwesomeIcon icon={ faFileLines} /> Preta, tamanho P, Gola V</p>
								<p className='card-text'><FontAwesomeIcon icon={faLink} /> <a href="#">https://www.insiderstore.com.br/products/tech-t-shirt?variant=43168998293653</a></p>
								<div className='card-products-wb__notification'>
									<div className='card-products-wb-tags'>
										<button type="button" className="btn m-1">Roupas</button>
										<button type="button" className="btn m-1">2024</button>
									</div>
									
									<div className='card-products-wb-buttons'>
										<Like />
										<Heart />
										<Star />
										<Share />
									</div>
								</div>
							</div>
					</div>
					<hr />
			</div>
	</div>

  );
};
