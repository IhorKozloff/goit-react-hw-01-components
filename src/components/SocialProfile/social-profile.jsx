import PropTypes from "prop-types";
import {
    SocialProfileWrapper, 
    AvatarImageWrapper, 
    StatsList, 
    StatsListItem
} from 'components/SocialProfile/social-profile.styled';

export const Profile = ({userAvatar, userName, userTag, userLocation, userFollowers, userViews, userLikes}) => {
    return (
        <SocialProfileWrapper className="profile">
        <div className="description">
            <AvatarImageWrapper>
                <img
                    src={userAvatar}
                    alt="User avatar"
                    className="avatar"
                />
            </AvatarImageWrapper>
            
            <p className="name">{userName}</p>
            <p className="tag">@{userTag}</p>
            <p className="location">{userLocation}</p>
        </div>
    
        <StatsList className="stats">
            <StatsListItem>
                <span className="label">Followers</span>
                <span className="quantity">{userFollowers}</span>
            </StatsListItem>
            <StatsListItem>
                <span className="label">Views</span>
                <span className="quantity">{userViews}</span>
            </StatsListItem>
            <StatsListItem>
                <span className="label">Likes</span>
                <span className="quantity">{userLikes}</span>
            </StatsListItem>
        </StatsList>
    </SocialProfileWrapper>          
    )
};

Profile.propTypes = {
    userAvatar: PropTypes.string,
    userName: PropTypes.string,
    userTag: PropTypes.string,
    userLocation: PropTypes.string,
    userFollowers: PropTypes.number,
    userViews: PropTypes.number,
    userLikes: PropTypes.number,
  };