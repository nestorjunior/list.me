import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
import { Star } from '../Star/Star'
import { Heart } from '../Heart/Heart'
import { Like } from '../Like/Like'

import './Card.scss'

interface CardProps {
	variant: string;
	imageUrl: string;
  username?: string;
  nickname?: string;
  followingCount?: number;
  followersCount?: number;
  occupation?: string;
  description?: string;
  location?: string;
	productTitle?: string; 
  productDescription?: string; 
  productLink?: string; 
}

export function Card({ 
	variant, 
	imageUrl, 
	username, 
	nickname, 
	followingCount, 
	followersCount, 
	occupation, 
	description,
	location,
	productTitle,
	productDescription,
	productLink
}: CardProps) {
	
	return (
		<div className={` ${variant} mb-3 d-flex justify-content-center `} style={{ height: '230px' }}>
      <div className="row g-0 align-items-center">
        <div className="col-md-4 d-flex justify-content-center">
          <img src={imageUrl} className="card-img img-fluid" alt="User avatar" />
        </div>
        <div className="col-md-8">
          <div className='card-body'>
            <div className='card-header-wb__detailsUser'>
              <div className='card-header-wb__detailsUserName'>
                <p><small className="text-body-secondary">{nickname}</small></p>
                <h5>{username}</h5>
              </div>
              <div className='card-header-wb__detailsUserFollow'>
                <div className='card-header-wb__detailsUserFollowBox'>
                  <span>{followingCount}</span>
                  <p>Following</p>
                </div>
                <div className='card-header-wb__detailsUserFollowBox'>
                  <span>{followersCount}</span>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <p>{occupation}</p>
            <p>{description}</p>
            <p className='card-text'>{location}</p>
            {productTitle && (
              <>
                <div className='card-title h5'><FontAwesomeIcon icon={faThumbTack} /> {productTitle}</div>
                <p className='card-text'><FontAwesomeIcon icon={faFileLines} /> {productDescription}</p>
                <p className='card-text'><FontAwesomeIcon icon={faLink} /> <a href={productLink}>{productLink}</a></p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
	)
}