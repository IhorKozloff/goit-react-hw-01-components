import { FriendsSchedule, ScheduleItem, StatusOnline, FriendName } from 'components/FriendList/friend-list.styled';
import PropTypes from "prop-types";

export const FriendList = ({friends}) => (
    <FriendsSchedule className="friend-list">
        {friends.map(({avatar, name, isOnline, id}) => (
            <ScheduleItem key={id} className="item">
                <span className="status">
                    
                    <StatusOnline onlineStatus = {isOnline}></StatusOnline>
                    
                </span>
                <img className="avatar" src={avatar} alt="User avatar" width="80" />
                <FriendName className="name">{name}</FriendName>
            </ScheduleItem>
        ))}
    </FriendsSchedule>
);


FriendList.propTypes = {
    avatar: PropTypes.number,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}
