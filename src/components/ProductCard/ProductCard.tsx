import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
import { Star } from '../Star/Star'
import { Heart } from '../Heart/Heart'
import { Like } from '../Like/Like'

import './ProductCard.scss'

interface ProductCardProps {
	imageUrl: string;
  productTitle: string; 
  productDescription?: string; 
  productLink?: string; 
	productTags?: string;
	productImageAlt?: string;
	productLastUpdate?: string;
}

export function ProductCard ({
	imageUrl,
  productTitle,
  productDescription,
  productLink,
	productTags,
	productImageAlt,
	productLastUpdate

}:ProductCardProps) {
  return (
		<div className="wbox-product-card card mb-3 mt-3">
			<div className="row g-0 px-3 py-3">
				<div className="col-md-4 d-flex justify-content-center">
					<img src={imageUrl} className="img-fluid" alt={productImageAlt} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<div className='wbox-product-card__main'>
							<div className='wbox-product-card__header'>
								<div className='wbox-product-card__title'>
									<FontAwesomeIcon icon={faThumbTack} /><h5 className="card-title"> {productTitle}</h5>
								</div>
								<small className="text-body-secondary">{productLastUpdate}</small>
							</div>
							<div className='wbox-product-card__description'>
								<FontAwesomeIcon icon={ faFileLines} /><p className="card-text"> {productDescription}.</p>
							</div>
							<FontAwesomeIcon icon={faLink} /><a href="#">{productLink}</a>
						</div>
						
						<div className='wbox-product-card__footer'>
							<div className='wbox-product-card__tags'>
								<a href='#'>{`#${productTags}`}</a>
								<a href='#'>{`#${productTags}`}</a>
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
