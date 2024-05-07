import { IconPaperPlane } from '../Icons';
import { IconStar } from '../Icons';
import { IconHeart } from '../Icons';
import { IconLike } from '../Icons';
import { IconThumbTack } from '../Icons'
import { IconFileLines } from '../Icons'
import { IconLink } from '../Icons';

import './styles'

import { 
	CardWrapper,
	CardImage,
	CardBody,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardLink,
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
				<div className="col-md-3 d-flex justify-content-center">
					<CardImage src={imageUrl} className="img-fluid" alt={productImageAlt} />
				</div>
				<div className="col-md-9">
					<CardBody className="card-body">
						<CardContent>
							<CardHeader>
								<CardTitle>
									<IconThumbTack /> <h5 className="card-title"> {productTitle}</h5>
								</CardTitle>
								<small className="text-body-secondary">{productLastUpdate}</small>
							</CardHeader>
							<CardDescription>
								<IconFileLines /><p className="card-text"> {productDescription}.</p>
							</CardDescription>
							<CardLink>
								<IconLink/> <a href="#">{productLink}</a>
							</CardLink>
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
								<IconPaperPlane />
							</CardReactions>
						</CardFooter>
					</CardBody>
				</div>
			</div>
		</CardWrapper>
  );
};
