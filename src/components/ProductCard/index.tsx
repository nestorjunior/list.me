import { HintButton } from "../HintButton";

import {
	IconCirclePlus,
	IconFileLines,
	IconHeart,
	IconLink,
	IconStar,
} from "../Icons";
import {
	CardBody,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardLink,
	CardParagraphDescription,
	CardReactions,
	CardTags,
	CardTitle,
	CardUpdateProdutct,
	CardWrapper,
} from "./styles";

interface ProductCardProps {
	imageUrl: string;
	productTitle: string;
	productDescription?: string;
	productLink?: string;
	productTags?: string;
	productImageAlt?: string;
	productLastUpdate?: string;
}

interface User {
	id: number;
	name: string;
	avatarUrl: string;
}

export function ProductCard({
	imageUrl,
	productTitle,
	productDescription,
	productLink,
	productTags,
	productImageAlt,
	productLastUpdate,
}: ProductCardProps) {
	const users: User[] = [
		{
			id: 1,
			name: "Deco Oliveira",
			avatarUrl: "https://via.placeholder.com/40",
		},
		{
			id: 2,
			name: "Eduardo Marrane",
			avatarUrl: "https://via.placeholder.com/40",
		},
		{
			id: 3,
			name: "Willian Bernardo",
			avatarUrl: "https://via.placeholder.com/40",
		},
	];

	const handleSelectUser = (user: User) => {
		console.log("Usuário selecionado:", user);
	};

	return (
		<CardWrapper className="card">
			<div className="row">
				<div className="col-md-3 d-flex justify-content-center">
					<CardImage
						src={imageUrl}
						className="img-fluid"
						alt={productImageAlt}
					/>
				</div>
				<div className="col-md-9">
					<CardBody className="card-body">
						<CardContent>
							<CardHeader>
								<CardTitle className="card-title">{productTitle}</CardTitle>
								<CardUpdateProdutct className="text-body-secondary">
									{productLastUpdate}
								</CardUpdateProdutct>
							</CardHeader>
							<CardDescription>
								<IconFileLines />
								<CardParagraphDescription>
									{productDescription}
								</CardParagraphDescription>
							</CardDescription>
							<CardLink>
								<IconLink /> <a href="/">{productLink}</a>
							</CardLink>
						</CardContent>
						<CardFooter>
							<CardTags>
								<a href="/">{`#${productTags}`}</a>
								<a href="/">{`#${productTags}`}</a>
							</CardTags>
							<CardReactions>
								<IconHeart />
								<IconCirclePlus />
								<IconStar />
								<HintButton users={users} onSelectUser={handleSelectUser} />
							</CardReactions>
						</CardFooter>
					</CardBody>
				</div>
			</div>
		</CardWrapper>
	);
}
