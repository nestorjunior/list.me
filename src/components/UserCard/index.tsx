import { IconShare } from "../Icons";

import {
  CardWrapper,
  CardContent,
  CardTitle,
  CardFollowers,
  CardParagraph,
  CardBoxParagraph,
  CardBoxFollowers,
  CardFooter,
  CardBoxShareUser,
  CardBody,
	StyledImage,
	StyledButton
} from "./styles";

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

export function UserCard({
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
  UserCardMessage,
}: UserCardProps) {
  return (
    <>
      <CardWrapper className="card mb-3">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <StyledImage
              alt={UserCardImageAlt}
              src={UserCardImageUrl}
            />
          </div>
          <div className="col-sm-12 col-md-9">
            <CardBody>
              <CardContent>
                <CardTitle> {UserCardName}</CardTitle>
                <CardFollowers>
                  <CardBoxFollowers>
                    <CardBoxParagraph>
                      {UserCardFollowingCount}
                    </CardBoxParagraph>
                    <small className="text-body-secondary">Following</small>
                  </CardBoxFollowers>

                  <CardBoxFollowers>
                    <CardBoxParagraph>
                      {UserCardFollowersCount}
                    </CardBoxParagraph>
                    <small className="text-body-secondary">Followers</small>
                  </CardBoxFollowers>
                </CardFollowers>
              </CardContent>

              <CardParagraph className="card-text mt-10-negative">
                {" "}
                {UserCardNickname}
              </CardParagraph>
              <CardParagraph className="card-text">
                {" "}
                {UserCardOccupation}
              </CardParagraph>
              <CardParagraph className="card-text">
                {" "}
                {UserCardDescription}.
              </CardParagraph>
              <CardParagraph className="card-text">
                {" "}
                {UserCardLocation}.
              </CardParagraph>

              <CardFooter>
                <div>
                  <StyledButton variant="contained">
                    {UserCardFollow}
                  </StyledButton>
                  <StyledButton variant="contained">
                    {UserCardMessage}
                  </StyledButton>
                </div>
                <CardBoxShareUser>
                  <IconShare />
                </CardBoxShareUser>
              </CardFooter>
            </CardBody>
          </div>
        </div>
      </CardWrapper>
    </>
  );
}
