import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
import { Star } from '../Star/Star'
import { Heart } from '../Heart/Heart'
import { Like } from '../Like/Like'

import './CardProduct.scss'

interface CardProductProps {
	imageUrl?: string;
  productTitle?: string; 
  productDescription?: string; 
  productLink?: string; 
	productTags?: string;
}

export function CardProduct ({
	imageUrl,
  productTitle,
  productDescription,
  productLink,
	productTags

}:CardProductProps) {
  return (
		<div className="card card-product-wb mb-3 d-flex justify-content-center">
			<div className="row g-0 align-items-center">
					<div className="col-md-4 d-flex justify-content-center">
							<img src={imageUrl} className="img-fluid" />
					</div>
					<div className="col-md-8">
							<div className='card-body'>
								<div className='card-title h5'><FontAwesomeIcon icon={faThumbTack} /> {productTitle}</div>
								<p className='card-text'><FontAwesomeIcon icon={ faFileLines} /> {productDescription}</p>
								<p className='card-text'><FontAwesomeIcon icon={faLink} /> <a href="#">{productLink}</a></p>
								<div className='card-product-wb__notification'>
									<div className='card-product-wb__tags'>
										<button type="button" className="btn m-1">{productTags}</button>
										<button type="button" className="btn m-1">{productTags}</button>
									</div>
									
									<div className='card-product-wb__buttons'>
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
