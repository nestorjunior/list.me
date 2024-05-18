import {Button, ButtonGroup} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';

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
	CardBoxShareUser,
	CardBody 
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
		<CardWrapper className='card mb-3'>
			<div className="row align-items-center">
				<div className="col-sm-12 col-md-3 d-flex justify-content-center">
					{/* <CardImage src={UserCardImageUrl} className="img-fluid" alt={UserCardImageAlt} /> */}
					<Avatar
						alt="John Doe"
						src={UserCardImageUrl}
						sx={{ width: 150, height: 150, border: '5px solid #d5e8eb' }} // Tamanho personalizado
					/>
				</div>
				<div className="col-sm-12 col-md-9">
					<CardBody>
					
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
						
						<CardParagraph className='card-text mt-10-negative'> {UserCardNickname}</CardParagraph>
						<CardParagraph className='card-text'> {UserCardOccupation}</CardParagraph>
						<CardParagraph className="card-text"> {UserCardDescription}.</CardParagraph>
						<CardParagraph className="card-text"> {UserCardLocation}.</CardParagraph>
						
						<CardFooter>
							<div>
								<ButtonGroup variant="contained" aria-label="Following and Messagem user">
									<Button variant="contained">{UserCardFollow}</Button>
									<Button variant="contained">{UserCardMessage}</Button>
								</ButtonGroup>
							</div>
							<CardBoxShareUser>
								<ShareIcon sx={{ fontSize: 30 }} />
							</CardBoxShareUser>
						</CardFooter>

					</CardBody>
				</div>
			</div>
		</CardWrapper>
	</>
  );
};
