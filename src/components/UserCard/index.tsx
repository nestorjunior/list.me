import { Share } from '../Share';
import { 
	CardWrapper,
	CardImage, 
	CardContent, 
	CardTitle, 
	CardFollowers, 
	CardParagraph, 
	CardBoxParagraph, 
	CardBoxFollowers,
	CardFooter,
	CardButton,
	CardBoxShareUser 
} from './styles'

interface UserCardProps {
	UserCardImageUrl: string;
	UserCardImageAlt?: string;
  UserCardNickname: string; 
  UserCardName: string; 
  UserCardOccupation?: string; 
	UserCardDescription?: string;
	UserCardLocation?: string;
	UserCardFollowingCount?: number;
  UserCardFollowersCount?: number;
	UserCardFollow: string;
	UserCardMessage: string;
} 

export function UserCard ({
	UserCardImageUrl,
	UserCardImageAlt,
  UserCardNickname, 
  UserCardName, 
  UserCardOccupation, 
	UserCardDescription,
	UserCardLocation,
	UserCardFollowingCount,
  UserCardFollowersCount,
	UserCardFollow,
	UserCardMessage
}: UserCardProps) {
  return (
		<>
		<CardWrapper className='card mb-3 w-100'>
			<div className="row g-0 align-items-center">
				<div className="col-sm-12 col-md-4 d-flex justify-content-center">
					<CardImage src={UserCardImageUrl} className="img-fluid" alt={UserCardImageAlt} />
				</div>
				<div className="col-sm-12 col-md-8">
					<div className="card-body">
					
						<CardContent>
							<CardTitle> {UserCardName}</CardTitle>
							<CardFollowers>
								<CardBoxFollowers>
									<CardBoxParagraph>{UserCardFollowingCount}</CardBoxParagraph>
									<small className="text-body-secondary">Following</small>
								</CardBoxFollowers>

								<CardBoxFollowers>
									<CardBoxParagraph>{UserCardFollowersCount}</CardBoxParagraph>
									<small className="text-body-secondary">Followers</small>
								</CardBoxFollowers>

							</CardFollowers>
						</CardContent>	

						<CardParagraph className='card-text'> {UserCardNickname}</CardParagraph>
						<CardParagraph className='card-text'> {UserCardOccupation}</CardParagraph>
						<CardParagraph className="card-text"> {UserCardDescription}.</CardParagraph>
						<CardParagraph className="card-text"> {UserCardLocation}.</CardParagraph>
						
						<CardFooter>
							<div>
								<CardButton type="button" className="btn me-1">{UserCardFollow}</CardButton>
								<CardButton type="button" className="btn me-1">{UserCardMessage}</CardButton>
							</div>
							<CardBoxShareUser>
								<Share />
							</CardBoxShareUser>
						</CardFooter>

					</div>
				</div>
			</div>
		</CardWrapper>
	</>
  );
};
