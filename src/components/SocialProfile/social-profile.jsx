import PropTypes from "prop-types";
import {
    SocialProfileWrapper, 
    AvatarImageWrapper, 
    UserNickName,
    StyledGrayTxt,
    StyledGrayTxtSpan,
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
                
                <UserNickName className="name">{userName}</UserNickName>
                <StyledGrayTxt className="tag" style={{textTransform: 'lowercase'}}>@{userTag}</StyledGrayTxt>
                <StyledGrayTxt className="location">{userLocation}</StyledGrayTxt>
            </div>

            <StatsList className="stats">
                <StatsListItem>
                    <StyledGrayTxtSpan className="label">Followers</StyledGrayTxtSpan>
                    <b className="quantity">{userFollowers}</b>
                </StatsListItem>
                <StatsListItem>
                    <StyledGrayTxtSpan className="label">Views</StyledGrayTxtSpan>
                    <b className="quantity">{userViews}</b>
                </StatsListItem>
                <StatsListItem>
                    <StyledGrayTxtSpan className="label">Likes</StyledGrayTxtSpan>
                    <b className="quantity">{userLikes}</b>
                </StatsListItem>
            </StatsList>
        </SocialProfileWrapper>          
    )
};

Profile.propTypes = {
    userAvatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userTag: PropTypes.string.isRequired,
    userLocation: PropTypes.string.isRequired,
    userFollowers: PropTypes.number.isRequired,
    userViews: PropTypes.number.isRequired,
    userLikes: PropTypes.number.isRequired,
  };
 