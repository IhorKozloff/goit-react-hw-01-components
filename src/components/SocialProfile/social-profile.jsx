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
    userAvatar: PropTypes.string,
    userName: PropTypes.string,
    userTag: PropTypes.string,
    userLocation: PropTypes.string,
    userFollowers: PropTypes.number,
    userViews: PropTypes.number,
    userLikes: PropTypes.number,
  };
 