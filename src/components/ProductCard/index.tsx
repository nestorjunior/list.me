import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons';

import { IconShare } from '../IconShare';
import { IconStar } from '../IconStar'
import { IconHeart } from '../IconHeart'
import { IconLike } from '../IconLike'

import './styles'

import { 
	CardWrapper,
	CardImage,
	CardBody,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
	CardTags,
	CardReactions
} from './styles'

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
		<CardWrapper className="card">
			<div className="row g-0">
				<div className="col-md-4 d-flex justify-content-center">
					<CardImage src={imageUrl} className="img-fluid" alt={productImageAlt} />
				</div>
				<div className="col-md-8">
					<CardBody className="card-body">
						<CardContent>
							<CardHeader>
								<CardTitle>
									<FontAwesomeIcon icon={faThumbTack} /><h5 className="card-title"> {productTitle}</h5>
								</CardTitle>
								<small className="text-body-secondary">{productLastUpdate}</small>
							</CardHeader>
							<CardDescription>
								<FontAwesomeIcon icon={ faFileLines} /><p className="card-text"> {productDescription}.</p>
							</CardDescription>
							<FontAwesomeIcon icon={faLink} /><a href="#">{productLink}</a>
						</CardContent>
						
						<CardFooter>
							<CardTags>
								<a href='#'>{`#${productTags}`}</a>
								<a href='#'>{`#${productTags}`}</a>
							</CardTags>
							<CardReactions>
								<IconLike />
								<IconHeart />
								<IconStar />
								<IconShare />
							</CardReactions>
						</CardFooter>
					</CardBody>
				</div>
			</div>
		</CardWrapper>
  );
};
