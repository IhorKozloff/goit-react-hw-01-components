import PropTypes from "prop-types";

export const Profile = ({userAvatar, userName, userTag, userLocation, userFollowers, userViews, userLikes}) => {
    return (
        <div className="profile">
        <div className="description">
        <img
            src={userAvatar}
            alt="User avatar"
            className="avatar"
        />
        <p className="name">{userName}</p>
        <p className="tag">{userTag}</p>
        <p className="location">{userLocation}</p>
        </div>
    
        <ul className="stats">
        <li>
            <span className="label">Followers</span>
            <span className="quantity">{userFollowers}</span>
        </li>
        <li>
            <span className="label">Views</span>
            <span className="quantity">{userViews}</span>
        </li>
        <li>
            <span className="label">Likes</span>
            <span className="quantity">{userLikes}</span>
        </li>
        </ul>
    </div>          
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