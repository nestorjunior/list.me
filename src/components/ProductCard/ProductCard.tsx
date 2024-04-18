import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
import { Star } from '../Star/Star'
import { Heart } from '../Heart/Heart'
import { Like } from '../Like/Like'

import './ProductCard.scss'

interface CardProductProps {
	imageUrl: string;
  productTitle: string; 
  productDescription?: string; 
  productLink?: string; 
	productTags?: string;
	productImageAlt?: string;
	productLastUpdate?: string;
}

export function CardProduct ({
	imageUrl,
  productTitle,
  productDescription,
  productLink,
	productTags,
	productImageAlt,
	productLastUpdate

}:CardProductProps) {
  return (
		// <div className="card mb-3 d-flex justify-content-center">
		// 	<div className="row g-0 align-items-center">
		// 			<div className="col-md-4 d-flex justify-content-center">
		// 					<img src={imageUrl} className="img-fluid" />
		// 			</div>
		// 			<div className="col-md-8">
		// 					<div className='card-body'>
		// 						<div className='card-title h5'><FontAwesomeIcon icon={faThumbTack} /> {productTitle}</div>
		// 						<p className='card-text'><FontAwesomeIcon icon={ faFileLines} /> {productDescription}</p>
		// 						<p className='card-text'><FontAwesomeIcon icon={faLink} /> <a href="#">{productLink}</a></p>
		// 						<div className='card-product-wb__notification'>
		// 							<div className='card-product-wb__tags'>
		// 								<button type="button" className="btn m-1">{productTags}</button>
		// 								<button type="button" className="btn m-1">{productTags}</button>
		// 							</div>
									
		// 							<div className='card-product-wb__buttons'>
		// 								<Like />
		// 								<Heart />
		// 								<Star />
		// 								<Share />
		// 							</div>
		// 						</div>
		// 					</div>
		// 			</div>
		// 	</div>
		// </div>
		<div className="wbox-product-card card mb-3 mt-3">
			<div className="row g-0">
				<div className="col-md-4 d-flex justify-content-center">
					<img src={imageUrl} className="img-fluid" alt={productImageAlt} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<div className='wbox-product-card__main'>
							<div className='wbox-product-card__title'>
								<h5 className="card-title"><FontAwesomeIcon icon={faThumbTack} /> {productTitle}</h5>
								<p className="card-text"><small className="text-body-secondary">{productLastUpdate}</small></p>
							</div>
							<p className="card-text"><FontAwesomeIcon icon={ faFileLines} /> {productDescription}.</p>
							<p className='card-text'><FontAwesomeIcon icon={faLink} /> <a href="#">{productLink}</a></p>
						</div>
						
						<div className='wbox-product-card__footer'>
							<div className='wbox-product-card__tags'>
								<button type="button" className="btn m-1">{productTags}</button>
								<button type="button" className="btn m-1">{productTags}</button>
							</div>
							<div className='wbox-product-card__reactions'>
								<Like />
								<Heart />
								<Star />
								<Share />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};
