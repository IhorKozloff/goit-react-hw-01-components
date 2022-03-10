import { FriendsSchedule, ScheduleItem, StatusOnline, StatusOffline, FriendName } from 'components/FriendList/friend-list.styled';

export const FriendList = ({friends}) => (
    <FriendsSchedule className="friend-list">
        {friends.map(({avatar, name, isOnline, id}) => (
            <ScheduleItem key={id} className="item">
                <span className="status">
                    {isOnline 
                    ? <StatusOnline/>
                    : <StatusOffline/>}
                </span>
                <img className="avatar" src={avatar} alt="User avatar" width="80" />
                <FriendName className="name">{name}</FriendName>
            </ScheduleItem>
        ))}
    </FriendsSchedule>
);